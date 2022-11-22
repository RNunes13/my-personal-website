import React from 'react'
import { UrlObject } from 'url'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type AnchorType = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

interface LinkProps extends AnchorType {
  children?: React.ReactElement
  href: string | UrlObject
  nextProps?: Omit<NextLinkProps, 'href'>
  className?: string
}

export const Link: React.FC<LinkProps> = ({
  href,
  className,
  nextProps,
  children,
  ...rest
}) => (
  <NextLink href={href} className={className} passHref {...nextProps}>
    <a {...rest}>{children}</a>
  </NextLink>
)
