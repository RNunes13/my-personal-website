import React from 'react'
import styled from '@emotion/styled'
import { IThemeProps } from 'styles/theme/Theme'

interface IStyledProps extends React.HTMLProps<HTMLElement> {
  fill?: string
  theme?: IThemeProps
}

export const Wrapper = styled.i<IStyledProps>`
  width: ${({ theme }: any) => theme?.icon?.medium};
  height: ${({ theme }: any) => theme?.icon?.medium};
  fill: ${({ fill, theme }) => theme?.colors[fill as any] ?? 'black'};
  display: flex;

  svg {
    width: 100%;
    height: 100%;
  }
`
