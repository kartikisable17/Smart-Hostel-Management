import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* PREMIUM ANIMATED BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-fuchsia-500 opacity-30 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-cyan-500 opacity-30 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-violet-500 opacity-20 blur-[100px] rounded-full animate-bounce"></div>

      <div className="absolute top-[20%] right-[25%] w-[180px] h-[180px] bg-pink-400 opacity-20 blur-[90px] rounded-full animate-ping"></div>

      {/* MAIN SECTION */}
      <div className="grid lg:grid-cols-2 gap-10 items-center px-8 lg:px-20 py-16 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent"
          >
            Smart VSS Hostel
            <br />
            Management System
          </motion.h1>

          {/* INTRO */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-300 mt-8 text-lg leading-8 max-w-2xl"
          >
            A smart digital platform developed for Vidyarthi Sahayyak Samiti
            hostel students and wardens. This system helps students apply for
            leave online, raise complaints, track attendance, receive notices,
            and communicate with hostel authorities instantly without waiting
            for manual approval.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex gap-5 mt-10 flex-wrap"
          >

            <Link to="/login">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-500 text-white font-bold shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-110 hover:rotate-1 duration-300">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-300 bg-white/5 backdrop-blur-lg hover:bg-cyan-400 hover:text-black hover:scale-110 duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                Register
              </button>
            </Link>

          </motion.div>

          {/* FEATURE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6 mt-14">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-white/10 border border-white/10 p-6 rounded-[30px] backdrop-blur-xl hover:-translate-y-2 hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] duration-500"
            >
              <h2 className="text-cyan-400 text-2xl font-bold">
                Online Leave
              </h2>

              <p className="text-gray-300 mt-3 text-sm leading-7">
                Students can apply leave digitally and receive instant approval
                or rejection updates from wardens.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white/10 border border-white/10 p-6 rounded-[30px] backdrop-blur-xl hover:-translate-y-2 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] duration-500"
            >
              <h2 className="text-pink-400 text-2xl font-bold">
                Complaint System
              </h2>

              <p className="text-gray-300 mt-3 text-sm leading-7">
                Raise hostel complaints like water issues, electricity,
                maintenance and cleaning problems online.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-white/10 border border-white/10 p-6 rounded-[30px] backdrop-blur-xl hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] duration-500"
            >
              <h2 className="text-yellow-400 text-2xl font-bold">
                Attendance
              </h2>

              <p className="text-gray-300 mt-3 text-sm leading-7">
                Smart attendance monitoring system for students and hostel
                management.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="bg-white/10 border border-white/10 p-6 rounded-[30px] backdrop-blur-xl hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] duration-500"
            >
              <h2 className="text-green-400 text-2xl font-bold">
                Smart Notices
              </h2>

              <p className="text-gray-300 mt-3 text-sm leading-7">
                Hostel notices and important announcements delivered instantly
                to students.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT LOGIN CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_0_50px_rgba(0,255,255,0.15)] hover:shadow-[0_0_60px_rgba(236,72,153,0.3)] transition duration-500 max-w-lg mx-auto w-full"
        >

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-center">
            Welcome Back
          </h2>

          <p className="text-gray-400 text-center mt-3">
            Login to continue to VSS Hostel
          </p>

          {/* FORM */}
          <form className="mt-10 space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 outline-none text-white focus:border-fuchsia-400 focus:shadow-[0_0_20px_rgba(217,70,239,0.5)] duration-300"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.5)] duration-300"
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="text-sm text-gray-300">
                Select Role
              </label>

              <select className="w-full mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 outline-none text-white">
                <option className="text-black">Student</option>
                <option className="text-black">Super Student</option>
                <option className="text-black">Warden</option>
                <option className="text-black">Admin</option>
              </select>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-pink-500 to-fuchsia-500 text-white font-bold text-lg shadow-[0_0_25px_rgba(236,72,153,0.7)]"
            >
              Login
            </motion.button>

          </form>

          {/* REGISTER */}
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
    </div>
  );
};

export default Home;