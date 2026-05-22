const express = require("express");

const router = express.Router();

const Complaint = require("../models/Complaint");

router.post("/add", async (req, res) => {

  try {

    const complaint = new Complaint({
      title: req.body.title,
      type: req.body.type,
      description: req.body.description,
    });

    await complaint.save();

    res.status(201).json({
      success: true,
      message: "Complaint Submitted",
      complaint,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

module.exports = router;