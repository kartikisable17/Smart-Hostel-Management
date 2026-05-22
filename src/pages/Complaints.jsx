import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Complaints = () => {

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
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
        "http://localhost:5000/api/complaints/add",
        formData
      );

      console.log(res.data);

      alert("Complaint Submitted Successfully");

      setFormData({
        title: "",
        type: "",
        description: "",
      });

    } catch (error) {

      console.log(error);

      alert("Error Submitting Complaint");

    }

    setLoading(false);

  };

  return (
    <div className="min-h-screen bg-[#07111f] text-white flex">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-white/10 backdrop-blur-xl border-r border-white/10 p-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          VSS Hostel
        </h1>

        <div className="mt-10 flex flex-col gap-5">

          <Link to="/dashboard">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-cyan-500 duration-300">
              Dashboard
            </button>
          </Link>

          <Link to="/leave">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-pink-500 duration-300">
              Leave Application
            </button>
          </Link>

          <Link to="/complaints">
            <button className="w-full text-left p-4 rounded-xl bg-pink-500/20 hover:bg-pink-500 duration-300">
              Complaints
            </button>
          </Link>

          <Link to="/attendance">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-green-500 duration-300">
              Attendance
            </button>
          </Link>

          <Link to="/notices">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-yellow-500 duration-300">
              Notices
            </button>
          </Link>

          <Link to="/">
            <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-red-500 duration-300 mt-10">
              Logout
            </button>
          </Link>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">

        {/* TOP */}
        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Complaints Portal
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Raise hostel complaints quickly and track issue updates.
            </p>
          </div>

        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-2 gap-8 mt-10">

          {/* FORM */}
          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold text-pink-400 mb-6">
              Submit Complaint
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* TITLE */}
              <div>

                <label className="text-gray-300">
                  Complaint Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter complaint title"
                  required
                  className="w-full mt-2 p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-pink-400 duration-300"
                />

              </div>

              {/* TYPE */}
              <div>

                <label className="text-gray-300">
                  Complaint Type
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-pink-400 duration-300"
                >

                  <option value="">
                    Select Type
                  </option>

                  <option
                    value="Water Issue"
                    className="bg-[#07111f]"
                  >
                    Water Issue
                  </option>

                  <option
                    value="Electricity"
                    className="bg-[#07111f]"
                  >
                    Electricity
                  </option>

                  <option
                    value="Cleaning"
                    className="bg-[#07111f]"
                  >
                    Cleaning
                  </option>

                  <option
                    value="Internet"
                    className="bg-[#07111f]"
                  >
                    Internet
                  </option>

                </select>

              </div>

              {/* DESCRIPTION */}
              <div>

                <label className="text-gray-300">
                  Description
                </label>

                <textarea
                  rows="6"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your issue"
                  required
                  className="w-full mt-2 p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-pink-400 duration-300"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-400 font-bold text-lg hover:scale-105 duration-300 shadow-lg shadow-pink-500/30"
              >

                {
                  loading
                  ? "Submitting..."
                  : "Submit Complaint"
                }

              </button>

            </form>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="flex flex-col gap-6">

            <div className="bg-pink-500/10 border border-pink-400/20 rounded-3xl p-8 hover:scale-105 duration-300">

              <h2 className="text-3xl font-bold text-pink-400">
                Active Complaints
              </h2>

              <p className="text-6xl font-bold mt-6">
                04
              </p>

              <p className="text-gray-400 mt-2">
                Complaints currently under review
              </p>

            </div>

            <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-3xl p-8 hover:scale-105 duration-300">

              <h2 className="text-3xl font-bold text-cyan-400">
                Resolved Issues
              </h2>

              <p className="text-6xl font-bold mt-6">
                18
              </p>

              <p className="text-gray-400 mt-2">
                Successfully resolved complaints
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Complaints;