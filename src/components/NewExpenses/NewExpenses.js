import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpenses(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAppData(expenseData);
    setbuttonClick(false);
  };

  const [buttonClick, setbuttonClick] = useState(false);

  const addNewExpenseHandler = () => {
    setbuttonClick(true);
  };

  const stopEditingHandler = () => {
    setbuttonClick(false);
  };

  return (
    <div className="new-expense">
      {!buttonClick && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {buttonClick && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpenses;
