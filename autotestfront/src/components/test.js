import React from 'react';
import './test.css';
import Button from '../components/button';
import InputWithReset from '../components/inputWithReset';
import { faSave } from '@fortawesome/free-solid-svg-icons';

function Test(props) {
  const { test } = props;

  const clickOnSave = () => console.log("TODO");

  return (
    <article className="test">
      <h3>{test.name}</h3>

      <p>{test.description}</p>

      <InputWithReset label="label" currentValue="chips" />
      <InputWithReset label="label" currentValue="set" />
      <InputWithReset label="label" currentValue="table" />
      <InputWithReset label="label" currentValue="num" />
      <Button icon={faSave} onClick={clickOnSave}>Save</Button>

    </article>
  );
}

export default Test;