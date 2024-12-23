import { Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import Dashboard from "/src/pages/Dashboard/Dashboard";
import Header from "../src/components/Header.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Profile from "/src/pages/Dashboard/Profile";
import Settings from "/src/pages/Dashboard/Settings";
import "./routing.css";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <article>
        {/* Routing 정보 객체 */}
        <Routes>
          {/* 개별 Router 객체 */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Nested Routing */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile/:userid" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </article>
    </div>
  );
}

export default App;
