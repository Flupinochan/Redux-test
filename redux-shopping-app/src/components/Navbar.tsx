"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  // 分割代入
  const { amount } = useSelector((state: RootState) => state.cart);
  return (
    <nav className="w-full bg-purple-500 py-4">
      <div className="flex flex-row justify-between items-center">
        <div></div>
        <h3 className="text-white text-2xl font-bold">Redux Shopping</h3>
        <div className="flex flex-col mr-4 relative">
          <ShoppingCartIcon fontSize="large" className="text-white" />
          <div className="absolute bottom-5 left-5 bg-violet-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-md">{amount}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
