import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-red-700 font-semibold"
      : "text-gray-700 hover:text-red-700 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-red-700 hover:text-red-800"
          onClick={() => setMenuOpen(false)}
        >
          Discover Yemen
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/destinations" className={linkStyle}>
            Destinations
          </NavLink>

          <NavLink to="/culture" className={linkStyle}>
            Culture
          </NavLink>

          <NavLink to="/food" className={linkStyle}>
            Food
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 md:hidden"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col px-6 py-4">
            <NavLink
              to="/"
              end
              className={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/destinations"
              className="mt-3 text-gray-700 hover:text-red-700"
              onClick={() => setMenuOpen(false)}
            >
              Destinations
            </NavLink>

            <NavLink
              to="/culture"
              className="mt-3 text-gray-700 hover:text-red-700"
              onClick={() => setMenuOpen(false)}
            >
              Culture
            </NavLink>

            <NavLink
              to="/food"
              className="mt-3 text-gray-700 hover:text-red-700"
              onClick={() => setMenuOpen(false)}
            >
              Food
            </NavLink>

            <NavLink
              to="/contact"
              className="mt-3 text-gray-700 hover:text-red-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;