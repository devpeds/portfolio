import { css } from '@emotion/react'
import { ReactElement, useMemo } from 'react'
import { useNavigate } from 'react-router'

import Image from '@/components/Image'
import SkillChips from '@/components/SkillChips'
import { colors } from '@/styles'
import { Project } from '@/types'
import { formatInterval } from '@/utils/dateUtil'
import { hoverStyle, mediaQueryWidth } from '@/utils/styleUtil'

const gap = 32

function calculateCardWidth(numberOfRows: number): string {
  return `calc((100% - ${gap * (numberOfRows - 1)}px) / ${numberOfRows})`
}

const projectsCss = {
  list: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap,
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
      [mediaQueryWidth('sm')]: {
        width: calculateCardWidth(2),
      },
      [mediaQueryWidth('md')]: {
        width: calculateCardWidth(3),
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
  onProjectClick: (project: Project) => void
}

function ProjectList(props: ListProps): ReactElement {
  const { projects, onProjectClick } = props
  return useMemo(() => {
    return (
      <>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() => onProjectClick(project)}
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
  const navigate = useNavigate()

  return (
    <div css={projectsCss.list}>
      <ProjectList
        projects={projects}
        onProjectClick={(project) => navigate(`/${project.id}`)}
      />
    </div>
  )
}

export default Projects
