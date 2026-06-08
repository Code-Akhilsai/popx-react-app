import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing_screen from "./Pages/Landing_screen.jsx";
import Profile from "./Pages/Profile.jsx";
import Signup_screen from "./Pages/Signup_screen.jsx";
import Login_screen from "./Pages/Login_screen.jsx";
function App() {
  return (
    <div className="min-h-screen  bg-white sm:flex sm:items-center sm:justify-center ">
      <Routes>
        <Route path="/" element={<Landing_screen />} />
        <Route path="/signup" element={<Signup_screen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login_screen />} />
        <Route path="*" element={<h1 className="text-2xl">404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
