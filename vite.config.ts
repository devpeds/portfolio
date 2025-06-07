import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'
import imagemin from 'vite-plugin-imagemin'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

import ghPages from './plugins/gh-pages'
import markdown, { Mode } from './plugins/markdown'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    tsConfigPaths(),
    svgr(),
    markdown({ mode: [Mode.HTML] }),
    imagemin({ webp: {} }),
    // NOTE: png must be placed last on formats to get `src`
    // https://github.com/ElMassimo/vite-plugin-image-presets/tree/main?tab=readme-ov-file#configuration-%EF%B8%8F
    imagePresets({
      thumbnail: widthPreset({
        widths: [320, 640, 960],
        formats: { png: { quality: 100 } },
      }),
      showcase: widthPreset({
        widths: [320, 640, 960],
        formats: { png: { quality: 100 } },
      }),
    }),
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
    ghPages(mode),
    visualizer({ filename: 'dist/stats.html' }),
  ],
}))
