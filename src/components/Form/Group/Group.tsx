
import React from 'react';
import classnames from 'classnames';
import './Group.scss';

interface GroupProps {
  className?: string;
}

function Group({ children, className }: React.PropsWithChildren<GroupProps>) {
  return (
    <div className={classnames("rn-form__group", className)}>
      { children }
    </div>
  )
}

export default Group;
