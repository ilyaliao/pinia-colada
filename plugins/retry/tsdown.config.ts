import { defineConfig } from 'tsdown'
import type { Options } from 'tsdown'

const commonOptions = {
  sourcemap: true,
  format: ['cjs', 'esm'],
  external: ['vue', 'pinia', '@pinia/colada'],
  target: 'esnext',
} satisfies Options

export default defineConfig([
  {
    ...commonOptions,
    entry: ['src/index.ts'],
    globalName: 'PiniaColadaRetry',
  },
])
