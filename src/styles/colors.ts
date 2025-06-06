const colors = {
  white: '#ffffff',
  white87: 'rgba(255, 255, 255, .87)',
  white60: 'rgba(255, 255, 255, .60)',
  white33: 'rgba(255, 255, 255, .33)',
  black: '#000000',
  black60: 'rgba(0, 0, 0, .60)',
  black12: 'rgba(0, 0, 0, .12)',
  // TODO: decide primary color
  primary: '#ff6b6b', // '#9f72ff',
  primary08: 'rgba(255, 107, 107, .08)', // 'rgba(159, 114, 255, .08)',
  lightGray: '#f5f5f5',
  lightGray87: 'rgba(245, 245, 245, .87)',
  lightGray60: 'rgba(245, 245, 245, .60)',
  dark: '#222222',
  dark87: 'rgba(34, 34, 34, .87)',
  dark60: 'rgba(34, 34, 34, .60)',
  dark33: 'rgba(34, 34, 34, .33)',
  dark12: 'rgba(34, 34, 34, .12)',
} as const

export type Color = keyof typeof colors

export default colors
