param(
  [int]$Port = 3000,
  [string]$Root = "dist"
)

$ErrorActionPreference = "Stop"

$rootFull = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $Root))
if (-not (Test-Path $rootFull)) {
  Write-Host "Root not found: $rootFull"
  exit 1
}

$mime = @{
  ".css"  = "text/css; charset=utf-8"
  ".gif"  = "image/gif"
  ".htm"  = "text/html; charset=utf-8"
  ".html" = "text/html; charset=utf-8"
  ".ico"  = "image/x-icon"
  ".jpeg" = "image/jpeg"
  ".jpg"  = "image/jpeg"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".map"  = "application/json; charset=utf-8"
  ".pdf"  = "application/pdf"
  ".png"  = "image/png"
  ".svg"  = "image/svg+xml"
  ".txt"  = "text/plain; charset=utf-8"
  ".webp" = "image/webp"
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()
Write-Host "Serving $rootFull at http://localhost:$Port/"

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 8192, $true)
    $requestLine = $reader.ReadLine()
    if ([string]::IsNullOrWhiteSpace($requestLine)) {
      $client.Close()
      continue
    }

    $parts = $requestLine.Split(" ")
    $method = $parts[0]
    $rawTarget = $parts[1]

    while ($true) {
      $h = $reader.ReadLine()
      if ($null -eq $h -or $h -eq "") { break }
    }

    if ($rawTarget -like "*?*") { $pathPart = $rawTarget.Split("?", 2)[0] } else { $pathPart = $rawTarget }
    $pathPart = [System.Uri]::UnescapeDataString($pathPart)
    if ($pathPart.StartsWith("/")) { $pathPart = $pathPart.Substring(1) }
    $pathPart = $pathPart -replace "/", "\"
    if ($pathPart -eq "") { $pathPart = "index.html" }

    $requestedFull = [System.IO.Path]::GetFullPath((Join-Path $rootFull $pathPart))
    if (-not $requestedFull.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
      $requestedFull = Join-Path $rootFull "index.html"
    } elseif (-not (Test-Path $requestedFull -PathType Leaf)) {
      $ext = [System.IO.Path]::GetExtension($pathPart)
      if ([string]::IsNullOrEmpty($ext)) {
        $requestedFull = Join-Path $rootFull "index.html"
      } else {
        $requestedFull = $null
      }
    }

    if ($null -eq $requestedFull) {
      $body = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
      $headerStr = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
      $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headerStr)
      $stream.Write($headerBytes, 0, $headerBytes.Length)
      if ($method -ne "HEAD") { $stream.Write($body, 0, $body.Length) }
      $stream.Flush()
      $client.Close()
      continue
    }

    $bytes = [System.IO.File]::ReadAllBytes($requestedFull)
    $ext = [System.IO.Path]::GetExtension($requestedFull).ToLowerInvariant()
    $contentType = $mime[$ext]
    if ([string]::IsNullOrWhiteSpace($contentType)) { $contentType = "application/octet-stream" }

    $headerStr = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headerStr)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    if ($method -ne "HEAD") { $stream.Write($bytes, 0, $bytes.Length) }
    $stream.Flush()
    $client.Close()
  } catch {
    try { $client.Close() } catch {}
  }
}
