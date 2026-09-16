import path from 'path';
import { defineConfig, loadEnv, type ConfigEnv, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Server network & port configuration constants.
 */
const SERVER_CONFIG = {
  port: 8080,
  host: '0.0.0.0',
} as const;

/**
 * Normalizes and secures injected environment definitions.
 * Ensures edge-case safety against undefined values during compile-time replacement.
 */
const resolveEnvDefines = (env: Record<string, string>): Record<string, string> => {
  const geminiApiKey = JSON.stringify(env.GEMINI_API_KEY ?? '');

  return {
    'process.env.API_KEY': geminiApiKey,
    'process.env.GEMINI_API_KEY': geminiApiKey,
  };
};

/**
 * Path alias resolution mapping.
 */
const resolveAliases = (rootDir: string) => ({
  '@': path.resolve(rootDir, '.'),
});

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const projectRoot = process.cwd();
  const env = loadEnv(mode, projectRoot, '');

  return {
    server: SERVER_CONFIG,
    plugins: [react()],
    define: resolveEnvDefines(env),
    resolve: {
      alias: resolveAliases(projectRoot),
    },
  };
});

