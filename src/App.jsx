import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import LeaveApplication from "./pages/LeaveApplication";
import Complaints from "./pages/Complaints";
import Attendance from "./pages/Attendance";
import Notices from "./pages/Notices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/leave" element={<LeaveApplication />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;