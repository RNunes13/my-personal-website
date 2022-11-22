
import React from 'react';
import { Overlay as OverlayComp } from './Overlay.styles';

interface OverlayProps {
  show: boolean;
  onClose?(): void;
}

export const Overlay: React.FC<OverlayProps> = ({ show, onClose }) => {
  const onClick = () => {
    if (onClose) onClose();
  }

  return (
    <OverlayComp isHide={!show} onClick={ onClick } />
  );
}

export default Overlay;
