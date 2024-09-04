import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// RootState 型の定義
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch 型の定義
export type AppDispatch = typeof store.dispatch;
