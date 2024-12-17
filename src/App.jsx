import "./App.css";
import Dashboard from "./components/Dashboard.jsx";
import DataChart from "./components/DataChart.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personel from "./components/Personel.jsx";
import Submit from "./components/Submit.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/datachart" element={<DataChart />}></Route>
          <Route path="/dashboard/personel" element={<Personel />}></Route>
          <Route path="/dashboard/submit" element={<Submit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
