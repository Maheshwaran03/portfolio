import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const skills = [
    'c++',
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Git',
    'Responsive Design',
    'UI/UX Design',
  ];

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-40 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-semibold mb-6">Who am I?</h3>
            <p className="text-2xl text-gray-300 mb-8">
              I'm a passionate Frontend Developer with a strong focus on creating
              exceptional user experiences. With a background in web development,
              I specialize in building modern, responsive, and performant web
              applications using React.js and other cutting-edge technologies.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              My journey in web development began with a curiosity for creating
              beautiful and functional websites. Over time, I've honed my skills
              in frontend development, focusing on clean code, accessibility, and
              performance optimization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-500/20 text-blue-400 px-5 py-3 rounded-full text-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={handleContactClick}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-10 rounded-md transition-colors text-xl"
          >
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 