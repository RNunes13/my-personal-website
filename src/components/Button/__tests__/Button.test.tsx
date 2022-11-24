import { render, renderWithUser, renderWithTheme } from 'utils/test-utils'
import { Button } from '../Button'
import type { ButtonProps } from '../Button'

const defaultProps: ButtonProps = {
  children: 'Button label',
}

const getComponent = (props: Partial<ButtonProps> = {}) => (
  <Button {...defaultProps} {...props} />
)

describe('Button unit test', () => {
  it('should call the provide click functon', async () => {
    const onClick = jest.fn()
    const { getByTestId, user } = renderWithUser(getComponent({ onClick }))
    const button = getByTestId('button')

    expect(onClick).not.toHaveBeenCalled()

    await user.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should render nothing if no children is provided', () => {
    const { container } = render(getComponent({ children: null }))
    expect(container).toBeEmptyDOMElement()
  })

  it('should render the button with the primary color', () => {
    const tree = renderWithTheme(getComponent({ color: 'primary' })).toJSON()
    expect(tree).toMatchSnapshot('Button - Primary color')
  })

  it('should render the button with the accent color', () => {
    const tree = renderWithTheme(getComponent({ color: 'accent' })).toJSON()
    expect(tree).toMatchSnapshot('Button - Accent color')
  })
})
