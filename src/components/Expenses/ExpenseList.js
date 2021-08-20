import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = function ({ items }) {
  //   let expenseContent = <p>No Expenses Found.</p>;

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expense.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
