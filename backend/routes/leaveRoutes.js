const express = require("express");

const router = express.Router();

const Leave = require("../models/Leave");

router.post("/add", async (req, res) => {

  try {

    console.log(req.body);

    const leave = new Leave({
      fullName: req.body.fullName,
      roomNo: req.body.roomNo,
      leaveType: req.body.leaveType,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      reason: req.body.reason,
    });

    await leave.save();

    res.status(201).json({
      success: true,
      message: "Leave Submitted Successfully",
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