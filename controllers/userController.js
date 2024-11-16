// controllers/userController.js
const Assignment = require('../models/assignmentModel');
exports.uploadAssignment = async (req, res) => {
    try {
        const { task, admin } = req.body;
        const assignment = new Assignment({ userId: req.user.id, task, admin });
        await assignment.save();
        res.status(201).json({ message: 'Assignment uploaded successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' }).select('username');
        res.json(admins);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
