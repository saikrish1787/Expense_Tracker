import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseList from "./ExpenseList";
// import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [EnteredYear, setEnteredYear] = useState("2020");
  const filterChangeHandler = (selectedyear) => {
    setEnteredYear(selectedyear);
    // console.log(EnteredYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === EnteredYear;
  });

  // console.log(props);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={EnteredYear}
          onDropdown={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpense}></ExpensesChart>
        <ExpenseList items={filteredExpense}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;
