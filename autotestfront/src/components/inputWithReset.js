import React, { useState } from 'react';
import Button from './button';
import './inputWithReset.css';

function InputWithReset(props) {
  const { label, currentValue } = props;
  const [value, setValue] = useState(currentValue);
  const [initValue/*, setInitValue*/] = useState(currentValue);
  const [showReset, setShowReset] = useState(false);

  const handleChange = (evt) => {
    if (!showReset) {
      setShowReset(true);
    }

    setValue(evt.target.value);
    console.log(evt.target.value);
  }

  const clickOnReset = () => {
    setValue(initValue)
  }


  return (
    <div className="input-group">

      <label>{label}</label>
      <input
        type="text"
        name="inp"
        value={value}
        onChange={handleChange}
      />

      {showReset &&
        <Button
          type="default" level="secondary"
          onClick={clickOnReset}
        >
          Reset
      </Button>
      }

    </div >
  );
}

export default InputWithReset;