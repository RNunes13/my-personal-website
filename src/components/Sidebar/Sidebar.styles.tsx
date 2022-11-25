import styled from '@emotion/styled'
import { medium, scrollbar } from 'styles/mixins'
import { newShade } from 'utils/helpers'
import { SocialMedia } from 'components'

export const WIDTH = 270

export const Sidebar = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${WIDTH}px;
  max-width: 80vw;
  color: ${({ theme }) => theme.colors.base_0};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: transform 200ms ${({ theme }) => theme.transitions.standard};
  z-index: ${({ theme }) => theme.index.top + 1};

  grid-area: sidebar;

  ${medium()} {
    transform: translateX(-110%);
  }

  ${({ isOpen }) =>
    !!isOpen &&
    `
    ${medium()} {
      transform: translateX(0);
    }
  `}
`

export const InfoWrap = styled.div`
  padding: ${({
    theme: {
      spaces: { space2, space1 },
    },
  }) => `${space2} ${space1}`};
  min-height: 350px;
`

export const Container = styled.div`
  ${scrollbar()}
  margin: ${({ theme }) => theme.spaces.space1};
  height: 100%;
  overflow-y: auto;

  & > div,
  & > figure {
    &:not(:last-child) {
      border-bottom: 1px solid
        ${({ theme }) => newShade(theme.colors.primary, 20)};
    }
  }
`

export const Social = styled(SocialMedia)`
  margin: ${({ theme }) => theme.spaces.space3} 0;
`
