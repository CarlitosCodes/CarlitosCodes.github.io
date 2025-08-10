import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Placeholder from "./components/Placeholder.jsx";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Resume from "./pages/Resume";
import Links from "./pages/Links";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}