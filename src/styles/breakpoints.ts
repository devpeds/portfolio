const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const

export type BreakPoint = keyof typeof breakpoints

export default breakpoints
