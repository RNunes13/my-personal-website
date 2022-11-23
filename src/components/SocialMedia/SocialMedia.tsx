import React from 'react'
import { Icon, Link } from 'components'
import { List, Item } from './SocialMedia.styles'

const items = [
  {
    title: 'GitHub',
    icon: 'social:github',
    color: 'github',
    link: 'https://github.com/RNunes13',
  },
  {
    title: 'LinkedIn',
    icon: 'social:linkedin',
    color: 'linkedin',
    link: 'https://www.linkedin.com/in/rodrigonunes13/',
  },
  {
    title: 'Start chat',
    icon: 'social:skype',
    color: 'skype',
    link: 'skype:live:nunesrodrigo13_1?chat',
  },
]

export const SocialMedia = ({ className }: { className?: string }) => (
  <List className={className}>
    {items.map(({ title, icon, link, color }) => (
      <Item key={title}>
        <Link rel="noopener" target="_blank" href={link} title={title}>
          <Icon icon={icon} fill={color} />
        </Link>
      </Item>
    ))}
  </List>
)

export default SocialMedia
