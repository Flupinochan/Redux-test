import { createSlice } from "@reduxjs/toolkit";
import cartItems from "@/components/cartItems";

// 買い物かご
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItems,
    amount: 4,
    total: 58900,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      const itemToRemove = state.cartItems.find((item) => item.id === itemId);
      if (itemToRemove) {
        const itemPrice = Number(itemToRemove.price) * itemToRemove.amount;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        // state.amount -= itemToRemove.amount;
        // state.total -= itemPrice;
      }
    },
    increaseItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      if (cartItem) {
        cartItem.amount += 1;
        // state.amount += 1;
        // state.total += Number(cartItem.price);
      }
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      if (cartItem) {
        cartItem.amount -= 1;
        // state.amount -= 1;
        // state.total -= Number(cartItem.price);
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increaseItem, decreaseItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
