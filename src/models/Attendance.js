const mongoose = require('mongoose');
const attendanceSchema = new mongoose.Schema({ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, date: { type: Date, default: Date.now }, clockIn: Date, clockOut: Date, workMinutes: { type: Number, default: 0 }, note: String }, { timestamps: true });
attendanceSchema.index({ user: 1, date: 1 });
module.exports = mongoose.model('Attendance', attendanceSchema);
