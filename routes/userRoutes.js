// routes/userRoutes.js
const express = require('express');
const { uploadAssignment, getAdmins } = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/upload', authMiddleware('user'), uploadAssignment);
router.get('/admins', authMiddleware('user'), getAdmins);

module.exports = router;
