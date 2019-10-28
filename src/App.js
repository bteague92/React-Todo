import React from "react";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  ////Set all state and state changes in here

  constructor() {
    super();
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

  filterCompleted = () => {};

  toggleCompleted = () => {};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
