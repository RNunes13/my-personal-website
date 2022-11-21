import * as React from 'react'
import styled from '@emotion/styled'
import * as Grid from 'styles/mixins/Grid'

export type GridType = 'grid1290' | 'grid940'

interface ContainerProps {
  className?: string
  grid?: GridType
  children?: React.ReactNode
}

const ContainerComp = styled.div<{ grid: GridType }>`
  ${({ grid }) => Grid[grid]()};
`

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  grid = 'grid1290',
}) => (
  <ContainerComp className={className} grid={grid}>
    {children}
  </ContainerComp>
)

export default Container
