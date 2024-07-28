const express = require('express');
const router = express.Router();
const { addExpense, getIndividualExpenses, getOverallExpenses, downloadBalanceSheet } = require('../controllers/expenseController');

router.post('/', addExpense);
router.get('/:id', getIndividualExpenses);
router.get('/', getOverallExpenses);
router.get('/balance-sheet', downloadBalanceSheet);

module.exports = router;