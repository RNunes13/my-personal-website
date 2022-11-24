import { Suspense } from 'react'
import { renderWithUser, renderWithTheme } from 'utils/test-utils'
import { DropdownItem } from '../DropdownItem'
import type { DropdownItemProps, IconType } from '../DropdownItem'

const defaultProps: DropdownItemProps = {
  label: 'Item label',
  onClick: jest.fn(),
}

const getComponent = (props: Partial<DropdownItemProps> = {}) => (
  <Suspense fallback={<div>loading...</div>}>
    <DropdownItem {...defaultProps} {...props} />
  </Suspense>
)

describe('DropdownItem unit test', () => {
  it('should call the provide click functon', async () => {
    const onClick = jest.fn()
    const { getByTestId, user } = renderWithUser(getComponent({ onClick }))
    const item = getByTestId('dropdownItem')

    expect(onClick).not.toHaveBeenCalled()

    await user.click(item)

    expect(onClick).toHaveBeenCalled()
  })

  it('should render with start icon as string', () => {
    const tree = renderWithTheme(
      getComponent({ startIcon: 'system:menu' }),
    ).toJSON()
    expect(tree).toMatchSnapshot('DropdownItem - Start icon as string')
  })

  it('should render with start icon as object', () => {
    const startIcon: IconType = {
      icon: 'system:mennu',
      color: 'accent',
      height: 32,
      width: 32,
    }

    const component = getComponent({ startIcon })

    const tree = renderWithTheme(component).toJSON()
    expect(tree).toMatchSnapshot('DropdownItem - Start icon as object')
  })

  it('should render with end icon as string', () => {
    const tree = renderWithTheme(
      getComponent({ endIcon: 'system:menu' }),
    ).toJSON()
    expect(tree).toMatchSnapshot('DropdownItem - End icon as string')
  })

  it('should render with end icon as object', () => {
    const endIcon: IconType = {
      icon: 'system:mennu',
      color: 'primary',
      height: 16,
      width: 16,
    }

    const component = getComponent({ endIcon })

    const tree = renderWithTheme(component).toJSON()
    expect(tree).toMatchSnapshot('DropdownItem - Ennd icon as object')
  })
})
