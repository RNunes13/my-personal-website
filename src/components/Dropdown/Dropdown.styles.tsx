import styled from '@emotion/styled'
import { Icon } from 'components'
import { newShade } from 'utils/helpers'
import { bodySmallBold, resetList, scrollbar } from 'styles/mixins'
import { DropdownItem as DropdownItemComp } from './parts/DropdownItem/DropdownItem'

const ACTIVE_HEIGHT = 40

export const Dropdown = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`

export const Active = styled.div`
  ${bodySmallBold()}
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.base_0};
  gap: 8px;
  width: calc(100% - 42px);
`

export const ActiveLabel = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const ActiveIcon = styled(Icon)`
  flex: 0 0 auto;
`

export const ActiveItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: ${ACTIVE_HEIGHT}px;
  height: ${ACTIVE_HEIGHT}px;
  padding: ${({ theme }) => theme.spaces.space1};
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => newShade(theme.colors.primary, 20)};
`

export const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  flex: 1 0 auto;
`

export const ArrowUpIcon = styled(Icon)<{ isOpen: boolean }>`
  width: ${({ theme }) => theme.icon.small};
  height: ${({ theme }) => theme.icon.small};
  transform: rotate(180deg);

  ${({ isOpen }) =>
    !!isOpen &&
    `
    transform: rotate(0);
  `}
`
ArrowUpIcon.defaultProps = {
  icon: 'system:up',
  fill: 'base_0',
}

export const CloseIcon = styled(Icon)`
  width: 10px;
  height: 10px;
`
CloseIcon.defaultProps = {
  icon: 'system:close',
  fill: 'base_0',
}

export const ListContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: ${ACTIVE_HEIGHT + 2}px;
  right: 0;
  left: 0;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => newShade(theme.colors.primary, 20)};
  transition: transform 120ms ${({ theme }) => theme.transitions.standard};
  transform-origin: top;
  transform: scaleY(0);

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: scaleY(1);
  `}
`

export const List = styled.ul`
  ${resetList()}
  ${scrollbar({ size: 4 })}
  margin: 8px;
  max-height: 200px;
  overflow-y: auto;
`

export const DropdownItem = styled.div``

export const Placeholder = styled.span`
  color: ${({ theme }) => newShade(theme.colors.primary, 90)};
`

export const Empty = styled(DropdownItemComp)`
  text-align: center;
`
