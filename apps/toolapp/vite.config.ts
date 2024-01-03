/// <reference types='vitest' />
import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import solid from 'vite-plugin-solid';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/toolapp',

  server: {
    port: 4200,
    // host: 'localhost',
  },

  preview: {
    port: 4300,
    // host: 'localhost',
  },

  plugins: [nxViteTsPaths(), solid()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/toolapp',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    setupFiles: [
      './vitest.jsdom.config.ts'
    ],
    testTransformMode: { web: ["/\.[jt]sx?$/"] },
    // reporters: ['default'],
    // coverage: {
    //   reportsDirectory: '../../coverage/apps/toolapp',
    //   provider: 'v8',
    //   include: ['**']
    // },
  },
});
