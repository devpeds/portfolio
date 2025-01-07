import { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react'

export type { JobPosition, default as Career } from './Career'
export type { default as Profile } from './Profile'
export type { default as Project } from './Project'

export type HTMLComponentProps<T extends HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>

export type HTMLComponentType<T extends HTMLElement> = ComponentType<
  HTMLComponentProps<T>
>
