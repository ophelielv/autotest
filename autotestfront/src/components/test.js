import React from 'react';
import './test.css';
import Button from '../components/button';
import InputWithReset from '../components/inputWithReset';

function Test(props) {
  const { test } = props;

  return (
    <article className="test">
      <h3>{test.name}</h3>

      <p>{test.description}</p>

      <InputWithReset label="label" currentValue="chips" />
      <InputWithReset label="label" currentValue="set" />
      <InputWithReset label="label" currentValue="table" />
      <InputWithReset label="label" currentValue="num" />
      <Button>Save</Button>
      {/* <Button type="push">Reset</Button>
      <Button type="push" level="secondary">Reset</Button>
      <Button type="push" level="danger">Reset</Button> */}

    </article>
  );
}

export default Test;