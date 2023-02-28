import React, { useContext } from "react";
import CartContext from "../../../store/cartContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          btnColor={props.btnColor}
          onAddToCart={addItemToCartHandler}
        />
      </div>
    </li>
  );
}
