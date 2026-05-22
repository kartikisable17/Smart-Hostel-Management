import React from "react";

const Attendance = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-white p-8">

      <h1 className="text-4xl font-bold text-yellow-400">
        Attendance
      </h1>

      <p className="text-gray-400 mt-2">
        Your hostel attendance details.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-green-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Present Days
          </h2>

          <p className="text-5xl mt-4 text-green-400">
            95
          </p>
        </div>

        <div className="bg-red-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Absent Days
          </h2>

          <p className="text-5xl mt-4 text-red-400">
            5
          </p>
        </div>

        <div className="bg-cyan-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Percentage
          </h2>

          <p className="text-5xl mt-4 text-cyan-400">
            95%
          </p>
        </div>

      </div>
    </div>
  );
};

export default Attendance;