const express = require('express');
const { borrowBook, returnBook } = require('../controllers/borrowController');
const router = express.Router();

router.post('/:id/borrow', borrowBook);
router.post('/:id/return', returnBook);

module.exports = router;
