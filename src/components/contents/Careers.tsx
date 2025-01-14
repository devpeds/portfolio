import { css } from '@emotion/react'
import { ReactElement } from 'react'

import { colors } from '@/styles'
import { Career } from '@/types'
import { formatDuration, formatInterval } from '@/utils/dateUtil'

const headerSpacing = 12
const markerSize = 15
const markerSpacing = 4
const markerLeft = 4
const tailWidth = 3
const tailLeft = (markerSize - tailWidth) / 2 + markerLeft

const careersCss = {
  list: css({
    marginTop: -headerSpacing,
  }),
  header: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    fontSize: '1.8em',
    fontWeight: 700,
    paddingTop: headerSpacing,
    paddingBottom: 24,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: tailLeft,
      width: tailWidth,
      backgroundColor: colors.dark12,
      height: 24 - headerSpacing,
    },
  }),
  item: css({
    position: 'relative',
    paddingLeft: 40,
  }),
  period: css({
    fontSize: '0.9em',
    fontWeight: 700,
    color: colors.dark33,
    marginBottom: 4,
  }),
  content: css({
    paddingBottom: 40,
    color: colors.dark87,
  }),
  title: css({
    fontSize: '1.5em',
    fontWeight: 600,
    marginBottom: 8,
  }),
  description: css({
    fontSize: '1.1em',
    whiteSpace: 'break-spaces',
  }),
  marker: css({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: markerSize,
    '&:before': {
      content: '""',
      width: markerSize,
      height: markerSize,
      borderRadius: '100%',
      backgroundColor: colors.primary,
      position: 'absolute',
      top: markerSpacing,
      left: markerLeft,
    },
    '&:after': {
      content: '""',
      width: tailWidth,
      backgroundColor: colors.dark12,
      position: 'absolute',
      top: markerSize + markerSpacing * 2,
      left: tailLeft,
      bottom: 0,
    },
  }),
  noTail: css({
    '&:after': {
      content: 'none',
    },
  }),
}

interface ItemProps {
  career: Career
  noTail?: boolean
}

function CareerItem(props: ItemProps): ReactElement {
  const { career, noTail } = props
  return (
    <>
      <li css={careersCss.header}>{career.company.name}</li>
      {...career.positions.map((position, index) => (
        <li key={index} css={careersCss.item}>
          <div css={careersCss.period}>
            {formatInterval(position.startAt, position.endAt)} ·{' '}
            {formatDuration(position.startAt, position.endAt)}
          </div>
          <div css={careersCss.content}>
            <div css={careersCss.title}>
              {position.title}, {position.employmentType}
            </div>
            <div css={careersCss.description}>
              {position.performances
                .map((performance) => `- ${performance}`)
                .join('\n')}
            </div>
          </div>
          <div
            css={[
              careersCss.marker,
              noTail &&
                index === career.positions.length - 1 &&
                careersCss.noTail,
            ]}
          />
        </li>
      ))}
    </>
  )
}

interface Props {
  careers: Career[]
}

function Careers(props: Props): ReactElement {
  const { careers } = props
  return (
    <ul css={careersCss.list}>
      {careers.map((career, index) => (
        <CareerItem
          key={career.company.name}
          career={career}
          noTail={index === careers.length - 1}
        />
      ))}
    </ul>
  )
}

export default Careers
