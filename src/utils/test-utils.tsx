import { FC, ReactElement } from 'react'
import { ThemeProvider } from '@emotion/react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import { theme } from 'styles/theme/Theme'

interface IProviders {
  children: ReactElement
}

const Providers: FC<IProviders> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export const renderWithTheme = (component: ReactElement): ReactTestRenderer =>
  renderer.create(<Providers>{component}</Providers>)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: Providers, ...options })

const renderWithUser = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: Providers, ...options }),
})

export * from '@testing-library/react'
export * from '@testing-library/jest-dom'
export { customRender as render }
export { renderWithUser }
