import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 text-white">
      <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Mursal Abbas</h1>

      {/* ✅ Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
        {links.map((item) => (
          <li key={item}>
            <Link
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="hover:text-blue-400 transition"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* ☰ Hamburger for Mobile */}
      <div
        className="md:hidden flex flex-col justify-center items-end cursor-pointer z-30 gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`block w-6 h-0.5 bg-white transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </div>

      {/* 📱 Mobile Menu */}
      <ul
        className={`md:hidden fixed top-20 right-4 w-44 bg-black/60 backdrop-blur-md rounded-xl p-4 flex flex-col gap-3 text-white text-base font-medium transition-all duration-300 z-40
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {links.map((item) => (
          <li key={item}>
            <Link
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="pl-2 hover:text-blue-400 transition"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
