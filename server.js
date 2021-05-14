const express = require('express');
const connectDB = require('./db');
const expenses = require('./expenseRoute');
const app = express();
const morgan = require('morgan');
const path = require('path');
const environment = "production"
const port = 5000;

connectDB();
app.use(express.json());
if(environment === 'development'){
  app.use(morgan('dev'));
}
app.use('/api/v1/expenses', expenses);

if(environment === 'production'){
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}

app.listen(port, console.log(`App listening at http://localhost:${port}`));

