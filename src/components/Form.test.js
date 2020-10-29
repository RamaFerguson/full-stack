import React from "react";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Form from './Form';

describe('Form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <React.StrictMode>
        <Form />
      </React.StrictMode>,
      div
    );
  });
  it('renders correctly', () => {
    const addTask = { id: "todo-0", name: "Eat", completed: true };
    const form = renderer
                  .create(<Form addTask={addTask} />)
                  .toJSON();
    expect(form).toMatchSnapshot();
  })
})