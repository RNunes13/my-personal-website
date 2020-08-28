
import React from 'react';
import classnames from 'classnames';
import './Button.scss'

interface ButtonProps {
  color?: 'primary';
  disabled?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?(): void;
}

function Button({
  children,
  disabled,
  className,
  type = 'submit',
  color = 'primary',
  onClick,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className={classnames("rn-button", `rn-button__${color}`, className)}
    >
      { children }
    </button>
  );
}

export default Button;
