import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";

const INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [objectexpenses, setobjectexpenses] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = (expense) => {
    // expenses.push(expense);
    // console.log(expense);
    setobjectexpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpenses onAppData={addExpenseHandler}></NewExpenses>
      <Expenses items={objectexpenses}></Expenses>
    </div>
  );
}

export default App;
