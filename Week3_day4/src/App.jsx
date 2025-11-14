import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DigitalWatch from "./pages/DigitalWatch";
import CounterPage from "./pages/CounterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
        <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard setIsAuthenticated={setIsAuthenticated}/></ProtectedRoute>}>
          <Route path="counter" element={<CounterPage />} />
          <Route path="digital-watch" element={<DigitalWatch />} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
