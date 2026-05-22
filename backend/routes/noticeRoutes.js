const express = require("express");

const router = express.Router();

const Notice = require("../models/Notice");


// ADD NOTICE
router.post("/add", async (req, res) => {

  try {

    const notice = new Notice(req.body);

    await notice.save();

    res.status(201).json({
      success: true,
      message: "Notice Added Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});


// GET NOTICES
router.get("/", async (req, res) => {

  try {

    const notices = await Notice.find().sort({ createdAt: -1 });

    res.json(notices);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

module.exports = router;