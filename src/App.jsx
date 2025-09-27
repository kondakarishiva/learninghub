import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Quiz from "./pages/Quiz";
import Profile from "./pages/Profile";
import Certificates from "./pages/Certificates";

// Temporary fallback components for Navbar & Footer
const Navbar = () => (
  <nav style={{ padding: "10px", background: "#f5f5f5" }}>
    <h2>Learning Hub</h2>
  </nav>
);

const Footer = () => (
  <footer style={{ padding: "10px", background: "#f5f5f5", marginTop: "20px" }}>
    <p>© 2025 Learning Hub. All rights reserved.</p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
