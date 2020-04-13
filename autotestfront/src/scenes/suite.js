import React from 'react';
import './suite.css';
import Iteration from '../components/iteration';
import Test from './test';

function Suite() {

  const tests = [
    {
      name: 'Test 1',
      description: 'Test 1 description:',
    },
    {
      name: 'Test 2',
      description: 'Test 2 description.',
    },
  ];

  const iterations = [
    {
      id: 1,
      name: 'Iteration 1',
      parameters: [
        { name: 'Username', value: 'GDAV' },
        { name: 'Password', value: 'qwerty' },
      ]
    },
    {
      id: 2,
      name: 'Iteration 2',
      parameters: [
        { name: 'Username', value: 'ABC' },
        { name: 'Password', value: 'pass' },
      ]
    },
    {
      id: 3,
      name: 'Iteration 3',
      parameters: [
        { name: 'Username', value: 'Hector' },
        { name: 'Password', value: '123' },
      ]
    },
  ];

  return (
    <main className="AppContainer">
      <h1>Tests suite</h1>
      <h2>Presentation</h2>
      <p>
        Suite description. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
        non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
        rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat.
      </p>

      {tests.map(test =>
        <Test test={test} key={test.key} />
      )}

      <h2>Launches and results</h2>
      {iterations.map(iteration =>
        <Iteration iteration={iteration} />
      )}

      <button>Start</button>
    </main>
  );
}

export default Suite;