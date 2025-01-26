import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import GestureControl from "./components/GestureControl";
import ProfilePage from "./components/ProfilePage"; // Import ProfilePage
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<ProfilePage />} /> {/* Updated route */}
      <Route path="/gesture-control" element={<GestureControl />} />
    </Routes>
  </Router>
);

export default App;
