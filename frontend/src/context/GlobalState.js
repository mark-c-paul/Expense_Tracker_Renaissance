import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  expenses: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteExpense(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    });
  }

  function addExpense(expense) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });
  }

  return (<GlobalContext.Provider value={{
    expenses: state.expenses,
    deleteExpense,
    addExpense
  }}>
    {children}
  </GlobalContext.Provider>);
}