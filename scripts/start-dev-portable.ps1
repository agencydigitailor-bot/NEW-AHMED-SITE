$nodeDir = Join-Path (Get-Location) ".node"
$nodeExe = Join-Path $nodeDir "node.exe"

if (-not (Test-Path $nodeExe)) {
    Write-Host "Portable Node.js not found. Downloading..." -ForegroundColor Cyan
    if (-not (Test-Path $nodeDir)) {
        New-Item -ItemType Directory -Path $nodeDir | Out-Null
    }
    
    $zipPath = Join-Path $nodeDir "node.zip"
    $url = "https://nodejs.org/dist/v20.11.1/node-v20.11.1-win-x64.zip"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $zipPath -UseBasicParsing
        Write-Host "Download complete. Extracting..." -ForegroundColor Cyan
        
        Expand-Archive -Path $zipPath -DestinationPath $nodeDir -Force
        
        # Move files from subdirectory to .node
        $extractedDir = Join-Path $nodeDir "node-v20.11.1-win-x64"
        if (Test-Path $extractedDir) {
            Get-ChildItem -Path $extractedDir | Move-Item -Destination $nodeDir -Force
            Remove-Item -Path $extractedDir -Recurse -Force
        }
        
        Remove-Item -Path $zipPath -Force
        Write-Host "Portable Node.js installed successfully!" -ForegroundColor Green
    } catch {
        Write-Error "Failed to set up Node.js: $_"
        exit 1
    }
}

# Add local node directory to current process environment PATH
$env:PATH = "$nodeDir;$env:PATH"

Write-Host "Running: npm run dev..." -ForegroundColor Green
npm run dev
