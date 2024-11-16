// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
exports.authMiddleware = (role) => (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ error: 'Access denied' });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;

        if (role && req.user.role !== role)
            return res.status(403).json({ error: 'Unauthorized access' });

        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' });
    }
};
