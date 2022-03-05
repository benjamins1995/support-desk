const express = require('express');
const router = express.Router();

const { protect } = require('../widdleware/authMiddleware');

router.route('/').get(protect, getTicket).post(protect, createTicket);

module.exports = router;
