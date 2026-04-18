import React, { useState } from "react";
import { MenuIcon, Moon, Sun, X } from "lucide-react";

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="nav-shell fixed w-full z-50 py-4 px-6 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl font-bold">
            Ayush Kuamr
            <span className="text-purple"> Mishra</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link relative transition duration-300 hover:text-purple group"
            >
              <span>{link.label}</span>
              <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {showMenu ? (
            <X
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <MenuIcon
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="mobile-menu md:hidden mt-4 rounded-3xl p-6 flex flex-col space-y-5 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              onClick={() => setShowMenu(!showMenu)}
              href={link.href}
              className="nav-link relative transition duration-300 hover:text-purple group"
            >
              <span>{link.label}</span>
              <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
