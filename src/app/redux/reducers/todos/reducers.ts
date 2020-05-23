import { combineReducers, Reducer } from "redux";
import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TodosState,
  TodoActions,
} from "./types";

const initialState = [];

export const todos: Reducer<TodosState, TodoActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              ...action.payload.todo,
            }
          : todo
      );
    default:
      return state;
  }
};

export const reducer = combineReducers({
  todos,
});
