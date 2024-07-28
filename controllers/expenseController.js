const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.send(expense);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getIndividualExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.params.id });
    res.send(expenses);
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.send(expenses);
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.downloadBalanceSheet = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const balanceSheet = await generateBalanceSheet(expenses);
    res.send(balanceSheet);
  } catch (err) {
    res.status(404).send(err);
  }
};