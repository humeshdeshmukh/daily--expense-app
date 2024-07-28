const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: Number,
  splitMethod: String,
  splitDetails: Object,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;