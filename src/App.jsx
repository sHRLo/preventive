import "./App.css";
import { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Submit from "./components/OperatorSubmit.jsx";
import Start from "./components/Start.jsx";
import OperatorLogin from "./components/OperatorLogin.jsx";
import OperatorSubmit from "./components/OperatorSubmit.jsx";
import TechnicianSubmit from "./components/TechnicianSubmit.jsx";
import TechnicianLogin from "./components/TechnicianLogin.jsx";
import TechnicianDashboard from "./components/TechnicianDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/operator_login" element={<OperatorLogin />}></Route>
        <Route path="/technician_login" element={<TechnicianLogin />}></Route>
        <Route path="/operator_submit" element={<OperatorSubmit />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/submit" element={<Submit />}></Route>
        </Route>
        <Route path="/technician_dashboard" element={<TechnicianDashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route
            path="/technician_dashboard/technician_submit"
            element={<Submit />}
          ></Route>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
