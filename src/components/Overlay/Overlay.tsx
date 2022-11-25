import React from 'react'
import { Overlay as OverlayComp } from './Overlay.styles'

interface OverlayProps {
  show: boolean
  className?: string
  onClose?(): void
}

export const Overlay: React.FC<OverlayProps> = ({
  show,
  className,
  onClose,
}) => {
  const onClick = () => {
    if (onClose) onClose()
  }

  return <OverlayComp className={className} isHide={!show} onClick={onClick} />
}

export default Overlay
