const asyncHandler = require('express-async-handler');


const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @desc    Get user ticket
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  
  res.status(200).json(message:'get ticket');
});

// @desc    create user ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  
  res.status(200).json(message:'create ticket');
});

module.exports = {
  getTickets, createTicket
};