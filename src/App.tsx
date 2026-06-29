import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
import Insights from "./pages/Insights";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CursorGlow from "./components/ui/CursorGlow";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
    <CursorGlow />
    <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;