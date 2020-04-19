import React from 'react';
import './iteration.css';

function Iteration(props) {

  const { iteration } = props;
  return (
    <article className="iteration">
      <h3>Iteration {iteration.id}</h3>
      <p><strong>Result: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore.
      </p>

      <h5>Data</h5>
      <table>
        <thead>
          <tr key="header">
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {iteration.parameters && iteration.parameters.map((param, idx) =>
            <tr key={param.name + idx}>
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