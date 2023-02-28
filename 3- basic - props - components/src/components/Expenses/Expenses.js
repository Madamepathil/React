import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterChangeHandler={filterChangeHandler}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
