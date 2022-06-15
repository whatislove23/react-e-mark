import cl from './MyInput.module.css';
import React from 'react';
export default function MyInput(props) {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      onInput={e => {
        props.fun(e.target.value);
      }}
      
    />
  );
}
