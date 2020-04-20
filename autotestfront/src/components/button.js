import React from 'react';
import './button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/**
 * 
 * @param {*} props 
 *    type: animate, push
 *    level: primary, secondary, danger, launch
 *    icon: rocket, play
 *    onClick
 * By default, type=animate, level=primary, icon=null
 */
function Button(props) {
  const { type, level, icon, onClick } = props;

  const displayedType = type ? type : '';
  const displayedLevel = level ? level : 'primary';
  const displayedIcon = icon ? icon : false;

  return (
    <button
      className={`animate ${displayedType} ${displayedLevel}`}
      onClick={onClick}
    >
      {displayedIcon &&
        <FontAwesomeIcon icon={icon}
        />}
      <span>{props.children}</span>
    </button>
  );
}

export default Button;