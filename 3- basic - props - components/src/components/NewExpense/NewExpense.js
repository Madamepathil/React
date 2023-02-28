import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const showAddExpenseHandler = () => {
    setShowAddExpense(true);
  };
  const hideAddExpenseHandler = () => {
    setShowAddExpense(false);
  };
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      {showAddExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDatahandler}
          hideAddExpenseHandler={hideAddExpenseHandler}
        />
      ) : (
        <button onClick={showAddExpenseHandler}> Add new Expense</button>
      )}
    </div>
  );
};
