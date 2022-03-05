const express = require('express');
const router = express.Router();

const { protect } = require('../widdleware/authMiddleware');
const { getNotes } = require('../controllers/noteController');

router.route('/').get(protect, getNotes);

module.exports = router;
