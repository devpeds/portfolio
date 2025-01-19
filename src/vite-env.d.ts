/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: Record<string, unknown>

  // When "Mode.MARKDOWN" is requested
  const markdown: string

  // Modify below per your usage
  export { attributes, markdown }
}
