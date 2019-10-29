import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  ////Set all state and state changes in here

  constructor(props) {
    super(props);
    this.state = {
      todos: [] /// Setting The todos to an empty array that I can add to
    };
  }

  addTodo = name => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  toggleCompleted = id => {
    // loop through groceries data
    // find the grocery we clicked
    // toggle that grocery's purchased property
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm addTodo={this.addTodo} />
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
