import { CSSInterpolation } from '@emotion/serialize'

import { BreakPoint, breakpoints } from '../styles'

export function mediaQueryWidth(breakPoint: BreakPoint): string {
  return `@media (min-width: ${breakpoints[breakPoint]}px)`
}

export function paddingXY(x: number, y: number): string {
  return `${y}px ${x}px`
}

export function paddingLRTB(
  left: number,
  right: number,
  top: number,
  bottom: number,
): string {
  return `${top}px ${right}px ${bottom}px ${left}px`
}

export function hoverStyle(css: CSSInterpolation): CSSInterpolation {
  return {
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': css,
    },
    '&:active': css,
  }
}
