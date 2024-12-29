const express = require('express');
const { adminLogin, createAdmin, getAdminProfile } = require('../controllers/adminController');
const adminAuth = require('../middleware/adminMiddleware');


const router = express.Router();

// Public routes
router.post('/login', adminLogin);
router.post('/create', createAdmin);

// Protected routes
router.get('/auth', adminAuth, (req, res) => {
    res.status(200).json({ message: 'Token is valid' });
});

module.exports = router;