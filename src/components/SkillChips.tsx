import { css } from '@emotion/react'
import { ReactElement } from 'react'

import { Skill } from '../enums'
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
    fontWeight: 700,
  }),
}

const skillCss: { [key: string]: ReturnType<typeof css> } = {
  base: css({
    border: `1px solid ${colors.dark12}`,
    color: colors.dark87,
  }),
  [Skill.ts]: css({
    backgroundColor: '#3178c6',
    color: colors.white,
  }),
  [Skill.dart]: css({
    backgroundColor: '#fa7343',
    color: colors.white,
  }),
  [Skill.react]: css({
    backgroundColor: '#61dafb',
    color: colors.black60,
  }),
  [Skill.next]: css({
    backgroundColor: colors.black,
    color: colors.white,
  }),
  [Skill.gatsby]: css({
    backgroundColor: '#663399',
    color: colors.white,
  }),
  [Skill.rn]: css({
    backgroundColor: '#61dafb',
    color: colors.black60,
  }),
  [Skill.flutter]: css({
    backgroundColor: '#02569b',
    color: colors.white,
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
    color: colors.white,
  }),
  [Skill.gerrit]: css({
    backgroundColor: '#4a90e2',
    color: colors.white,
  }),
  [Skill.tQuery]: css({
    backgroundColor: '#ff4154',
    color: colors.white,
  }),
  [Skill.tailwind]: css({
    backgroundColor: '#38b2ac',
    color: colors.white,
  }),
  [Skill.emotion]: css({
    backgroundColor: '#d36ac2',
    color: colors.white,
  }),
  [Skill.graphql]: css({
    backgroundColor: '#e10098',
    color: colors.white,
  }),
}

interface Props {
  className?: string
  skills: string[]
}

function SkillChips(props: Props): ReactElement {
  const { className, skills } = props
  return (
    <ul className={className} css={chipsCss.list}>
      {skills.map((skill) => (
        <li key={skill} css={[chipsCss.item, skillCss[skill] ?? skillCss.base]}>
          {skill}
        </li>
      ))}
    </ul>
  )
}

export default SkillChips
