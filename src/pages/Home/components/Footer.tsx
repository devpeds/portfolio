import { css } from '@emotion/react'
import { ComponentProps, ComponentType, ReactElement } from 'react'

import { SvgEmail, SvgGithub, SvgLinkedin } from '@/assets/svg'
import IconButton from '@/components/IconButton'
import { colors } from '@/styles'
import { Contacts } from '@/types'
import { hoverStyle, spacingLRTB, spacingX } from '@/utils/styleUtil'

interface ContactItem {
  Icon: ComponentType<ComponentProps<'svg'>>
  label: string
  url: string
  target: string
}

const footerCss = {
  self: css({
    color: colors.white,
    textAlign: 'center',
  }),
  getInTouch: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacingLRTB(20, 20, 120, 80),
  }),
  title: css({
    fontSize: '2.5em',
  }),
  contacts: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    marginTop: 32,
    padding: spacingX(16),
    width: '100%',
  }),
  contact: css(
    {
      flex: 1,
      maxWidth: 80,
      height: '100%',
      aspectRatio: 1,
    },
    hoverStyle({
      transform: 'scale(1.2)',
    }),
  ),
  divider: css({
    borderColor: colors.white33,
  }),
  copyright: css({
    padding: 24,
    color: colors.white60,
  }),
}

interface Props {
  contacts: Contacts
}

function Footer(props: Props): ReactElement {
  const { contacts } = props
  const contactList: ContactItem[] = [
    {
      Icon: SvgEmail,
      label: '이메일',
      url: `mailto: ${contacts.email}`,
      target: '_self',
    },
    {
      Icon: SvgGithub,
      label: '깃헙',
      url: contacts.github,
      target: '_blank',
    },
    {
      Icon: SvgLinkedin,
      label: '링크드인',
      url: contacts.linkedin,
      target: '_blank',
    },
  ]
  return (
    <footer css={footerCss.self}>
      <div css={footerCss.getInTouch}>
        <h2 css={footerCss.title}>Get In Touch</h2>
        <div css={footerCss.contacts}>
          {contactList.map((item) => (
            <IconButton
              key={item.url}
              css={footerCss.contact}
              aria-label={item.label}
              Icon={item.Icon}
              onClick={() => window.open(item.url, item.target)}
            />
          ))}
        </div>
      </div>
      <hr css={footerCss.divider} />
      <p css={footerCss.copyright}>© 2025 Seunghoon Jung</p>
    </footer>
  )
}

export default Footer
