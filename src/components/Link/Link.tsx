import React from 'react'
import { UrlObject } from 'url'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type AnchorType = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

interface LinkProps extends AnchorType {
  href: string | UrlObject
  nextProps?: Omit<NextLinkProps, 'href'>
  className?: string
  children?: React.ReactElement | React.ReactNode | string
}

export const Link: React.FC<LinkProps> = ({
  href,
  className,
  nextProps,
  children,
  ...rest
}) => (
  <NextLink href={href} passHref {...nextProps}>
    <a className={className} {...rest}>{children}</a>
  </NextLink>
)
