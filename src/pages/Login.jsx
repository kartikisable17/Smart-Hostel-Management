import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "Student",
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };


  // LOGIN FUNCTION
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: user.email,
            password: user.password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert(data.message);


      // SAVE TOKEN
      if (response.ok) {

        localStorage.setItem(
          "token",
          data.token
        );

        navigate("/dashboard");
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }
  };

  return (
    <div className="min-h-screen bg-[#07111f] flex items-center justify-center px-5 overflow-hidden relative">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl relative z-10"
      >

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-center text-white"
        >
          Welcome Back
        </motion.h1>

        <p className="text-gray-400 text-center mt-3">
          Login to continue to VSS Hostel
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="mt-10 space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-white/10 border border-white/10 outline-none text-white focus:border-cyan-400 duration-300"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={user.password}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-white/10 border border-white/10 outline-none text-white focus:border-pink-400 duration-300"
              required
            />
          </div>

          {/* ROLE */}
          <div>
            <label className="text-sm text-gray-300">
              Select Role
            </label>

            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-white/10 border border-white/10 outline-none text-white"
            >
              <option className="text-black">Student</option>
              <option className="text-black">Super Student</option>
              <option className="text-black">Warden</option>
              <option className="text-black">Admin</option>
            </select>
          </div>

          {/* LOGIN BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold text-lg shadow-lg"
          >
            Login
          </motion.button>
        </form>

        {/* REGISTER LINK */}
        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 font-semibold hover:text-pink-400 duration-300"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;