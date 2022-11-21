import '@emotion/react'
import { IThemeProps } from 'styles/theme/Theme'

declare module '@emotion/react' {
  export interface Theme extends IThemeProps {}
}
