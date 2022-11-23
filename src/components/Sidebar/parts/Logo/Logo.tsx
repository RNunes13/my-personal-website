import { Link } from "components";
import * as Styled from './Logo.styles'

export const Logo = () => (
  <Styled.LogoContainer>
    <Link href="/">
      <Styled.Logo
        width={60}
        height={60}
        src='/images/logo-w.png'
        alt="Rodrigo Nunes | Web Developer"
        title="Rodrigo Nunes | Web Developer"
      />
    </Link>
  </Styled.LogoContainer>
)
