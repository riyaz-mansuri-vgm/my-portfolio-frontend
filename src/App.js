// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Projects from "./pages/products/Projects";
import UserList from "./pages/users/UserList";
import UserDetails from "./pages/users/UserDetails";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <Router>

      <Navbar />
            <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
