import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const link = "px-3 py-2 rounded-lg hover:bg-gray-100";
  const active = ({ isActive }) => isActive ? link + " font-semibold" : link;

  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-lg">CarlitosCodes</Link>
        <div className="flex gap-2">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/blog" className={active}>Blog</NavLink>
          <NavLink to="/resume" className={active}>Resume</NavLink>
          <NavLink to="/links" className={active}>Links</NavLink>
        </div>
      </nav>
    </header>
  );
}
