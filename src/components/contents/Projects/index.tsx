import { css } from '@emotion/react'
import { ReactElement, Suspense, lazy, useMemo, useState } from 'react'

import Image from '@/components/Image'
import SkillChips from '@/components/SkillChips'
import { breakpoints, colors } from '@/styles'
import { Project } from '@/types'
import { formatInterval } from '@/utils/dateUtil'
import { hoverStyle } from '@/utils/styleUtil'
import { letIf } from '@/utils/sweet'

const ProjectDetailModal = lazy(() => import('./ProjectDetailModal'))

const gap = 32
const numberOfRows = 2

const projectsCss = {
  list: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  }),
  item: css(
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      backgroundColor: colors.white,
      color: colors.dark87,
      fontSize: '1em',
      textAlign: 'left',
      width: '100%',
      borderRadius: 16,
      overflow: 'hidden',
      transition: 'transform .1s',
      boxShadow: `0 0 16px 0 ${colors.black12}`,
      [`@media (min-width: ${breakpoints.sm}px)`]: {
        width: `calc((100% - ${gap}px) / ${numberOfRows})`,
      },
    },
    hoverStyle({ transform: 'scale(1.05)' }, 'none'),
  ),
  image: css({
    objectFit: 'cover',
    aspectRatio: 16 / 9,
    width: '100%',
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
    color: colors.black60,
    marginBottom: 4,
  }),
  title: css({
    fontSize: '1.2em',
    fontWeight: 700,
    marginBottom: 12,
  }),
  description: css({
    flex: 1,
    marginBottom: 24,
  }),
  techStack: css({
    marginTop: 24,
    fontSize: 16,
    lineHeight: '20px',
    gap: 8,
    height: 34,
    overflow: 'hidden',
  }),
}

interface CardProps {
  project: Project
  onClick: () => void
}

function ProjectCard(props: CardProps): ReactElement {
  const { project, onClick } = props

  return (
    <button css={projectsCss.item} onClick={onClick}>
      <Image css={projectsCss.image} image={project.image} alt={project.name} />
      <div css={projectsCss.content}>
        <div css={projectsCss.period}>
          {formatInterval(project.startAt, project.endAt)}
        </div>
        <div css={projectsCss.title}>{project.name}</div>
        <div css={projectsCss.description}>{project.description}</div>
        <hr />
        <SkillChips css={projectsCss.techStack} skills={project.techStack} />
      </div>
    </button>
  )
}

interface ListProps {
  projects: Project[]
  onProjectClick: (index: number) => void
}

function ProjectList(props: ListProps): ReactElement {
  const { projects, onProjectClick } = props
  return useMemo(() => {
    return (
      <>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() => onProjectClick(index)}
          />
        ))}
      </>
    )
  }, [projects, onProjectClick])
}

interface Props {
  projects: Project[]
}

function Projects(props: Props): ReactElement {
  const { projects } = props
  const [selected, setSelected] = useState<number>()

  return (
    <div css={projectsCss.list}>
      <ProjectList projects={projects} onProjectClick={setSelected} />
      <Suspense>
        <ProjectDetailModal
          key={selected}
          project={letIf(selected, ($0) => projects[$0])}
          next={letIf(selected, ($0) => projects[$0 + 1])}
          prev={letIf(selected, ($0) => projects[$0 - 1])}
          onNextClick={() => setSelected((prev) => (prev ?? 0) + 1)}
          onPrevClick={() => setSelected((prev) => (prev ?? 0) - 1)}
          onClose={() => setSelected(undefined)}
        />
      </Suspense>
    </div>
  )
}

export default Projects
