import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Form from "./Form";
import FilterButton from "./FilterButton";
import { nanoid } from "nanoid";

const DATA = [
    { id: "todo-0", name: "Eat", status: 0 },
    { id: "todo-1", name: "Sleep", status: 0 },
    { id: "todo-2", name: "Repeat", status: 0 }
  ];

const FILTER_MAP = {
  All: () => true,
  NotStarted: (task) => task.status === 0,
  Started: (task) => task.status === 1,
  Completed: (task) => task.status === 2,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
  const [tasks, setTasks] = useState(DATA);

  useEffect(() => {
    const data = localStorage.getItem('listOfTasks');
    if (data) {
      setTasks(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listOfTasks', JSON.stringify(tasks))
  });

  function toggleTaskCompleted(id, status) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        return { ...task, status: status };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
    .filter((task) => FILTER_MAP[filter](task))
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        status={task.status}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  function addTask(name) {
    if (name.length > 0) {
      const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
      setTasks([...tasks, newTask]);
    }
  }

  function clearTasks() {
    setTasks([]);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} clearTasks={clearTasks}/>

      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
