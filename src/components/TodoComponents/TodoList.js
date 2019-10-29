// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(i => (
        <Todo key={i.id} todos={i} toggleCompleted={props.toggleCompleted} />
      ))}
      <button onClick={props.clearCompleted}>Clear Completed Todos</button>
    </div>
  );
};

export default TodoList;
