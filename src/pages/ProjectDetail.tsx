import { css } from '@emotion/react'
import { ReactElement, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

import { SvgChevronLeft } from '@/assets/svg'
import Container from '@/components/Container'
import HtmlContent from '@/components/HtmlContent'
import NavBar from '@/components/NavBar'
import Showcase from '@/components/contents/Projects/Showcase'
import projects from '@/data/projects'
import { colors } from '@/styles'
import { hoverStyle, spacingLRY } from '@/utils/styleUtil'

const pageCss = {
  navBar: css({
    position: 'sticky',
    background: colors.dark,
    color: colors.white,
  }),
  showcase: css({
    marginTop: 24,
  }),
  contents: css({
    padding: 24,
  }),
  nav: css({
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    button: {
      textAlign: 'start',
      fontSize: '0.8em',
      fontWeight: 700,
      color: colors.dark33,
      div: {
        fontSize: '1.25em',
        marginTop: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        svg: {
          position: 'absolute',
        },
        span: {
          color: colors.dark87,
        },
      },
      ...hoverStyle({ color: colors.dark87 }),
    },
  }),
  prev: css({
    padding: spacingLRY(44, 8, 8),
    svg: {
      left: -20,
    },
  }),
  next: css({
    marginLeft: 'auto',
    padding: spacingLRY(8, 44, 8),
    svg: {
      right: -20,
      transform: 'rotate(180deg)',
    },
  }),
}

function Redirect(): ReactElement {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { replace: true })
  }, [navigate])

  return <></>
}

function ProjectDetail(): ReactElement {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const index = projects.findIndex((project) => project.id === projectId)

  if (index === -1) {
    return <Redirect />
  }

  const project = projects[index]
  const prev = projects[index - 1]
  const next = projects[index + 1]

  return (
    <>
      <NavBar css={pageCss.navBar} />
      <Container>
        <Showcase css={pageCss.showcase} showcase={project.showcase} />
        <HtmlContent css={pageCss.contents} content={project.detail} />
        <div css={pageCss.nav}>
          {prev && (
            <button css={pageCss.prev} onClick={() => navigate(`/${prev.id}`)}>
              이전
              <div>
                <SvgChevronLeft width={16} height={16} />
                <span>{prev.name}</span>
              </div>
            </button>
          )}
          {next && (
            <button css={pageCss.next} onClick={() => navigate(`/${next.id}`)}>
              다음
              <div>
                <span>{next.name}</span>
                <SvgChevronLeft width={16} height={16} />
              </div>
            </button>
          )}
        </div>
      </Container>
    </>
  )
}

export default ProjectDetail
