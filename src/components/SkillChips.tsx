import { css } from '@emotion/react'
import { ReactElement } from 'react'

import Skill from '../enums/Skill'
import { colors } from '../styles'

const chipsCss = {
  list: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  }),
  item: css({
    padding: '4px 12px',
    borderRadius: 8,
    backgroundColor: colors.dark,
    color: colors.white,
    fontWeight: 700,
  }),
}

const skillCss: { [key: string]: ReturnType<typeof css> } = {
  [Skill.ts]: css({
    backgroundColor: '#3178c6',
  }),
  [Skill.dart]: css({
    backgroundColor: '#fa7343',
  }),
  [Skill.react]: css({
    backgroundColor: '#61dafb',
    color: colors.black60,
  }),
  [Skill.gatsby]: css({
    backgroundColor: '#663399',
  }),
  [Skill.rn]: css({
    backgroundColor: '#61dafb',
    color: colors.black60,
  }),
  [Skill.flutter]: css({
    backgroundColor: '#02569b',
  }),
  [Skill.firebase]: css({
    backgroundColor: '#ffca28',
    color: colors.black60,
  }),
  [Skill.aws]: css({
    backgroundColor: '#ff9900',
    color: colors.black60,
  }),
  [Skill.fastlane]: css({
    backgroundColor: '#00f2ea',
    color: colors.black60,
  }),
  [Skill.gradle]: css({
    backgroundColor: '#02303a',
  }),
  [Skill.gerrit]: css({
    backgroundColor: '#4a90e2',
  }),
}

interface Props {
  skills: Skill[]
}

function SkillChips(props: Props): ReactElement {
  const { skills } = props
  return (
    <ul css={chipsCss.list}>
      {skills.map((skill) => (
        <li key={skill} css={[chipsCss.item, skillCss[skill]]}>
          {skill}
        </li>
      ))}
    </ul>
  )
}

export default SkillChips
