const express = require('express');
const connectDB = require('./db');
const expenses = require('./expenseRoute');
const app = express();
const port = 3001;

connectDB();
app.use(express.json());
app.use('/api/v1/expenses', expenses);
app.listen(port, console.log(`App listening at http://localhost:${port}`));

