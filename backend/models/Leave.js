const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true,
  },

  roomNo: {
    type: String,
    required: true,
  },

  leaveType: {
    type: String,
    required: true,
  },

  fromDate: {
    type: String,
    required: true,
  },

  toDate: {
    type: String,
    required: true,
  },

  reason: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("Leave", leaveSchema);