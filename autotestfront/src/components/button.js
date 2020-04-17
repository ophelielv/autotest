import React from 'react';
import './button.css';

function Button(props) {
  const { type, level } = props;
  const displayedType = type ? type : 'default';
  const displayedLevel = level ? level : 'primary';

  return (
    <button className={displayedType + ' ' + displayedLevel}>
      <span>{props.children}</span>
    </button>
  );
}


export default Button;