import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['server/server.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    target: 'node18',
    format: 'esm',
    outDir: "dist",
    external: ['virtual:remix/server-build', "fs"],
    noExternal: ['@react-router/serve', 'hono', 'isbot', 'react',  'react-router'],
})