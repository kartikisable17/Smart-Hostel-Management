// import React, { useState } from "react";
// import {
//   FaHome,
//   FaClipboardCheck,
//   FaCalendarAlt,
//   FaExclamationTriangle,
//   FaBell,
//   FaUserGraduate,
// } from "react-icons/fa";

// const StudentDashboard = () => {

//   // Active Page
//   const [activePage, setActivePage] = useState("dashboard");

//   // Complaint Form States
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // Complaint List
//   const [complaints, setComplaints] = useState([]);

//   // Submit Complaint
//   const handleComplaint = () => {

//     if (title === "" || description === "") {
//       alert("Please fill all fields");
//       return;
//     }

//     const newComplaint = {
//       title,
//       description,
//     };

//     setComplaints([...complaints, newComplaint]);

//     setTitle("");
//     setDescription("");

//     alert("Complaint Submitted");
//   };

//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white">

//       {/* Sidebar */}
//       <div className="w-64 bg-[#081028] p-6">

//         <h1 className="text-4xl font-bold text-cyan-400 mb-10">
//           HostelMS
//         </h1>

//         <div className="space-y-4">

//           {/* Dashboard */}
//           <button
//             onClick={() => setActivePage("dashboard")}
//             className="w-full bg-cyan-500 p-3 rounded-xl flex items-center gap-3 hover:scale-105 transition"
//           >
//             <FaHome />
//             Dashboard
//           </button>

//           {/* Attendance */}
//           <button
//             onClick={() => setActivePage("attendance")}
//             className="w-full bg-[#1e293b] p-3 rounded-xl flex items-center gap-3 hover:bg-cyan-500 transition"
//           >
//             <FaClipboardCheck />
//             Attendance
//           </button>

//           {/* Leave */}
//           <button
//             onClick={() => setActivePage("leave")}
//             className="w-full bg-[#1e293b] p-3 rounded-xl flex items-center gap-3 hover:bg-cyan-500 transition"
//           >
//             <FaCalendarAlt />
//             Apply Leave
//           </button>

//           {/* Complaints */}
//           <button
//             onClick={() => setActivePage("complaints")}
//             className="w-full bg-[#1e293b] p-3 rounded-xl flex items-center gap-3 hover:bg-cyan-500 transition"
//           >
//             <FaExclamationTriangle />
//             Complaints
//           </button>

//           {/* Notifications */}
//           <button
//             onClick={() => setActivePage("notifications")}
//             className="w-full bg-[#1e293b] p-3 rounded-xl flex items-center gap-3 hover:bg-cyan-500 transition"
//           >
//             <FaBell />
//             Notifications
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">

//         {/* DASHBOARD PAGE */}
//         {activePage === "dashboard" && (

//           <div>

//             <h1 className="text-5xl font-bold">
//               Welcome Back,
//               <span className="text-cyan-400">
//                 {" "}Kartiki 👋
//               </span>
//             </h1>

//             <p className="text-gray-400 mt-2">
//               Student Dashboard Overview
//             </p>

//             {/* Cards */}
//             <div className="grid grid-cols-4 gap-5 mt-10">

//               <div className="bg-cyan-500 p-6 rounded-3xl">
//                 <p>Attendance</p>
//                 <h1 className="text-5xl font-bold">
//                   92%
//                 </h1>
//               </div>

//               <div className="bg-pink-500 p-6 rounded-3xl">
//                 <p>Leave Status</p>
//                 <h1 className="text-4xl font-bold">
//                   Approved
//                 </h1>
//               </div>

//               <div className="bg-green-500 p-6 rounded-3xl">
//                 <p>Room Number</p>
//                 <h1 className="text-5xl font-bold">
//                   A-203
//                 </h1>
//               </div>

//               <div className="bg-orange-500 p-6 rounded-3xl">
//                 <p>Complaints</p>
//                 <h1 className="text-4xl font-bold">
//                   {complaints.length}
//                 </h1>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ATTENDANCE PAGE */}
//         {activePage === "attendance" && (

//           <div>

//             <h1 className="text-5xl font-bold mb-8">
//               Attendance
//             </h1>

//             <div className="bg-cyan-500 p-10 rounded-3xl w-80">

//               <h1 className="text-6xl font-bold">
//                 92%
//               </h1>

//               <p className="mt-3">
//                 Current Attendance
//               </p>
//             </div>
//           </div>
//         )}

//         {/* LEAVE PAGE */}
//         {activePage === "leave" && (

//           <div>

//             <h1 className="text-5xl font-bold mb-8">
//               Apply Leave
//             </h1>

//             <div className="bg-white/10 p-8 rounded-3xl">

//               <input
//                 type="text"
//                 placeholder="Leave Reason"
//                 className="w-full p-4 rounded-xl bg-[#0f172a] mb-5"
//               />

//               <input
//                 type="date"
//                 className="w-full p-4 rounded-xl bg-[#0f172a] mb-5"
//               />

//               <input
//                 type="date"
//                 className="w-full p-4 rounded-xl bg-[#0f172a] mb-5"
//               />

//               <button
//                 className="bg-cyan-500 px-6 py-3 rounded-xl"
//               >
//                 Submit Leave
//               </button>
//             </div>
//           </div>
//         )}

//         {/* COMPLAINT PAGE */}
//         {activePage === "complaints" && (

//           <div>

//             <h1 className="text-5xl font-bold mb-8">
//               Complaints
//             </h1>

//             {/* Form */}
//             <div className="bg-white/10 p-8 rounded-3xl mb-8">

//               <input
//                 type="text"
//                 placeholder="Complaint Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full p-4 rounded-xl bg-[#0f172a] mb-5"
//               />

//               <textarea
//                 rows="5"
//                 placeholder="Describe issue..."
//                 value={description}
//                 onChange={(e) =>
//                   setDescription(e.target.value)
//                 }
//                 className="w-full p-4 rounded-xl bg-[#0f172a] mb-5"
//               ></textarea>

//               <button
//                 onClick={handleComplaint}
//                 className="bg-red-500 px-6 py-3 rounded-xl"
//               >
//                 Submit Complaint
//               </button>
//             </div>

//             {/* Complaint List */}
//             <div className="space-y-5">

//               {complaints.map((item, index) => (

//                 <div
//                   key={index}
//                   className="bg-[#1e293b] p-5 rounded-2xl"
//                 >

//                   <h2 className="text-2xl font-bold">
//                     {item.title}
//                   </h2>

//                   <p className="mt-2 text-gray-300">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* NOTIFICATION PAGE */}
//         {activePage === "notifications" && (

//           <div>

//             <h1 className="text-5xl font-bold mb-8">
//               Notifications
//             </h1>

//             <div className="space-y-5">

//               <div className="bg-[#1e293b] p-5 rounded-2xl">
//                 Hostel meeting at 6 PM.
//               </div>

//               <div className="bg-[#1e293b] p-5 rounded-2xl">
//                 Mess menu updated.
//               </div>

//               <div className="bg-[#1e293b] p-5 rounded-2xl">
//                 Leave approved by warden.
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;