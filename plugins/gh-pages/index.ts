import fs from 'fs/promises'
import path from 'path'
import { Plugin, loadEnv } from 'vite'

/**
 * This is a plugin for adding 404.html on output bundle enabling multi-page SPA on github pages
 * - Reference: https://github.com/rafgraph/spa-github-pages
 */
export default function ghPages(mode: string): Plugin {
  let outDir = ''

  return {
    name: 'not-found-page',
    apply: 'build',
    configResolved: (config) => {
      outDir = config.build.outDir
      console.log(outDir)
    },
    closeBundle: async () => {
      const srcPath = path.resolve(__dirname, '404.html')
      const destPath = path.resolve(process.cwd(), outDir, '404.html')

      const env = loadEnv(mode, process.cwd(), 'VITE_')

      let content = await fs.readFile(srcPath, 'utf-8')
      content = content.replace(/%(\w+)%/g, (_, envVar) => env[envVar] || '')

      await fs.writeFile(destPath, content)
    },
  }
}
