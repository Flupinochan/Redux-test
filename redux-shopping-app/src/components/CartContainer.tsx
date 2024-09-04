"use client";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import CartItem from "./CartItem";
import { clearCart, calculateTotals } from "@/features/cart/cartSlice";
import { openModal } from "@/features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  if (amount < 1) {
    return (
      <section className="flex flex-col justify-center items-center">
        <header>
          <h2>買い物かご</h2>
          <h4>何も入っていません…</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="flex flex-col justify-center items-center">
      <header className="flex justify-center items-center p-4 text-xl text-purple-500 font-bold">
        <h2>買い物かご</h2>
      </header>
      <div className="p-4">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr className="border-purple-500 w-full" />
        <div>
          <h4 className="p-4">
            合計<span>{total}円</span>
          </h4>
        </div>
      </footer>
      <Button variant="outlined" endIcon={<DeleteIcon />} onClick={() => dispatch(openModal())}>
        All Delete
      </Button>
    </section>
  );
};

export default CartContainer;
