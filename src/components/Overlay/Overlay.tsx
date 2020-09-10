
import React from 'react';
import classnames from 'classnames';
import './Overlay.scss';

interface OverlayProps {
  show: boolean;
  onClose?(): void;
}

function Overlay({ show, onClose }: OverlayProps) {
  function onClick() {
    onClose && onClose();
  }

  return (
    <div
      className={classnames("rn-overlay", { "is--hidden": !show })}
      onClick={ onClick }
    />
  );
}

export default Overlay;
