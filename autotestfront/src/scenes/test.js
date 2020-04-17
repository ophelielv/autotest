import React from 'react';
import './test.css';
import Button from '../components/button';

function Test(props) {
  const { test } = props;

  return (
    <article className="test">
      <h3>{test.name}</h3>

      <p>{test.description}</p>

      <label>Label</label>
      <input type="text" name="inp" />

      <Button level="primary">Save</Button>
      <Button level="secondary">Reset</Button>

    </article>
  );
}

export default Test;