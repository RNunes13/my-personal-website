import { renderWithTheme } from 'utils/test-utils'
import { Container } from '../Container'
import type { ContainerProps } from '../Container'

const defaultProps: ContainerProps = {
  children: <div data-testid="container-children">Container children</div>,
}

const getComponent = (props: Partial<ContainerProps> = {}) => (
  <Container {...defaultProps} {...props} />
)

describe('Container unit test', () => {
  it('should render container with default grid (1290)', () => {
    const tree = renderWithTheme(getComponent()).toJSON()
    expect(tree).toMatchSnapshot('Container - Grid default (1290)')
  })

  it('should render container with grid of 940', () => {
    const tree = renderWithTheme(getComponent({ grid: 'grid940' })).toJSON()
    expect(tree).toMatchSnapshot('Container - Grid 940')
  })
})
