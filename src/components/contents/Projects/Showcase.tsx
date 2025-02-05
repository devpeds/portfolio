import { css } from '@emotion/react'
import { ReactElement, useRef } from 'react'

import { SvgChevronLeft } from '@/assets/svg'
import IconButton from '@/components/IconButton'
import Image from '@/components/Image'
import useHover from '@/hooks/useHover'
import { colors } from '@/styles'
import { hoverStyle, mediaQueryWidth, spacingXY } from '@/utils/styleUtil'
import { letIfTruthy } from '@/utils/sweet'

type ArrowPosition = 'left' | 'right'

const gap = 12

const showcaseCss = {
  self: css({
    position: 'relative',
  }),
  list: css({
    display: 'flex',
    flexDirection: 'row',
    gap,
    padding: spacingXY(24, 12),
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    scrollSnapType: 'x mandatory',
    scrollPadding: 24,
  }),
  item: css({
    flexShrink: 0,
    width: '100%',
    aspectRatio: 16 / 9,
    boxShadow: `0 0 8px ${colors.dark33}`,
    scrollSnapAlign: 'start',
    [mediaQueryWidth('sm')]: {
      width: `calc(100% / 2 - ${gap}px)`,
    },
  }),
  arrow: (position: ArrowPosition, visible: boolean) =>
    css(
      {
        visibility: visible ? 'visible' : 'hidden',
        opacity: visible ? 1 : 0,
        transition: 'visibility .1s, opacity .3s',
        backgroundColor: colors.white87,
        boxShadow: `0 0 8px ${colors.dark12}`,
        width: 60,
        height: 60,
        padding: 16,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: letIfTruthy(position === 'left', () => 4),
        ...letIfTruthy(position === 'right', () => ({
          right: 4,
          svg: {
            transform: 'rotate(180deg)',
          },
        })),
      },
      hoverStyle({
        opacity: 0.7,
        backgroundColor: colors.white87,
      }),
    ),
}

interface Props {
  className?: string
  assets: ImagePreset[]
}

function Showcase(props: Props): ReactElement {
  const { className, assets } = props
  const { ref, isHovered } = useHover<HTMLDivElement>()
  const scrollRef = useRef<HTMLDivElement>(null)

  const onArrowClick = (position: ArrowPosition): void => {
    const sign = position === 'left' ? -1 : 1
    const width = ref.current?.clientWidth ?? 0
    scrollRef.current?.scrollBy({
      left: sign * width,
      behavior: 'smooth',
    })
  }

  if (!assets.length) {
    return <></>
  }

  return (
    <div ref={ref} className={className} css={showcaseCss.self}>
      <div ref={scrollRef} css={showcaseCss.list}>
        {assets.map((image, index) => (
          <Image
            key={index}
            css={showcaseCss.item}
            image={image}
            alt={`project image ${index}`}
          />
        ))}
      </div>
      <IconButton
        css={showcaseCss.arrow('left', isHovered)}
        onClick={() => onArrowClick('left')}
        Icon={SvgChevronLeft}
      />
      <IconButton
        css={showcaseCss.arrow('right', isHovered)}
        onClick={() => onArrowClick('right')}
        Icon={SvgChevronLeft}
      />
    </div>
  )
}

export default Showcase
