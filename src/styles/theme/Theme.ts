enum COLORS {
  primary = 'primary',
  accent = 'accent',

  pigmentGreen = 'pigmentGreen',
  goblin = 'goblin',
  springGreen = 'springGreen',
  lightCoral = 'lightCoral',
  persianRed = 'persianRed',
  orangePeel = 'orangePeel',
  navyBlue = 'navyBlue',

  /** Base */
  base_100 = 'base_100',
  base_80 = 'base_80',
  base_60 = 'base_60',
  base_40 = 'base_40',
  base_20 = 'base_20',
  base_10 = 'base_10',
  base_0 = 'base_0',
}

interface IColorsProps {
  [k: string]: string
  primary: string
  accent: string
  pigmentGreen: string
  goblin: string
  springGreen: string
  lightCoral: string
  persianRed: string
  orangePeel: string
  navyBlue: string
  base_100: string
  base_80: string
  base_60: string
  base_40: string
  base_20: string
  base_10: string
  base_0: string
}

interface ISpacingProps {
  space1: string
  space2: string
  space3: string
  space4: string
  space5: string
}

interface IIconProps {
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
  xxlarge: string
}

interface IBreakpointsProps {
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
}

interface IZindexProps {
  base: number
  top: number
  modal: number
}

interface IFontsProps {
  baseFontFamily: string
  secondaryFontFamily: string
}

interface ITransitionsProps {
  standard: string
  accelerate: string
  decelerate: string
}

interface IThemeProps {
  radius: string
  colors: IColorsProps
  spaces: ISpacingProps
  icon: IIconProps
  breakpoint: IBreakpointsProps
  fonts: IFontsProps
  index: IZindexProps
  transitions: ITransitionsProps
}

const theme: IThemeProps = {
  colors: {
    primary: '#181923',
    accent: '#117e40',

    pigmentGreen: '#18b45c',
    goblin: '#38853c',
    springGreen: '#117e40',
    lightCoral: '#ff8787',
    persianRed: '#d32f2f',
    orangePeel: '#ffa000',
    navyBlue: '#1976d2',

    base_100: '#000000',
    base_80: '#425158',
    base_60: '#8E9BA1',
    base_40: '#BBC3C7',
    base_20: '#DDE1E3',
    base_10: '#F4F5F6',
    base_0: '#FFFFFF',

    github: '#5c6bc0',
    linkedin: '#007ab9',
    skype: '#1b92d0',
  },
  radius: '4px',
  index: {
    base: 0,
    top: 10,
    modal: 100,
  },
  spaces: {
    space1: '10px',
    space2: '20px',
    space3: '30px',
    space4: '60px',
    space5: '90px',
  },
  breakpoint: {
    xsmall: '576px',
    small: '768px',
    medium: '992px',
    large: '1200px',
    xlarge: '1350px',
  },
  icon: {
    xsmall: '12px',
    small: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '64px',
    xxlarge: '96px',
  },
  fonts: {
    secondaryFontFamily: 'Montserrat',
    baseFontFamily:
      'Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", BlinkMacSystemFont, -apple-system, sans-serif',
  },
  transitions: {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
}

export default theme

export { theme, COLORS }

export interface IMixinProps {
  theme: IThemeProps
}

export type {
  IThemeProps,
  IColorsProps,
  ISpacingProps,
  IBreakpointsProps,
  IFontsProps,
  ITransitionsProps,
}
