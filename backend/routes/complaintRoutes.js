const express = require("express");

const Complaint = require("../models/Complaint");

const router = express.Router();


// ADD COMPLAINT
router.post("/", async (req, res) => {

  try {

    const { title, description } = req.body;

    const complaint = new Complaint({
      title,
      description,
    });

    await complaint.save();

    res.status(201).json({
      message: "Complaint Submitted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// GET ALL COMPLAINTS
router.get("/", async (req, res) => {

  try {

    const complaints = await Complaint.find();

    res.json(complaints);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});

module.exports = router;