import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  console.log(ctx);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
