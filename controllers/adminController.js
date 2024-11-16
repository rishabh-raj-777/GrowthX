// controllers/adminController.js
const Assignment = require('../models/assignmentModel');

exports.getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({ admin: req.user.id });
        res.json(assignments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateAssignmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!['accepted', 'rejected'].includes(status))
            return res.status(400).json({ error: 'Invalid status' });

        await Assignment.findByIdAndUpdate(id, { status });
        res.json({ message: `Assignment ${status} successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
