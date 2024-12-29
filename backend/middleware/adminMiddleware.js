const jwt = require('jsonwebtoken');

// Middleware to verify admin authentication
const adminAuth = (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const token = req.header('Authorization')?.replace('Bearer ', '');

        // If no token is provided, return an error
        if (!token) {
            return res.status(401).json({ message: 'Access Denied. No token provided.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user's role is 'admin'
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Access Denied. Not authorized as admin.' });
        }

        // Attach the decoded user information to the request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // Handle invalid token or verification errors
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Access Denied. Token expired.' });
        }
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = adminAuth;
