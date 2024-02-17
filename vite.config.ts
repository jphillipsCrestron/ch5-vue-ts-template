import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default ({ mode }: any) => {
  const env = loadEnv(mode, process.cwd());
  const isDevelopment = env.VITE_APP_ENV === 'development';

  return defineConfig({
    plugins: [
      vue(),
      viteSingleFile(),
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/@crestron/ch5-crcomlib/build_bundles/umd/cr-com-lib.js',
            dest: ''
          },
          {
            src: 'node_modules/@crestron/ch5-webxpanel/dist/umd/index.js',
            dest: ''
          },
          {
            src: 'node_modules/@crestron/ch5-webxpanel/dist/umd/d4412f0cafef4f213591.worker.js',
            dest: ''
          }
        ]
      })
    ],
    base: './',
    build: {
      sourcemap: isDevelopment,
    },
  });
};
