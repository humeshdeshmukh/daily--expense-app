/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/daily-expense-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Your application logic here


mongoose.connect('mongodb://localhost:27017/daily-expense-app', { useNewUrlParser: true, useUnifiedTopology: true });*/

const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const expenseRouter = require('./routes/expenses');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/daily-expense-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/users', userRouter);
app.use('/expenses', expenseRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});