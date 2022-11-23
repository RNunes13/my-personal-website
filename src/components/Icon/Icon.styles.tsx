import React from 'react'
import styled from '@emotion/styled'
import { IThemeProps } from 'styles/theme/Theme'

interface IStyledProps extends React.HTMLProps<HTMLElement> {
  fill?: string
  theme?: IThemeProps
  height?: number
  width?: string
}

export const Wrapper = styled.i<IStyledProps>`
  fill: ${({ fill, theme }) => theme?.colors[fill as any] ?? 'black'};
  display: flex;
  
  width: ${({ theme, width }) => (
    width ? `${width}px` : theme?.icon?.medium
  )};


  height: ${({ theme, height }) => (
    height ? `${height}px` : theme?.icon?.medium
  )};

  svg {
    width: 100%;
    height: 100%;
  }
`
