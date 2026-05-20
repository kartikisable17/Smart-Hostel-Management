import React from "react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-white flex">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-white/10 backdrop-blur-xl border-r border-white/10 p-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          VSS Hostel
        </h1>

        <div className="mt-10 flex flex-col gap-5">

          <button className="text-left p-4 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 duration-300">
            Dashboard
          </button>

          <button className="text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
            Leave Application
          </button>

          <button className="text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
            Complaints
          </button>

          <button className="text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
            Attendance
          </button>

          <button className="text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
            Notices
          </button>

          <button className="text-left p-4 rounded-xl bg-white/5 hover:bg-red-500 duration-300 mt-10">
            Logout
          </button>

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

          <div className="bg-cyan-500/20 p-6 rounded-3xl">
            <h2 className="text-2xl font-bold">
              Leave Status
            </h2>

            <p className="mt-4 text-gray-300">
              No Leave Applied
            </p>
          </div>

          <div className="bg-pink-500/20 p-6 rounded-3xl">
            <h2 className="text-2xl font-bold">
              Complaints
            </h2>

            <p className="mt-4 text-gray-300">
              0 Active Complaints
            </p>
          </div>

          <div className="bg-green-500/20 p-6 rounded-3xl">
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