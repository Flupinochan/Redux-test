import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { rootReducer } from "./reducers";

const composedEnhancer = composeWithDevTools();
export const store = createStore(rootReducer, composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
