import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <ul>{ this.props.todos.map(todo =><li key={ todo }>{ todo }</li>) }</ul>
      </div>
    );
  }
}

export default TodoList;
