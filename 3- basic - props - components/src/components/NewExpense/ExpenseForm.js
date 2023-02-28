import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  /* Alternativ att behandla state, gruppera i ett objekt ist */
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleHandler = (e) => {
    setTitle(e.target.value);
    /*  setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    }); */
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
    /*    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    }); */
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
    /*    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    }); */
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type={"text"} onChange={titleHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type={"number"} onChange={amountHandler} value={amount} />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max={"2022-12-31"}
            onChange={dateHandler}
            value={date}
          />
        </div>
        <div className="new-expense__Actions">
          <button onClick={props.hideAddExpenseHandler}>cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
