import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Expense = ({ expense }) => {
  const { deleteExpense } = useContext(GlobalContext);

  return (
    <li>
      {expense.name} <span>${expense.cost}</span>
      <span>{expense.category}</span>
      <button onClick={() => deleteExpense(expense.id)} className="delete-btn">x</button>
    </li>
  )
}