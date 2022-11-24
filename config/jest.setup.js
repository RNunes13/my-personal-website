import { createElement } from 'react'
import '@testing-library/jest-dom/extend-expect'

jest.mock('components/Icon/Icon', () => ({
  Icon: (props = {}) =>
    createElement('svg', {
      ...props,
      'data-testid': `icon_${(props?.icon ?? '').replace(':', '_')}`,
    }),
}))
