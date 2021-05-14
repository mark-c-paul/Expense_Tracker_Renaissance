const ExpenseModel = require('./expenseModel')

exports.addExpenses = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const expense = await ExpenseModel.create(req.body);
    return res.status(201).json({
      data: expense
    });
  } catch (e) {
    if (e.name === 'ValidationError') {
      const messages = Object.values(e.errors).map(val => val.message);
      return res.status(400).json({
        error: messages
      });
    } else {
      return res.status(500).json({
        error: 'Server Error'
      });
    }
  }
}

exports.deleteExpenses = async (req, res, next) => {
  try {
    const expense = await ExpenseModel.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({
        error: 'No expense found'
      });
    }
    await expense.remove();
    return res.status(200).json({
      data: {}
    });
  } catch (e) {
    return res.status(500).json({
      error: 'Server Error'
    });
  }
}

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await ExpenseModel.find();
    return res.status(200).json({
      data: expenses
    });
  } catch (e) {
    return res.send(500).json({
      error: 'Server Error'
    });
  }
}