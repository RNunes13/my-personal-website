import React from 'react'
import { useLayoutContext } from 'components/Layout/Layout'
import * as Styled from './Footer.styles'

export const Footer = () => {
  const { t } = useLayoutContext()

  return (
    <Styled.Footer>
      <Styled.BackgroundImage
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="/images/footer.jpg"
        alt="footer background"
      />
      <Styled.Container>
        <Styled.Copyright>
          {`© ${new Date().getFullYear()} RNunes. ${t('footer.copyright')}`}
        </Styled.Copyright>
        <Styled.Logo
          width={50}
          height={50}
          src="/images/logo-w.png"
          alt="Rodrigo Nunes | Web Developer"
          title="Rodrigo Nunes | Web Developer"
        />
        <Styled.Social />
      </Styled.Container>
    </Styled.Footer>
  )
}

export default Footer
