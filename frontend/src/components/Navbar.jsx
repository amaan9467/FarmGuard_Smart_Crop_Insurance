import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import logo from '../assets/logo.jpg';
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contacts", path: "/contacts" },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (location.pathname === "/") {
        setScrolled(window.scrollY > 60);
      } else {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          location.pathname === "/" && !scrolled
            ? "bg-transparent"
            : "bg-green-900/95 backdrop-blur-md shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          
          {/* LOGO */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-yellow-300 hover:text-white transition"
          >
            <img src={logo} alt="Logo" className="w-15 h-15 rounded-full object-cover inline-block mr-2"/>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition ${
                  location.pathname === link.path
                    ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* LOGIN & REGISTER / DASHBOARD BUTTONS */}
            <div className="ml-4 flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-yellow-300 font-semibold hover:text-white transition">
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow transition text-sm font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full shadow transition">
                  <button
                    onClick={() => setLoginOpen(true)}
                    className="text-green-900 text-sm font-semibold hover:text-white"
                  >
                    Login
                  </button>
                  <span className="text-green-900/50">|</span>
                  <button
                    onClick={() => setSignupOpen(true)}
                    className="text-green-900 text-sm font-semibold hover:text-white"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE MENU ICON */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-yellow-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="md:hidden bg-green-900 text-center py-4 space-y-4 shadow-lg transition-all">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium hover:text-yellow-300 ${
                  location.pathname === link.path ? "text-yellow-300" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE LOGIN/REGISTER / DASHBOARD */}
            <div className="flex justify-center gap-4 pt-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setLoginOpen(true);
                      setIsOpen(false);
                    }}
                    className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setSignupOpen(true);
                      setIsOpen(false);
                    }}
                    className="bg-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-800"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* LOGIN MODAL */}
      <Login
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        switchToSignup={() => {
          setLoginOpen(false);
          setSignupOpen(true);
        }}
      />

      {/* SIGNUP MODAL */}
      <Signup
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        switchToLogin={() => {
          setSignupOpen(false);
          setLoginOpen(true);
        }}
      />
    </>
  );
};

export default Navbar;
