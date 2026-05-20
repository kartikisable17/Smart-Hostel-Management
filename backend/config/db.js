const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.vra2o7o.mongodb.net/hostel?retryWrites=true&w=majority"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {

    console.log(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;