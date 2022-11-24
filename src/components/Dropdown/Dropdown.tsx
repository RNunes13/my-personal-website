import React, { useCallback, useEffect, useState } from 'react'
import { getIconProps } from './parts/DropdownItem/DropdownItem'
import type { IconType } from './parts/DropdownItem/DropdownItem'

import * as Styled from './Dropdown.styles'

export type DropdownItemType = {
  id: number | string
  label: string
  startIcon?: string | IconType
  endIcon?: string | IconType
  onClick?: () => void
}

export interface DropdownProps {
  active?: DropdownItemType
  emptyLabel?: string
  placeholder?: string
  cleanable?: boolean
  options: DropdownItemType[]
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  active,
  options,
  cleanable,
  className,
  emptyLabel,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<DropdownItemType | null>(null)

  const { startIcon, label: activeLabel } = activeItem || {}

  const activeIcon = startIcon ? getIconProps(startIcon) : null

  const list = options.filter(({ id }) => id !== activeItem?.id)

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

  const clearActiveItem = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setActiveItem(null)
    },
    [setActiveItem],
  )

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
        <Styled.Active>
          {activeItem ? (
            <>
              {activeIcon && <Styled.ActiveIcon {...activeIcon} />}
              <Styled.ActiveLabel>{activeLabel}</Styled.ActiveLabel>
            </>
          ) : (
            <Styled.Placeholder>{placeholder}</Styled.Placeholder>
          )}
        </Styled.Active>
        <Styled.ActionIcons>
          {!!cleanable && !!activeItem && (
            <Styled.CloseIcon onClick={clearActiveItem} />
          )}
          <Styled.ArrowUpIcon isOpen={isOpen} />
        </Styled.ActionIcons>
      </Styled.ActiveItem>

      <Styled.ListContainer isOpen={isOpen}>
        <Styled.List>
          {!!list.length &&
            list.map((option) => (
              <Styled.DropdownItem
                {...option}
                key={option.id}
                onClick={() => handleClick(option)}
              />
            ))}
          {!list.length && (
            <Styled.Empty label={emptyLabel ?? 'No options'} disabled />
          )}
        </Styled.List>
      </Styled.ListContainer>
    </Styled.Dropdown>
  )
}
