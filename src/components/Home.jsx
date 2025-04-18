import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-6">
          <motion.img
            src="/Photo.jpg"
            alt="Maheshwaran"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full mx-auto mb-6 object-cover border-4 border-primary-500 shadow-lg"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-400"
          >
            Hi, I'm <span className="text-primary-400">Maheshwaran S</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-300"
          >
            Frontend Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed"
          >
            I create beautiful, responsive, and user-friendly web applications
            using modern technologies and best practices.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Maheshwaran03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/maheshwaran-s-b6b514225"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <button
              onClick={handleContactClick}
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-primary-500/50"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 