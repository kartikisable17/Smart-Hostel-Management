import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomNo: "",
    password: "",
    role: "student",
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // REGISTER FUNCTION
  const handleRegister = async (e) => {

    e.preventDefault();
    console.log(formData);

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert(data.message);

      if (response.ok) {
        navigate("/login");
      }

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }
  };



  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-5 py-10 overflow-hidden relative">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-fuchsia-500 opacity-30 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-cyan-500 opacity-30 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-violet-500 opacity-20 blur-[100px] rounded-full animate-bounce"></div>

      {/* REGISTER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.01 }}
        className="w-full max-w-5xl bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-[0_0_50px_rgba(0,255,255,0.15)] hover:shadow-[0_0_60px_rgba(236,72,153,0.3)] transition duration-500 relative z-10"
      >

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-6xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent"
        >
          Create Account
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-center mt-4 text-lg"
        >
          Register for VSS Hostel Management System
        </motion.p>

        {/* FORM */}
        <form
          onSubmit={handleRegister}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >

          {/* FULL NAME */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="text-gray-300 text-sm">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-fuchsia-400 focus:shadow-[0_0_20px_rgba(217,70,239,0.5)] duration-300"
            />
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="text-gray-300 text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.5)] duration-300"
            />
          </motion.div>

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="text-gray-300 text-sm">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-pink-400 focus:shadow-[0_0_20px_rgba(236,72,153,0.5)] duration-300"
            />
          </motion.div>

          {/* ROOM NUMBER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label className="text-gray-300 text-sm">
              Room Number
            </label>

            <input
              type="text"
              name="roomNo"
              placeholder="Enter Room Number"
              value={formData.roomNo}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-400 focus:shadow-[0_0_20px_rgba(250,204,21,0.5)] duration-300"
            />
          </motion.div>

          {/* PASSWORD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <label className="text-gray-300 text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-green-400 focus:shadow-[0_0_20px_rgba(74,222,128,0.5)] duration-300"
            />
          </motion.div>

          {/* ROLE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <label className="text-gray-300 text-sm">
              Select Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400 duration-300"
            >
              <option value="student" className="text-black">
                Student
              </option>

              <option value="warden" className="text-black">
                Warden
              </option>

              <option value="admin" className="text-black">
                Admin
              </option>
            </select>
          </motion.div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="md:col-span-2"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-pink-500 to-fuchsia-500 text-white font-bold text-lg shadow-[0_0_25px_rgba(236,72,153,0.7)]"
            >
              Register
            </motion.button>
          </motion.div>

        </form>

        {/* LOGIN LINK */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-gray-400 text-center mt-8"
        >
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-cyan-400 font-semibold hover:text-pink-400 duration-300"
          >
            Login
          </Link>
        </motion.p>

      </motion.div>
    </div>
  );
};

export default Register;