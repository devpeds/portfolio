/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_ORIGIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

type ImagePreset = {
  type: string
  loading?: 'eager' | 'lazy'
  srcset: string
  src?: string
}[]

declare module '*.png?preset=thumbnail' {
  const preset: ImagePreset
  export default preset
}

declare module '*.png?preset=showcase' {
  const preset: ImagePreset
  export default preset
}

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
