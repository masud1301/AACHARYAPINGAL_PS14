import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  // 🔥 COMMON DATA STORE (VERY IMPORTANT)
  const [issues, setIssues] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          IntelliIssue AI
        </h1>

        <p className="text-center text-gray-500 mb-4">
          AI-powered Issue Analysis Platform
        </p>

        <Navbar />

        <Routes>
          {/* Home gets both issues & setter */}
          <Route
            path="/"
            element={
              <Home
                issues={issues}
                setIssues={setIssues}
              />
            }
          />

          {/* Dashboard ONLY reads issues */}
          <Route
            path="/dashboard"
            element={<Dashboard issues={issues} />}
          />
        </Routes>

      </div>

    </div>
  );
}

export default App;
