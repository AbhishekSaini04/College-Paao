import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "programs" },
    { name: "FAQ", path: "faq" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="" className="flex items-center gap-2" onClick={closeMenu}>
          <img
        
            style={{ height: "50px" }}
            src="/res/imgs/collegePaaoLogo.png"
            alt="College Paao"
          />
          <span
            className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-gray-900" : "text-gray-900"
            }`}
          >
            College Paao
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={``}
                  onClick={() => {
                    document
                      .getElementById(`${link.path}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm font-medium hover:text-primary-500 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary-500"
                      : isScrolled
                      ? "text-gray-700"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium hover:text-primary-500 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium 
                hover:bg-primary-600 transition-colors"
            >
              Sign up
            </Link>
          </div> */}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={""}
                     onClick={() => {
                    document
                      .getElementById(`${link.path}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                    
                    className={`block text-base font-medium hover:text-primary-500 
                      ${
                        location.pathname === link.path
                          ? "text-primary-500"
                          : "text-gray-700"
                      }`}
                    
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-100">
                <Link
                  to="/login"
                  className="block text-base font-medium text-gray-700 hover:text-primary-500"
                  onClick={closeMenu}
                >
                  Log in
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/signup"
                  className="block w-full bg-primary-500 text-white px-4 py-2 rounded-lg 
                    text-center font-medium hover:bg-primary-600"
                  onClick={closeMenu}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
