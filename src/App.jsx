import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing_screen from "./Pages/Landing_screen.jsx";
import Signup from "./Pages/Signup.jsx";
function App() {
  return (
    <div className="min-h-screen  bg-white sm:flex sm:items-center sm:justify-center ">
      <Routes>
        <Route path="/" element={<Landing_screen />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
