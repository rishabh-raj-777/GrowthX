// routes/adminRoutes.js
const express = require('express');
const { getAssignments, updateAssignmentStatus } = require('../controllers/adminController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/assignments', authMiddleware('admin'), getAssignments);
router.post('/assignments/:id/status', authMiddleware('admin'), updateAssignmentStatus);

module.exports = router;
