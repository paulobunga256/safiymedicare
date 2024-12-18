import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "../types";
import safiyLogo from "../assets/safiy_logo.png"; // Import the new logo

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center"> 
              <img src={safiyLogo} alt="Safiy Medical Care" className="h-20 w-auto" /> {/* Use the new logo */}
              <span className="text-brand-green-600 text-xl font-bold ml-2">Safiy Medicare</span> {/* Add text to the right of the logo */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-brand-green-600 border-b-2 border-brand-green-600"
                    : "text-gray-600 hover:text-brand-green-600"
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className="bg-brand-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-brand-green-700 transition-colors duration-200"
            >
              <Phone size={18} />
              <span>Emergency</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-green-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 ${
                    location.pathname === item.path
                      ? "text-brand-green-600 font-medium"
                      : "text-gray-600 hover:text-brand-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+1234567890"
                className="block bg-brand-green-600 text-white px-4 py-2 rounded-full text-center hover:bg-brand-green-700"
              >
                Emergency Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
