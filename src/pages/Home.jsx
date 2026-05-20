import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-fuchsia-500 opacity-20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-500 opacity-20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute top-[40%] left-[40%] w-[220px] h-[220px] bg-violet-500 opacity-10 blur-[100px] rounded-full animate-bounce"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-14 relative z-10">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-28 items-center min-h-[90vh]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent"
            >
              Smart VSS Hostel
              <br />
              Management System
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg leading-9 mt-8 max-w-xl"
            >
              A smart digital platform developed for Vidyarthi Sahayyak Samiti
              hostel students and wardens. Apply for leave, raise complaints,
              manage attendance, receive notices and communicate instantly.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-5 mt-10"
            >

              <Link to="/login">
                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-500 font-bold text-lg shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:scale-105 duration-300">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-300 bg-white/5 hover:bg-cyan-400 hover:text-black font-semibold duration-300">
                  Register
                </button>
              </Link>

            </motion.div>

          </motion.div>

          {/* RIGHT LIVE STATUS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center lg:justify-end"
          >

            <div className="w-full max-w-[390px] bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-7 shadow-[0_0_45px_rgba(0,255,255,0.12)]">

              {/* TOP */}
              <div className="flex items-center justify-between mb-7">

                <div>
                  <h2 className="text-3xl font-bold">
                    Hostel Live Status
                  </h2>

                  <p className="text-gray-400 mt-1 text-sm">
                    Real-time hostel activity
                  </p>
                </div>

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              </div>

              {/* CARD 1 */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 25px rgba(34,211,238,0.3)",
                }}
                className="bg-white/5 border border-cyan-400/20 rounded-3xl p-5 mb-5"
              >

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Students Present
                    </p>

                    <h2 className="text-5xl font-bold text-cyan-400 mt-2">
                      1180
                    </h2>
                  </div>

                  <div className="text-5xl">
                    🎓
                  </div>

                </div>

              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 25px rgba(236,72,153,0.3)",
                }}
                className="bg-white/5 border border-pink-400/20 rounded-3xl p-5 mb-5"
              >

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Active Complaints
                    </p>

                    <h2 className="text-5xl font-bold text-pink-400 mt-2">
                      24
                    </h2>
                  </div>

                  <div className="text-5xl">
                    🛠️
                  </div>

                </div>

              </motion.div>

              {/* CARD 3 */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 25px rgba(74,222,128,0.3)",
                }}
                className="bg-white/5 border border-green-400/20 rounded-3xl p-5 mb-7"
              >

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Leave Requests
                    </p>

                    <h2 className="text-5xl font-bold text-green-400 mt-2">
                      12
                    </h2>
                  </div>

                  <div className="text-5xl">
                    📄
                  </div>

                </div>

              </motion.div>

              {/* BUTTON */}
              <Link to="/login">
                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-pink-500 to-fuchsia-500 text-white font-bold text-lg shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:scale-105 duration-300">
                  Explore Hostel System
                </button>
              </Link>

            </div>

          </motion.div>

        </div>

        {/* FEATURES */}
        <div className="mt-16">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
          >
            Smart Hostel Features
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* FEATURE 1 */}
            <motion.div
              whileHover={{ y: -12, scale: 1.05 }}
              className="bg-white/10 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl hover:border-cyan-400 duration-300"
            >

              <div className="text-4xl mb-4">📝</div>

              <h2 className="text-cyan-400 text-xl font-bold">
                Online Leave
              </h2>

              <p className="text-gray-300 mt-3 leading-7 text-sm">
                Apply hostel leave digitally and receive instant updates.
              </p>

            </motion.div>

            {/* FEATURE 2 */}
            <motion.div
              whileHover={{ y: -12, scale: 1.05 }}
              className="bg-white/10 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl hover:border-pink-400 duration-300"
            >

              <div className="text-4xl mb-4">🛠️</div>

              <h2 className="text-pink-400 text-xl font-bold">
                Complaints
              </h2>

              <p className="text-gray-300 mt-3 leading-7 text-sm">
                Raise electricity and maintenance complaints online.
              </p>

            </motion.div>

            {/* FEATURE 3 */}
            <motion.div
              whileHover={{ y: -12, scale: 1.05 }}
              className="bg-white/10 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl hover:border-yellow-400 duration-300"
            >

              <div className="text-4xl mb-4">📚</div>

              <h2 className="text-yellow-400 text-xl font-bold">
                Attendance
              </h2>

              <p className="text-gray-300 mt-3 leading-7 text-sm">
                Smart attendance monitoring system for students.
              </p>

            </motion.div>

            {/* FEATURE 4 */}
            <motion.div
              whileHover={{ y: -12, scale: 1.05 }}
              className="bg-white/10 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl hover:border-green-400 duration-300"
            >

              <div className="text-4xl mb-4">📢</div>

              <h2 className="text-green-400 text-xl font-bold">
                Smart Notices
              </h2>

              <p className="text-gray-300 mt-3 leading-7 text-sm">
                Important announcements delivered instantly.
              </p>

            </motion.div>

          </div>

        </div>

        <Footer />

      </div>
    </div>
  );
};

export default Home;