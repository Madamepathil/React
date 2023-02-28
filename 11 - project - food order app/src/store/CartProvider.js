import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmont =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const exisitingCartItems = state.items[existingCartItemIndex];

      let updatedItems;

      if (exisitingCartItems) {
        const updatedItem = {
          ...exisitingCartItems,
          amount: exisitingCartItems.amount + action.item.amount,
        };

        updatedItems = [...state.items];

        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = /* [
          ...state.items,
          { ...action.item },
        ]; */ state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmont,
      };

    case "REMOVE":
      const existingCartItemIndex2 = state.items.findIndex(
        (item) => item.id === action.id
      );

      const existingItem = state.items[existingCartItemIndex2];
      const updatedTotalAmount = state.totalAmount - existingItem.price;

      let updatedItems2;
      if (existingItem.amount === 1) {
        updatedItems2 = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems2 = [...state.items];
        updatedItems2[existingCartItemIndex2] = updatedItem;
      }

      return {
        items: updatedItems2,
        totalAmount: updatedTotalAmount,
      };
      break;

    default:
      break;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removieItemCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removieItemCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
