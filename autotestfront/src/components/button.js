import React from 'react';
import './button.css';

function Button(props) {
  const { type, level } = props;

  const displayedType = type ? type : '';

  const displayedLevel = level ? level : 'primary';

  return (
    // <button class="btn-push">{props.children}</button>
    <button className={`animate ${displayedType} ${displayedLevel}`}>
      <span>{props.children}</span>
    </button>
  );
}


export default Button;