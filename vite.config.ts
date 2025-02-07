import react from '@vitejs/plugin-react-swc'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'
import imagemin from 'vite-plugin-imagemin'
import { Mode, plugin as markdown } from 'vite-plugin-markdown'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

const markdownIt = MarkdownIt({
  html: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (err) {
        console.warn(err)
      }
    }

    return ''
  },
}).use(markdownItAttrs)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    svgr(),
    markdown({ mode: [Mode.HTML], markdownIt }),
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
    visualizer({ filename: 'dist/stats.html' }),
  ],
})
