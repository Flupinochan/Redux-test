import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { isLoginReducer } from "./isLogin";

export const rootReducer = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
