import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-white flex">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-white/10 backdrop-blur-xl border-r border-white/10 p-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          VSS Hostel
        </h1>

        <div className="mt-10 flex flex-col gap-5">

          {/* Dashboard */}
          <Link to="/dashboard">
            <button className="w-full text-left p-4 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 duration-300">
              Dashboard
            </button>
          </Link>

          {/* Leave */}
          <Link to="/leave">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
              Leave Application
            </button>
          </Link>

          {/* Complaints */}
          <Link to="/complaints">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
              Complaints
            </button>
          </Link>

          {/* Attendance */}
          <Link to="/attendance">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
              Attendance
            </button>
          </Link>

          {/* Notices */}
          <Link to="/notices">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
              Notices
            </button>
          </Link>

          {/* Logout */}
          <Link to="/">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-red-500 duration-300 mt-10">
              Logout
            </button>
          </Link>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        {/* TOP */}
        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold">
              Student Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Welcome back, Student 👋
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-6 mt-10">

          {/* Leave Status */}
          <div className="bg-cyan-500/20 p-6 rounded-3xl border border-cyan-400/20 hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold">
              Leave Status
            </h2>

            <p className="mt-4 text-gray-300">
              No Leave Applied
            </p>
          </div>

          {/* Complaints */}
          <div className="bg-pink-500/20 p-6 rounded-3xl border border-pink-400/20 hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold">
              Complaints
            </h2>

            <p className="mt-4 text-gray-300">
              0 Active Complaints
            </p>
          </div>

          {/* Attendance */}
          <div className="bg-green-500/20 p-6 rounded-3xl border border-green-400/20 hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold">
              Attendance
            </h2>

            <p className="mt-4 text-gray-300">
              95% Attendance
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;