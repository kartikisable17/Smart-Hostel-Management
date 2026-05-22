const Complaint = require("../models/Complaint");

const addComplaint = async (req, res) => {

  try {

    const complaint = await Complaint.create(req.body);

    res.status(201).json({
      message: "Complaint Added Successfully",
      complaint,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  addComplaint,
};