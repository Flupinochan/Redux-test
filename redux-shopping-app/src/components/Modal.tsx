"use client";
import { clearCart } from "@/features/cart/cartSlice";
import { closeModal } from "@/features/modal/modalSlice";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="fixed z-10 inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-purple-500 p-6 rounded shadow-lg max-w-sm mx-auto">
        <h4 className="text-lg font-semibold tracking-widest text-center text-white">買い物かごを全て空にしますか?</h4>
        <div className="flex flex-row justify-center space-x-20 mt-4">
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            OK
          </Button>
          <Button color="secondary" variant="contained" onClick={() => dispatch(closeModal())}>
            やめとく
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
