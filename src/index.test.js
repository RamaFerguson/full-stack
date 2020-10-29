import { TestScheduler } from 'jest';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

describe('App.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <React.StrictMode>
        <App tasks = {DATA} />
      </React.StrictMode>,
      div
    );
  });
})
