import { css, SerializedStyles } from '@emotion/react'
import { IMixinProps } from '../theme/Theme'

export const h0 =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.secondaryFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 60px;
    `

export const h1 =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.secondaryFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 48px;
    `

export const h2 =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.secondaryFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    `

export const h3 =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.secondaryFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
    `

export const h4 =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    `

export const h5 =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
    `

export const bodyLargeBold =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
    `

export const bodyLargeRegular =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    `

export const bodyMediumBold =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    `

export const bodyMediumRegular =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    `

export const bodySmallBold =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    `

export const bodySmallRegular =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    `

export const placeholderSmall =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: italic;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    `

export const ctaBold =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
    `

export const ctaSemi =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
    `

export const caption =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    `

export const captionBold =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    `

export const captionUppercase =
  () =>
  (props: IMixinProps): SerializedStyles =>
    css`
      font-family: ${props?.theme?.fonts?.baseFontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      text-transform: uppercase;
    `
