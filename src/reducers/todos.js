import undoable, { distinctState } from "redux-undo";
import {
  ADD_TODO,
  FETCH_TODOS_SUCCESS,
} from "../actionTypes/todoActionTypes";

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload.todo];
    case FETCH_TODOS_SUCCESS:
      return action.payload.todos;
    default:
      return state;
  }
}

const undoableTodos = undoable(todos, {
  filter: distinctState()
});

export default undoableTodos;
