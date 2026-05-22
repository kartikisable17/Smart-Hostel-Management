const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({

  studentName: {
    type: String,
    required: true,
  },

  presentDays: {
    type: Number,
    required: true,
  },

  absentDays: {
    type: Number,
    required: true,
  },

  percentage: {
    type: Number,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("Attendance", attendanceSchema);