import React from "react";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Todo from './Todo';

describe('Todo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <React.StrictMode>
        <Todo />
      </React.StrictMode>,
      div
    );
  });
  it('renders correctly', () => {
    const task = { id: "todo-0", name: "Eat", completed: true };
    function toggleTaskCompleted() {return; };
    function deleteTask() {return; };
    function editTask() {return; };
    const todo = renderer
                  .create(<Todo
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    key={task.id}
                    toggleTaskCompleted={toggleTaskCompleted}
                    deleteTask={deleteTask}
                    editTask={editTask}
                  />)
                  .toJSON();
    expect(todo).toMatchSnapshot();
  })
})