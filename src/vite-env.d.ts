/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.md' {
  const attributes: {
    name: string
    startAt: string
    endAt?: string
    techStack: Skill[]
    description: string
  }

  // When "Mode.HTML" is requested
  const html: string

  // Modify below per your usage
  export { attributes, html }
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_ORIGIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
