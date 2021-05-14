const express = require('express');
const app = express();
const PORT = 3001;
const connectDB = require('./db');
const expenses = require('./expenseRoute');

app.use('/api/v1/expenses', expenses);

connectDB()
  .then(async () => {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`)
    })
})
