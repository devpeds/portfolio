import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import imagemin from 'vite-plugin-imagemin'
import { Mode, plugin as markdown } from 'vite-plugin-markdown'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    svgr(),
    markdown({ mode: [Mode.MARKDOWN] }),
    imagemin({ webp: {} }),
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
  ],
})
