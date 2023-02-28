import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      /*       const updatedItems = state.items.concat(action.item);
       */

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        let updatedItem;
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems.state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return;
    default:
      return defaultCartState;
  }
};
export const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
