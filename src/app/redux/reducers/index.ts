import { combineReducers } from "redux";
import { reducer as todos } from "./todos/reducers";

export type State = ReturnType<typeof reducers>;

export const reducers = combineReducers({
  todos,
});
