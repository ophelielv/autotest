import React, { useState } from 'react';
import './iteration.css';
import Button from '../components/button';
import { faPlay, faTrash, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

function Iteration(props) {
  const { iteration } = props;
  const [showDetail, setShowDetail] = useState(false)

  const detailButtonIcon = () => showDetail ? faAngleDoubleUp : faAngleDoubleDown;

  const clickOnShowDetail = () => setShowDetail(!showDetail);

  const clickOnDelete = () => console.log("TODO");
  const clickOnReplay = () => console.log("TODO");

  return (
    <article className="iteration">
      <div className="row">
        <h3>Iteration {iteration.id} - <small>20/02/2020 10:05</small></h3>
        <div>
          <Button level="primary" icon={detailButtonIcon()}
            onClick={clickOnShowDetail}
          >
            Details
          </Button>
        </div>
      </div>

      {showDetail &&
        <div className="detail">
          <h4>Data</h4>
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

          <h4>Results</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>

          <div className="row">
            <Button level="primary" icon={faPlay} onClick={clickOnReplay}>
              Replay
          </Button>
            <Button level="danger" icon={faTrash} onClick={clickOnDelete}>
              Delete
          </Button>
          </div>
        </div>

      }
    </article>
  );
}

export default Iteration;