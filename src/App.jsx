import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import VerifyAccount from "./pages/auth/VerifyAccount";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CallbackPage from './pages/CallbackPage';
import Home from './pages/Home'
import AboutPage from './pages/AboutPage';
import "./index.css"
import Register from "./pages/auth/Register"
import DashboardAdmin from "./pages/admin";
function App() {
  return (
    <Router>
      <div className="relative h-full w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/verification" element={<VerifyAccount />} />
        <Route path="/reddit/callback" element={<CallbackPage />} />
        <Route path="/admin" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
