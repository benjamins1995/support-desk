const express = require('express');
const router = express.Router();
const { protect } = require('../widdleware/authMiddleware');
const { getTickets, createTicket } = require('../controllers/ticketController');

router.route('/').get(protect, getTickets).post(protect, createTicket);

module.exports = router;
