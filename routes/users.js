const express = require('express');
const router = express.Router();
const { createUser, getUserDetails } = require('../controllers/userController');

router.post('/', createUser);
router.get('/:id', getUserDetails);

module.exports = router;