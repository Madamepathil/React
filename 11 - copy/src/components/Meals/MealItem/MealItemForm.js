import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  let color = props.btnColor ? props.btnColor : "#8a2b06";
  let border = props.btnColor
    ? `1px solid ${props.btnColor}`
    : "1px solid #8a2b06";

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountRef.current.value;
    if (enteredAmount.length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };
  const amountRef = useRef();
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button style={{ backgroundColor: color, border: border }}> + Add</button>
      {!amountIsValid && <p>please enter a valid amount 1-5</p>}
    </form>
  );
};

export default MealItemForm;
