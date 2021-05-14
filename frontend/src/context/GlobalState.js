import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  expenses: [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function addExpense(expense) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/v1/expenses', expense, config);
      dispatch({
        type: 'ADD_EXPENSE',
        payload: res.data.data
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        payload: e.response.data.error
      });
    }
  }

  async function deleteExpense(id) {
    try {
      await axios.delete(`/api/v1/expenses/${id}`);
      dispatch({
        type: 'DELETE_EXPENSE',
        payload: id
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        payload: e.response.data.error
      });
    }
  }

  async function getExpenses(){
    try {
      const res = await axios.get('/api/v1/expenses');
      dispatch({
        type: 'GET_EXPENSES',
        payload: res.data.data
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        payload: e.response.data.error
      });
      
    }
  }

  return (<GlobalContext.Provider value={{
    expenses: state.expenses,
    addExpense,
    deleteExpense,
    getExpenses
  }}>
    {children}
  </GlobalContext.Provider>);
}