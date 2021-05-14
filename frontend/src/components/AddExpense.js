import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddExpense = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState('');

  const { addExpense } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newExpense = {
      name,
      cost: + cost,
      category
    }

    addExpense(newExpense);
  }

  return (
    <>
      <h5>Add New Expense</h5>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name of the expense</label>
          <input type="text" required="required" maxlength="14" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name..." />
        </div>
        <div className="form-control">
          <label htmlFor="cost">Cost of the item purchased  $</label>
          <input type="number" required="required" max="999999999.99" min="0.01" step="0.01" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Enter cost..." />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category of the purchase</label>
          <input type="text" required="required" maxlength="14" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..." />
        </div>
        <button className="btn">Add expense</button>
      </form>
    </>
  )
}