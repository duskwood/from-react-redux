import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../redux/reducers/todos";
import { State } from "../../redux/reducers";
import { Button } from "../Button";

type CreateTodoButtonProps = { onCreateTodoClick: (arg: void) => void };
const CreateTodoButton: React.ComponentType<CreateTodoButtonProps> = ({
  onCreateTodoClick,
}: CreateTodoButtonProps) => {
  const onClick = (_e: React.SyntheticEvent<EventTarget>): void => {
    onCreateTodoClick();
    return;
  };
  return <Button onClick={onClick}>create</Button>;
};

type RemoveTodoButtonProps = {
  id: string;
  onRemoveTodoClick: (id: string) => void;
};
const RemoveTodoButton: React.ComponentType<RemoveTodoButtonProps> = ({
  id,
  onRemoveTodoClick,
}: RemoveTodoButtonProps) => {
  const onClick = (_e: React.SyntheticEvent<EventTarget>): void => {
    onRemoveTodoClick(id);
    return;
  };
  return <Button onClick={onClick}>remove</Button>;
};

type UpdateTodoButtonProps = {
  id: string;
  onUpdateTodoClick: (id: string) => void;
};
const UpdateTodoButton: React.ComponentType<UpdateTodoButtonProps> = ({
  id,
  onUpdateTodoClick,
}: UpdateTodoButtonProps) => {
  const onClick = (_e: React.SyntheticEvent<EventTarget>): void => {
    onUpdateTodoClick(id);
    return;
  };
  return <Button onClick={onClick}>update</Button>;
};

// copy-paste code from https://gist.github.com/gordonbrander/2230317
const makeRandomId = (): string =>
  "_" + Math.random().toString(36).substr(2, 9);

export const Todos: React.ComponentType = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: State) => state.todos);

  const createTodo = (_: void): void => {
    dispatch(
      todoActions.createTodo({
        id: makeRandomId(),
        name: `foo- ${makeRandomId()}`,
        done: false,
      })
    );
  };
  const removeTodo = (id: string): void => {
    dispatch(todoActions.removeTodo(id));
  };
  const updateTodo = (id: string): void => {
    const [todo] = todos.filter((todo) => id === todo.id);
    dispatch(
      todoActions.updateTodo({
        id,
        todo: {
          ...todo,
          done: !todo.done,
        },
      })
    );
  };

  return (
    <>
      <CreateTodoButton onCreateTodoClick={createTodo} />
      <ul>
        {todos.map(({ id, name, done }) => (
          <li key={id}>
            <UpdateTodoButton id={id} onUpdateTodoClick={updateTodo} />
            <RemoveTodoButton id={id} onRemoveTodoClick={removeTodo} />
            <span>{done ? "✅" : "❎"} </span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
