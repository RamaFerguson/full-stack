import React, { useState } from "react";

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  function handleChange(e) {
    setNewName(e.target.value);
  }
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
        <div>

          <label className="todo-label" htmlFor={props.id}>
            NotStarted
          </label>
          <input
            id={props.id}
            name={"radiooo"+props.id}
            type="radio"
            value="0"
            onChange={() => props.toggleTaskCompleted(props.id, 0)}
          />
          <label className="todo-label" htmlFor={props.id}>
            Started
          </label>
          <input
            id={props.id}
            name={"radiooo"+props.id}
            type="radio"
            value="1"
            onChange={() => props.toggleTaskCompleted(props.id, 1)}
          />
          <label className="todo-label" htmlFor={props.id}>
            Completed
          </label>
          <input
            id={props.id}
            name={"radiooo"+props.id}
            type="radio"
            value="2"
            onChange={() => props.toggleTaskCompleted(props.id, 2)}
          />
        </div>
        
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
