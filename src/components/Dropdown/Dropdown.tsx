import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from 'components'
import { DropdownItem, getIconProps } from './components/DropdownItem/DropdownItem'
import type { IconType } from './components/DropdownItem/DropdownItem'

import * as Styled from './Dropdown.styles'

export type DropdownItemType = {
  id: number | string
  label: string
  startIcon?: string | IconType
  endIcon?: string | IconType
  onClick?: () => void
}

interface DropdownProps {
  active?: DropdownItemType
  options: DropdownItemType[]
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({ options, className, active }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<DropdownItemType | null>(null)

  const { startIcon, label: activeLabel } = activeItem || {}

  const activeIcon = startIcon ? getIconProps(startIcon) : null

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

  const handleClick = (item: DropdownItemType) => {
    const { onClick } = item

    setActiveItem(item)
    toggle()

    if (onClick) onClick()
  }

  useEffect(() => {
    setActiveItem(active ?? null)
  }, [active])

  return (
    <Styled.Dropdown className={className}>
      <Styled.ActiveItem onClick={toggle}>
        <Styled.ActiveLabel>
          {!!activeItem && (
            <>
              {activeIcon && <Icon {...activeIcon}/>}
              {activeLabel}
            </>
          )}
        </Styled.ActiveLabel>
        <Styled.ArrowUpIcon isOpen={isOpen} />
      </Styled.ActiveItem>

      <Styled.ListContainer isOpen={isOpen}>
        <Styled.List>
          {options
            .filter(({ id }) => id !== activeItem?.id)
            .map((option) => (
              <DropdownItem
                {...option}
                key={option.id}
                onClick={() => handleClick(option)}
              />
            ))
          }
        </Styled.List>
      </Styled.ListContainer>
    </Styled.Dropdown>
  )
}
