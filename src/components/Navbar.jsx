import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/10 backdrop-blur-md z-50">
      <div className="max-w-9xl mx-auto px- sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-4">
        <motion.img
          src="/Photo.jpg"
          alt="Maheshwaran"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-full object-cover"
        />
        <Link to="/" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-wide">
          Maheshwaran S
        </Link>
        </div>

            
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          > 
         
          
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className="text-white hover:text-blue-400 px-4 py-3 rounded-md text-xl font-medium tracking-wide transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className="text-white hover:text-blue-400 block px-5 py-3 rounded-md text-lg font-medium tracking-wide transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 