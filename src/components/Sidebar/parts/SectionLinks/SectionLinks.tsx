import React, { memo } from 'react'
import * as Styled from './SectionLinks.styles'

interface SectionLinksProps {
  t: (key: string) => string
}

const links = [
  { label: 'sidebar.menu.home' },
  { label: 'sidebar.menu.about' },
  { label: 'sidebar.menu.contact' },
]

export const SectionLinks: React.FC<SectionLinksProps> = memo(({ t }) => (
  <Styled.Container>
    <Styled.Links>
      {links.map(({ label }, idx) =>
        <Styled.Item key={`menuItem-${idx}`}>
          <Styled.Link href="#">
            {t(label)}
          </Styled.Link>
        </Styled.Item>
      )}
    </Styled.Links>
  </Styled.Container>
))

SectionLinks.displayName = 'SectionLinks'
