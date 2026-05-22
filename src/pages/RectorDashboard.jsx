import React from "react";

const RectorDashboard = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-white p-8">

      <h1 className="text-5xl font-bold text-cyan-400">
        Rector Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-pink-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Complaints
          </h2>

          <p className="text-5xl mt-4">
            0
          </p>
        </div>

        <div className="bg-green-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Leave Requests
          </h2>

          <p className="text-5xl mt-4">
            0
          </p>
        </div>

        <div className="bg-cyan-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Notices
          </h2>

          <p className="text-5xl mt-4">
            0
          </p>
        </div>

      </div>

    </div>
  );
};

export default RectorDashboard;