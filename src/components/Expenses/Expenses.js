import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const selectYear = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  //년도에 따라 필터해서 보여주기
  const filteredExpenses = props.items.filter((e)=> {
   return e.date.getFullYear().toString() === yearFilter;
   });


  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onSelectYearFilter={selectYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
