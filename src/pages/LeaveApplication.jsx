import React, { useState } from "react";
import axios from "axios";

const LeaveApplication = () => {

  const [formData, setFormData] = useState({

    fullName: "",
    roomNo: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",

  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await axios.post(
        "http://localhost:5000/api/leave/add",
        formData
      );

      console.log(res.data);

      alert("Leave Application Submitted Successfully");

      setFormData({
        fullName: "",
        roomNo: "",
        leaveType: "",
        fromDate: "",
        toDate: "",
        reason: "",
      });

    } catch (error) {

      console.log(error);

      alert("Error Submitting Leave");

    }

    setLoading(false);

  };

  return (

    <div className="min-h-screen bg-[#07111f] text-white flex items-center justify-center p-10">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Leave Application
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* FULL NAME */}
          <div>

            <label className="block mb-2 text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 duration-300"
            />

          </div>

          {/* ROOM NUMBER */}
          <div>

            <label className="block mb-2 text-gray-300">
              Room Number
            </label>

            <input
              type="text"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              placeholder="Enter room number"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-pink-400 duration-300"
            />

          </div>

          {/* LEAVE TYPE */}
          <div>

            <label className="block mb-2 text-gray-300">
              Leave Type
            </label>

            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 duration-300"
            >

              <option value="">
                Select Leave Type
              </option>

              <option
                value="Home Visit"
                className="bg-[#07111f]"
              >
                Home Visit
              </option>

              <option
                value="Medical Leave"
                className="bg-[#07111f]"
              >
                Medical Leave
              </option>

              <option
                value="Emergency Leave"
                className="bg-[#07111f]"
              >
                Emergency Leave
              </option>

            </select>

          </div>

          {/* DATES */}
          <div className="grid grid-cols-2 gap-5">

            <div>

              <label className="block mb-2 text-gray-300">
                From Date
              </label>

              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 duration-300"
              />

            </div>

            <div>

              <label className="block mb-2 text-gray-300">
                To Date
              </label>

              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-pink-400 duration-300"
              />

            </div>

          </div>

          {/* REASON */}
          <div>

            <label className="block mb-2 text-gray-300">
              Reason
            </label>

            <textarea
              rows="5"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Enter reason..."
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 duration-300"
            ></textarea>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-pink-500 to-fuchsia-500 font-bold text-lg hover:scale-105 duration-300"
          >

            {
              loading
              ? "Submitting..."
              : "Submit Leave Request"
            }

          </button>

        </form>

      </div>

    </div>

  );
};

export default LeaveApplication;