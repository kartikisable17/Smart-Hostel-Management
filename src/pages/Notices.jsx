import React from "react";

const Notices = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-white p-8">

      <h1 className="text-4xl font-bold text-green-400">
        Hostel Notices
      </h1>

      <p className="text-gray-400 mt-2">
        Latest announcements from hostel.
      </p>

      <div className="mt-10 space-y-5">

        <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold text-cyan-400">
            WiFi Maintenance
          </h2>

          <p className="text-gray-300 mt-3">
            Hostel WiFi will be unavailable from 2 PM to 5 PM.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold text-pink-400">
            Hostel Meeting
          </h2>

          <p className="text-gray-300 mt-3">
            Student meeting on Friday at 6 PM in hall.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Notices;