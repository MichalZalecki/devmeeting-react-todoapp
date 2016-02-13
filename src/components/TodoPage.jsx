import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import UndoRedo from "./UndoRedo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import * as actions from "../actionCreators/todoActionCreators";

class TodoPage extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="todo-page">
        <TodoForm newTodo={ this.props.addTodo } />
        <TodoList todos={ this.props.todos } />
        <UndoRedo
          canUndo={ this.props.canUndo }
          canRedo={ this.props.canRedo }
          onUndo={ this.props.onUndo }
          onRedo={ this.props.onRedo }
        />
      </div>
    );
  }
}

export default connect(state => ({
  ...state,
  todos: state.todos.present,
  canUndo: state.todos.past.length,
  canRedo: state.todos.future.length
}), dispatch => ({
  ...bindActionCreators(actions, dispatch),
  ...bindActionCreators({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
  }, dispatch)
}))(TodoPage);
