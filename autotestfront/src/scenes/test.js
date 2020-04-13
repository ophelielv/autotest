import React from 'react';
import './test.css';

function Test(props) {
  const { test } = props;

  return (
    <section>
      <h3>{test.name}</h3>

      <p>{test.description}</p>

      <label>Label</label>
      <input type="text" name="inp" />

      <button>Save</button>
      <button>Reset</button>

    </section>
  );
}

export default Test;