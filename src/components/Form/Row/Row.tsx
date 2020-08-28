
import React from 'react';
import './Row.scss';

interface RowProps { }

function Row({ children }: React.PropsWithChildren<RowProps>) {
  return (
    <div className="rn-form__row">
      { children }
    </div>
  )
}

export default Row;
