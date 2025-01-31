import { CSSInterpolation } from '@emotion/serialize'

import { BreakPoint, breakpoints } from '@/styles'

import { letIfTruthy } from './sweet'

export function mediaQueryConditionWidth(breakPoint: BreakPoint): string {
  return `(min-width: ${breakpoints[breakPoint]}px)`
}

export function mediaQueryWidth(breakPoint: BreakPoint): string {
  return `@media ${mediaQueryConditionWidth(breakPoint)}`
}

export function spacingXY(x: number, y: number): string {
  return `${y}px ${x}px`
}

export function spacingX(x: number): string {
  return spacingXY(x, 0)
}

export function spacingY(y: number): string {
  return spacingXY(0, y)
}

export function spacingLRTB(
  left: number,
  right: number,
  top: number,
  bottom: number,
): string {
  return `${top}px ${right}px ${bottom}px ${left}px`
}

export function hoverStyle(
  css: CSSInterpolation,
  mobileStyle: 'active' | 'none' = 'active',
): CSSInterpolation {
  return {
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': css,
    },
    ...letIfTruthy(mobileStyle === 'active', () => ({ '&:active': css })),
  }
}

export function parseColor(color: string): [number, number, number, number] {
  if (color.startsWith('#')) {
    return [
      parseInt(color.substring(1, 3), 16),
      parseInt(color.substring(3, 5), 16),
      parseInt(color.substring(5, 7), 16),
      1,
    ]
  }

  if (color.startsWith('rgb')) {
    const startIndex = color.startsWith('rgba') ? 5 : 4
    const rgba = color
      .substring(startIndex, color.length - 1)
      .split(',')
      .map((v) => parseInt(v))
    return [rgba[0], rgba[1], rgba[2], rgba[3] ?? 1]
  }

  throw new Error('unsupported format')
}
