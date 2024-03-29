import React, { useEffect, useCallback } from 'react'
import { useLayoutContext } from 'components/Layout/Layout'

import { Link } from '../index'
import * as Styled from './Header.styles'

export const Header = () => {
  const [fill, setFill] = React.useState<boolean>(false)

  const { sidebarIsOpen, toggleSidebar } = useLayoutContext()

  const onScroll = useCallback(() => {
    if (window.pageYOffset >= 100) setFill(true)
    else setFill(false)
  }, [setFill])

  useEffect(() => {
    window.document.addEventListener('scroll', onScroll)
    return () => window.document.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <Styled.Header fill={(fill && !sidebarIsOpen) || null}>
      <Styled.Container className="rn-header__container">
        <Link href="/">
          <Styled.Logo
            width={35}
            height={35}
            src="/images/logo-w.png"
            alt="Rodrigo Nunes | Web Developer"
            title="Rodrigo Nunes | Web Developer"
          />
        </Link>
        <Styled.Menu onClick={toggleSidebar} aria-label="Menu">
          <Styled.Icon
            fill="base_0"
            icon={sidebarIsOpen ? 'system:close' : 'system:menu'}
          />
        </Styled.Menu>
      </Styled.Container>
    </Styled.Header>
  )
}
