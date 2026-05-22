import React from "react";

const LeaveApplication = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-white flex items-center justify-center p-10">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Leave Application
        </h1>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter full name"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Room Number
            </label>

            <input
              type="text"
              placeholder="Enter room number"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-gray-300">
                From Date
              </label>

              <input
                type="date"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                To Date
              </label>

              <input
                type="date"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
              />
            </div>

          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Reason
            </label>

            <textarea
              rows="5"
              placeholder="Enter reason..."
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-pink-500 to-fuchsia-500 font-bold text-lg hover:scale-105 duration-300"
          >
            Submit Leave Request
          </button>

        </form>

      </div>

    </div>
  );
};

export default LeaveApplication;