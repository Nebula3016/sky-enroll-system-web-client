import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from 'vite-svg-loader';
import mockConfig from './mocks/vite.mock.config';

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const { VITE_SYSTEM_HOST, VITE_SYSTEM_PORT, VITE_SYSTEM_PREVIEW_HOST, VITE_SYSTEM_PREVIEW_PORT } = env;

  return {
    plugins: [
      vue(),
      svgLoader({
        // 可选配置
        defaultImport: 'component', // 默认导出为组件
        svgo: true, // 自动优化 SVG
        svgoConfig: {},
      }),
      viteMockServe(mockConfig(command, mode)),
      vueDevTools(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/root.scss" as *;',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': resolve(__dirname),
        '~': resolve('./src/assets'),
        '@comps': resolve('./src/components'),
      },
    },
    server: {
      host: VITE_SYSTEM_HOST,
      port: Number(VITE_SYSTEM_PORT),
    },
    preview: {
      host: VITE_SYSTEM_PREVIEW_HOST,
      port: Number(VITE_SYSTEM_PREVIEW_PORT),
    },
  };
});
