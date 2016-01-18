import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.todo);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <form onSubmit={ ::this.handleSubmit }>
        <input
          type="text"
          name="todo"
          onChange={ ::this.handleChange }
          value={ this.state.todo }
        />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default TodoForm;
