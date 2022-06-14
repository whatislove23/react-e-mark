import classes from './MyBtn.module.css';
import React from 'react';
export default function MyBtn(props) {
  return (
    <button
      className={classes.button}
      onClick={() => {
        props.func();
      }}>
      {props.children}
    </button>
  );
}
