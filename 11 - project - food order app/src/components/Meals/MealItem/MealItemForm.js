import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
export const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const ref = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = ref.current.value;
    const eneteredamountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      eneteredamountNumber < 1 ||
      eneteredamountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(eneteredamountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={ref}
        label={"Amount"}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          default: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>please enter a validg amount 1 -5</p>}
    </form>
  );
};
