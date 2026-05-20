const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    await mongoose.connect(
      "mongodb+srv://kartiki:Kartiki%40123@cluster0.vra2o7o.mongodb.net/hostel?retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected");

  } catch (error) {

    console.log(error);

  }
};

module.exports = connectDB;