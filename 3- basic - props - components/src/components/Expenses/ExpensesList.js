import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  if (props.filteredExpenses.length == 0) {
    return <p>No expenses found</p>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item, i) => (
        <ExpenseItem
          key={i}
          date={item.date}
          amount={item.amount}
          title={item.title}
        />
      ))}
      ;
    </ul>
  );
}

export default ExpensesList;
