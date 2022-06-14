import cl from './Modal.module.css';
import React from 'react';
export default function Modal({ children, visible, setVisible }) {
  const classes = [cl.Modal];
  if (visible) classes.push(cl.active);
  return (
    <div
      className={classes.join(' ')}
      onClick={() => {
        setVisible(false);
      }}>
      <div
        className={cl.content}
        onClick={e => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  );
}
