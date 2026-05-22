import React, { useEffect, useState } from "react";
import axios from "axios";

const Notices = () => {

  const [notices, setNotices] = useState([]);

  useEffect(() => {

    fetchNotices();

  }, []);

  const fetchNotices = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/notices"
      );

      setNotices(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="min-h-screen bg-[#07111f] text-white p-8">

      <h1 className="text-4xl font-bold text-green-400">
        Hostel Notices
      </h1>

      <p className="text-gray-400 mt-2">
        Latest announcements from hostel.
      </p>

      <div className="mt-10 space-y-5">

        {notices.map((notice) => (

          <div
            key={notice._id}
            className="bg-white/10 p-6 rounded-3xl border border-white/10"
          >

            <h2 className="text-2xl font-bold text-cyan-400">
              {notice.title}
            </h2>

            <p className="text-gray-300 mt-3">
              {notice.description}
            </p>

          </div>

        ))}

      </div>
    </div>
  );
};

export default Notices;