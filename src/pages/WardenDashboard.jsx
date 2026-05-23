import React, { useEffect, useState } from "react";
import axios from "axios";

const WardenDashboard = () => {

  const [complaints, setComplaints] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [notices, setNotices] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    try {

      const complaintRes = await axios.get("http://localhost:5000/api/complaints");

      const leaveRes = await axios.get("http://localhost:5000/api/leave");

      const noticeRes = await axios.get("http://localhost:5000/api/notices");

      const attendanceRes = await axios.get("http://localhost:5000/api/attendance");

      setComplaints(complaintRes.data);
      setLeaves(leaveRes.data);
      setNotices(noticeRes.data);
      setAttendance(attendanceRes.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-[#07111f] text-white p-8">

      <h1 className="text-5xl font-bold text-cyan-400">
        Warden Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-10">

        <div className="bg-pink-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Complaints
          </h2>

          <p className="text-5xl mt-4">
            {complaints.length}
          </p>
        </div>

        <div className="bg-green-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Leave Requests
          </h2>

          <p className="text-5xl mt-4">
            {leaves.length}
          </p>
        </div>

        <div className="bg-cyan-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Notices
          </h2>

          <p className="text-5xl mt-4">
            {notices.length}
          </p>
        </div>

        <div className="bg-yellow-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Attendance
          </h2>

          <p className="text-5xl mt-4">
            {attendance.length}
          </p>
        </div>

      </div>

    </div>

  );

};

export default WardenDashboard;