import { generateBundleEsmConfig } from '@e2e/helper';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    generateBundleEsmConfig({
      syntax: 'es5',
      externalHelpers: true,
      tools: {
        swc: {
          jsc: {
            externalHelpers: false,
          },
        },
      },
      output: {
        distPath: {
          root: './dist/1',
        },
      },
    }),
    generateBundleEsmConfig({
      syntax: 'es5',
      tools: {
        swc: {
          jsc: {
            externalHelpers: true,
          },
        },
      },
      output: {
        distPath: {
          root: './dist/2',
        },
      },
    }),
  ],
  source: {
    entry: {
      index: '../__fixtures__/src/index.ts',
    },
  },
});