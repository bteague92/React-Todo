import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
    console.log(this.state.newTodo);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
    console.log("it worked");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">New Todo: </label>
          <input
            type="text"
            name="todo"
            id="todo"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            onSubmit={this.onSubmit}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
