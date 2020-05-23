import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  CreateTodo,
  RemoveTodo,
  UpdateTodo,
} from "./types";

const createTodo = (payload: CreateTodo["payload"]): CreateTodo => ({
  type: CREATE_TODO,
  payload,
});

const removeTodo = (payload: RemoveTodo["payload"]): RemoveTodo => ({
  type: REMOVE_TODO,
  payload,
});

const updateTodo = (payload: UpdateTodo["payload"]): UpdateTodo => ({
  type: UPDATE_TODO,
  payload,
});

export const actions = {
  createTodo,
  removeTodo,
  updateTodo,
};
