import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Expense } from './Expense';

export const ExpenseList = () => {
  const { expenses, getExpenses } = useContext(GlobalContext);
  useEffect(() => {
    getExpenses();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h4>Expenses:</h4>
      <ul className="list">
      <p>Name-----------------Cost-----------------Category</p>
        {expenses.map(expense => (<Expense key={expense._id} expense={expense} />))}
      </ul>
    </>
  )
}