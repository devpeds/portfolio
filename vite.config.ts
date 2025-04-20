import react from '@vitejs/plugin-react-swc'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'
import imagemin from 'vite-plugin-imagemin'
import { Mode, plugin as markdown } from 'vite-plugin-markdown'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

const markdownItExternalLink = (md: MarkdownIt): void => {
  md.core.ruler.push('external_link', (state) => {
    const tokens = state.tokens
    const addExternalLink = (token: (typeof tokens)[0]) => {
      if (token.tag === 'a') {
        if (token.type !== 'link_open') {
          return
        }

        token.attrSet('target', '_blank')
        token.attrSet('rel', 'noopener noreferrer')
      } else {
        token.children?.forEach(addExternalLink)
      }
    }

    tokens.forEach(addExternalLink)
  })
}

const markdownItRenderFigure = (md: MarkdownIt): void => {
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const attrs = token.attrs
    if (!attrs) {
      throw Error('attrs cannot be empty')
    }

    if (token.hidden) {
      return ''
    }

    const src = token.attrGet('src')
    const alt = self.renderInlineAsText(token.children ?? [], options, env)

    const img = `<img src="${src}" alt="${alt}"/>`
    const caption = alt && `<figcaption>${alt}</figcaption>`
    return `<figure>${img}${caption}</figure>`
  }
}

const markdownIt = MarkdownIt({
  html: true,
  linkify: true,
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
})
  .use(markdownItExternalLink)
  .use(markdownItRenderFigure)
  .use(markdownItAnchor, {
    // NOTE: 플러그인 내부적으로 문자열을 인코딩하므로 가독성을 위해 인코딩하지 않도록 커스터마이징
    slugify: (s) => s.trim().toLowerCase().replace(/\s+/g, '-'),
  })

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
