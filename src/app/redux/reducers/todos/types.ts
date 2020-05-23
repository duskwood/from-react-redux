export const CREATE_TODO = "todos/CREATE_TODO";
export const UPDATE_TODO = "todos/UPDATE_TODO";
export const REMOVE_TODO = "todos/REMOVE_TODO";

type Todo = {
  id: string;
  name: string;
  done: boolean;
};

export type CreateTodo = {
  type: "todos/CREATE_TODO";
  payload: Todo;
};
export type RemoveTodo = {
  type: "todos/REMOVE_TODO";
  payload: Todo["id"];
};
export type UpdateTodo = {
  type: "todos/UPDATE_TODO";
  payload: {
    id: Todo["id"];
    todo: Partial<Omit<Todo, "id">>;
  };
};

export type TodoActions = CreateTodo | RemoveTodo | UpdateTodo;

export type TodosState = Todo[];
