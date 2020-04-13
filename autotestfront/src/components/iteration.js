import React from 'react';
import './iteration.css';

function Iteration(props) {
  console.log("PROPS", props)

  const { iteration } = props;
  return (
    <article>
      <h4>Iteration {iteration.id}</h4>
      <p><strong>Result: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore.
      </p>

      <h5>Data</h5>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {iteration.parameters && iteration.parameters.map(param =>
            <tr key={param.id}>
              <td>{param.name}</td>
              <td>{param.value}</td>
            </tr>
          )}
        </tbody>
      </table>
    </article>
  );
}

export default Iteration;