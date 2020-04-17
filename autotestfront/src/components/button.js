import React from 'react';
import './button.css';

function Button(props) {
  const { level } = props;
  const displayedLevel = level ? level : 'primary';
  console.log(displayedLevel)
  return (

    <div class="svg-wrapper">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <div id="text">
          <button><span class="spot"></span>Button 1</button>
        </div>
      </svg>
    </div>
  );
}
// <button className={`btn btn-${displayedLevel}`}>
//   {props.children}
// </button>

export default Button;