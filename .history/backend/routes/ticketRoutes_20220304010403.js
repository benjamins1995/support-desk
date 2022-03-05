const express = require('express');
const router = express.Router();
const { protect } = require('../widdleware/authMiddleware');
const {
  getTickets,
  getTicket,
  createTicket,
} = require('../controllers/ticketController');

router
  .route('/')
  .get(protect, getTickets)
  .get(protect, getTicket)
  .post(protect, createTicket);

module.exports = router;
