import react from '@vitejs/plugin-react-swc'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
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
    markdown({
      mode: [Mode.HTML],
      markdownIt: MarkdownIt({
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
      }),
    }),
    imagemin({ webp: {} }),
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
  ],
})
