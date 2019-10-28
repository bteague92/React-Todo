import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
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
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="todo">New Todo</label>
          <input
            type="text"
            name="todo"
            id="todo"
            value={this.state.newItem}
            onChange={this.handleChanges}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
