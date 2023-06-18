import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {
    // backend
  },
  removeItem: (id) => {
    // backend
  },
});

export default CartContext;