// models/assignmentModel.js
const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    task: { type: String, required: true },
    admin: { type: String, required: true },
    status: { type: String, default: 'pending' }, // 'accepted', 'rejected', 'pending'
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
