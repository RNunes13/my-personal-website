import React from 'react'
import { Icon } from 'components'
import { List, Item, Link } from './SocialMedia.styles'

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

export const SocialMedia = () => (
  <List>
    {items.map(({ title, icon, link, color }) => (
      <Item key={title}>
        <Link href={link} passHref>
          <a rel="noopener" target="_blank" title={title}>
            <Icon icon={icon} fill={color} />
          </a>
        </Link>
      </Item>
    ))}
  </List>
)

export default SocialMedia
