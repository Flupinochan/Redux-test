import React from "react";
import Image from "next/image";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";

import { increaseItem, decreaseItem, removeItem } from "@/features/cart/cartSlice";

interface cartItem {
  id: number;
  title: string;
  price: string;
  img: string;
  amount: number;
}

const CartItem = (item: cartItem) => {
  const dispatch = useDispatch();
  return (
    <article className="flex flex-row py-2">
      <Image width={200} height={200} src={item.img} alt={item.img} />
      <div className="flex flex-col justify-center items-start pl-6">
        <div className="pl-4">
          <h4 className="pb-1">{item.title}</h4>
          <h4>{item.price}</h4>
        </div>
        <Button variant="text" onClick={() => dispatch(removeItem(item.id))}>
          削除
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center ml-auto">
        <IconButton onClick={() => dispatch(increaseItem(item.id))}>
          <AddCircleOutlineIcon color="primary" />
        </IconButton>
        <p className="text-purple-500 font-bold">{item.amount}</p>
        <IconButton
          onClick={() => {
            if (item.amount > 1) {
              dispatch(decreaseItem(item.id));
            } else {
              dispatch(removeItem(item.id));
            }
          }}
        >
          <RemoveCircleOutlineIcon color="primary" />
        </IconButton>
      </div>
    </article>
  );
};

export default CartItem;
