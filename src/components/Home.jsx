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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.img
            src="/Photo.jpg"
            alt="Maheshwaran"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 rounded-full mx-auto mb-8 object-cover border-4 border-primary-500 shadow-lg"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-400"
          >
            Hi, I'm <span className="text-primary-400">Maheshwaran S</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-300"
          >
            Frontend Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed"
          >
            I create beautiful, responsive, and user-friendly web applications
            using modern technologies and best practices.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8"
          >
            <a
              href="https://github.com/Maheshwaran03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/maheshwaran-s-b6b514225"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <button
              onClick={handleContactClick}
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-xl shadow-lg hover:shadow-primary-500/50"
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