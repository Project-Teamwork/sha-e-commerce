import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<h1>Login</h1>} />
            <Route path="/auth/profile" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
