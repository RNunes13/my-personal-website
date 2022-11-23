import React, { memo } from 'react'
import { Icon } from 'components'
import * as Styled from './ContactLinks.styles'

interface ContactLinksProps {
  t: (key: string) => string
}

export const ContactLinks: React.FC<ContactLinksProps> = memo(({ t }) => {
  const links = [
    { label: '+55 11 98947-7783', icon: 'system:phone' },
    { label: 'nunesrodrigo13@outlook.com', icon: 'system:mail', link: 'mailto:nunesrodrigo13@outlook.com' },
    { label: `São Paulo, SP, ${ t('about.country') }`, icon: 'system:location' },
  ];

  return (
    <Styled.Links>
      {links.map(({ label, icon, link }, idx) =>
        <Styled.Item key={`contactItem-${idx}`}>
          <Icon icon={icon} fill='accent' />
          {link
            ? <Styled.Link href={link}>{label}</Styled.Link>
            : <Styled.Label>{label}</Styled.Label>
          }
        </Styled.Item>
      )}
    </Styled.Links>
  )
})

ContactLinks.displayName = 'ContactLinks'
