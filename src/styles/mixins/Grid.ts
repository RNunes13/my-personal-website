import { IMixinProps } from '../theme/Theme'
import { isMobile } from './Breakpoint'

const gridBase =
  () =>
  (props: IMixinProps): string =>
    `
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding-right: ${props.theme.spaces.space3};
  padding-left: ${props.theme.spaces.space3};
  margin-right: auto;
  margin-left: auto;

  ${isMobile()(props)} {
    padding-right: ${props.theme.spaces.space2};
    padding-left: ${props.theme.spaces.space2};
  }
`

export const grid940 =
  () =>
  (props: IMixinProps): string =>
    `
  ${gridBase()(props)}
  max-width: 1000px;
`

export const grid1290 =
  () =>
  (props: IMixinProps): string =>
    `
  ${gridBase()(props)}
  max-width: 1350px;
`

export const grid12 =
  () =>
  (props: IMixinProps): string =>
    `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${props.theme.spaces.space2};
  grid-row-gap: ${props.theme.spaces.space2};
  justify-items: stretch;
`
