import { Link, NavLink } from "react-router-dom";
// import { About, NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function Navbar({ toggleDarkMode, isDarkMode }) {
  const link = "px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700";
  const active = ({ isActive }) => isActive ? link + " font-semibold" : link;

  return (
    <header className="border-b bg-white/70 backdrop-blur dark:bg-gray-800/70 dark:border-gray-700">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* <Link to="/" className="font-bold text-lg">CarlitosCodes</Link> */}
        <SocialLinks />
        <div className="flex gap-2 items-center">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/blog" className={active}>Blog</NavLink>
          <NavLink to="/resume" className={active}>Resume</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          {/* <SocialLinks /> */}
          <button onClick={toggleDarkMode} className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  );
}

