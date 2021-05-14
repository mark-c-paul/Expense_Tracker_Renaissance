import React from 'react';
import './App.css';
import { AddExpense } from './components/AddExpense';
import { ExpenseList } from './components/ExpenseList';
import { Header } from './components/Header';
import { Total } from './components/Total';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <ExpenseList />
        <Total />
        <AddExpense />
      </div>
    </GlobalProvider>
  );
}

export default App;