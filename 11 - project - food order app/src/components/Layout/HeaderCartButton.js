import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
export const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  console.log(cartCtx);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnIsHighlLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onShowModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
