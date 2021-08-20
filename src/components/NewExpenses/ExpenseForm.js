import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [EnteredTitle, setEnteredTitle] = useState("");
  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }

  const [EnteredAmount, setEnteredAmount] = useState("");
  function amountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }

  const [EnteredDate, setEnteredDate] = useState("");
  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={EnteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={EnteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2022-12-1"
            onChange={dateChangeHandler}
            value={EnteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
