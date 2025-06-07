import { defineConfig } from 'tsdown'
import type { Options } from 'tsdown'

const commonOptions = {
  sourcemap: true,
  format: ['cjs', 'esm'],
  external: ['vue', 'pinia', '@pinia/colada', '@vue/devtools-api'],
  target: 'esnext',
  dts: {
    compilerOptions: {
      composite: false,
    },
  },
} satisfies Options

export default defineConfig([
  {
    ...commonOptions,
    entry: ['src/index.ts'],
    globalName: 'PiniaColada',
  },
])
