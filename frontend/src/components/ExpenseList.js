import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Expense } from './Expense';


export const ExpenseList = () => {
  const { expenses } = useContext(GlobalContext);

  return (
    <>
      <h4>Expenses:</h4>
      <ul className="list">
      <p>Name-----------------Cost-----------------Category</p>
        {expenses.map(expense => (<Expense key={expense.id} expense={expense} />))}
      </ul>
    </>
  )
}