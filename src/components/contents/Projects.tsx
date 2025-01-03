import { css } from '@emotion/react'
import { ReactElement } from 'react'

import { breakpoints, colors } from '../../styles'
import { Project } from '../../types'
import { formatInterval } from '../../utils/dateUtil'
import Section from '../Section'
import SkillChips from '../SkillChips'

const gap = 32
const numberOfRows = 2

const projectsCss = {
  list: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  }),
  item: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: colors.white,
    color: colors.dark87,
    fontSize: '1em',
    textAlign: 'left',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 16,
    overflow: 'hidden',
    transition: 'transform .1s',
    boxShadow: `0 0 16px 0 ${colors.black12}`,
    [`@media (min-width: ${breakpoints.sm}px)`]: {
      width: `calc((100% - ${gap}px) / ${numberOfRows})`,
    },
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }),
  image: css({
    objectFit: 'cover',
    aspectRatio: 16 / 9,
  }),
  content: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
  }),
  period: css({
    fontSize: '0.8em',
    fontWeight: 700,
    color: colors.dark60,
    marginBottom: 4,
  }),
  title: css({
    fontSize: '1.2em',
    fontWeight: 700,
    marginBottom: 12,
  }),
  description: css({
    flex: 1,
    lineHeight: 1.5,
  }),
  hr: css({
    borderColor: colors.dark12,
    margin: '24px 0',
  }),
  techStack: css({
    fontSize: 16,
    lineHeight: '20px',
    gap: 8,
    height: 30,
    overflow: 'hidden',
  }),
}

interface Props {
  projects: Project[]
}

function Projects(props: Props): ReactElement {
  const { projects } = props
  return (
    <Section>
      <Section.Title>Projects</Section.Title>
      <div css={projectsCss.list}>
        {projects.map((project) => (
          <button
            key={project.name}
            css={projectsCss.item}
            onClick={() => console.log('click')}
          >
            <img css={projectsCss.image} src={project.image} />
            <div css={projectsCss.content}>
              <div css={projectsCss.period}>
                {formatInterval(project.startAt, project.endAt)}
              </div>
              <div css={projectsCss.title}>{project.name}</div>
              <div css={projectsCss.description}>{project.description}</div>
              <hr css={projectsCss.hr} />
              <SkillChips
                css={projectsCss.techStack}
                skills={project.techStack}
              />
            </div>
          </button>
        ))}
      </div>
    </Section>
  )
}

export default Projects
