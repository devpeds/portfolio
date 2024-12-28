import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface Props {
  flex?: number
  basis?: CSSProperties['flexBasis']
  grow?: CSSProperties['flexGrow']
  shrink?: CSSProperties['flexShrink']
  direction?: CSSProperties['flexDirection']
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  noWrap?: boolean
}

const propKeys: (keyof Props)[] = [
  'flex',
  'basis',
  'grow',
  'shrink',
  'direction',
  'alignItems',
  'justifyContent',
  'noWrap',
]

const FlexBox = styled('div', {
  shouldForwardProp: (propKey) => !(propKeys as string[]).includes(propKey),
})<Props>((props) => ({
  display: 'flex',
  flex: props.flex,
  flexBasis: props.basis,
  flexGrow: props.grow,
  flexShrink: props.shrink,
  flexDirection: props.direction,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  flexWrap: props.noWrap ? 'nowrap' : 'wrap',
}))

export default FlexBox
