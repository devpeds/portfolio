import { css } from '@emotion/react'
import { ReactElement } from 'react'

import Skill from '../../enums/Skill'
import { breakpoints, colors } from '../../styles'
import Section from '../Section'
import SkillChips from '../SkillChips'

const skillsCss = {
  card: css({
    display: 'flex',
    flexDirection: 'column',
    rowGap: 32,
    padding: 32,
    backgroundColor: colors.white,
    borderRadius: 24,
    boxShadow: `0 0 16px 0 ${colors.black12}`,
  }),
  row: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    [`@media (min-width: ${breakpoints.sm}px)`]: {
      flexDirection: 'row',
    },
  }),
  rowTitle: css({
    flexShrink: 0,
    minWidth: 160,
    fontSize: '1.2em',
    fontWeight: 900,
  }),
}

interface Props {
  skills: { [key: string]: Skill[] }
}

function Skills(props: Props): ReactElement {
  const { skills } = props

  return (
    <Section>
      <Section.Title>Skills</Section.Title>
      <div css={skillsCss.card}>
        {Object.keys(skills).map((category) => (
          <div key={category} css={skillsCss.row}>
            <span css={skillsCss.rowTitle}>{category}</span>
            <SkillChips skills={skills[category]} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
