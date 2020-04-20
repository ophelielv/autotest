import React from 'react';
import './button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

function Button(props) {
  const { type, level, onClick } = props;

  const displayedType = type ? type : '';
  const displayedLevel = level ? level : 'primary';

  return (
    <button
      className={`animate ${displayedType} ${displayedLevel}`}
      onClick={onClick}
    >
      {displayedLevel === 'launch' && <FontAwesomeIcon icon={faRocket} />}
      <span>{props.children}</span>
    </button>
  );
}

export default Button;