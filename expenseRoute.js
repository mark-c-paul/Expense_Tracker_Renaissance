const express = require('express');
const router = express.Router();
const { addExpense, deleteExpense, getExpenses } = require('./expenseController');

router
  .route('/')
  .get(getExpenses)
  .post(addExpense);

router
  .route('/:id')
  .delete(deleteExpense);

module.exports = router;