const express = require("express");

const router = express.Router();

const Attendance = require("../models/Attendance");


// ADD ATTENDANCE
router.post("/add", async (req, res) => {

  try {

    const attendance = new Attendance(req.body);

    await attendance.save();

    res.status(201).json({
      success: true,
      message: "Attendance Added Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});


// GET ATTENDANCE
router.get("/", async (req, res) => {

  try {

    const attendance = await Attendance.find();

    res.json(attendance);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

module.exports = router;