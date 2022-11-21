import { IMixinProps } from '../theme/Theme'

export const xSmall =
  () =>
  (props: IMixinProps): string =>
    `@media (max-width: ${props.theme.breakpoint.xsmall})`

export const small =
  () =>
  (props: IMixinProps): string =>
    `@media (max-width: ${props.theme.breakpoint.small})`

export const medium =
  () =>
  (props: IMixinProps): string =>
    `@media (max-width: ${props.theme.breakpoint.medium})`

export const large =
  () =>
  (props: IMixinProps): string =>
    `@media (max-width: ${props.theme.breakpoint.large})`

export const xLarge =
  () =>
  (props: IMixinProps): string =>
    `@media (min-width: ${props.theme.breakpoint.xlarge})`

export const isMobile =
  () =>
  (props: IMixinProps): string =>
    `@media only screen and (max-width: ${props.theme.breakpoint.small})`

export const isTablet =
  () =>
  (props: IMixinProps): string =>
    `@media only screen and (min-width: ${props.theme.breakpoint.small}) and (max-width: ${props.theme.breakpoint.medium})`

export const isDesktop =
  () =>
  (props: IMixinProps): string =>
    `@media only screen and (min-width: ${props.theme.breakpoint.medium})`
