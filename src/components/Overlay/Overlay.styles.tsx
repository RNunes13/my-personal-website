import styled from '@emotion/styled'
import { getRgbFromHex } from 'utils/helpers'

export const Overlay = styled.div<{ isHide: boolean }>`
  cursor: default;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.index.modal - 1};
  background-color: rgba(${({ theme }) =>
    getRgbFromHex(theme.colors.base_100).join(',')}, 0.7
  );

  transition-property: opacity, visibility;
  transition-duration: 250ms;
  transition-timing-function: ${({ theme }) => theme.transitions.standard};
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ isHide }) => !!isHide && `
    opacity: 0;
    visibility: hidden;
  `}
`
