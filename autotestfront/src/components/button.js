import React from 'react';
import './button.css';

function Button(props) {
  const { type, level, onClick } = props;

  const displayedType = type ? type : '';
  const displayedLevel = level ? level : 'primary';

  return (
    <button
      className={`animate ${displayedType} ${displayedLevel}`}
      onClick={onClick}
    >
      <span>{props.children}</span>
    </button>
  );
}

export default Button;