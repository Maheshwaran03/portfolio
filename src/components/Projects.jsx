import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Modern Calculator',
      description: 'A basic calculator application for performing standard arithmetic operations',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Maheshwaran03/calculator  ',
      live: 'https://newcalculator-new.vercel.app/',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://your-portfolio.com',
    },
  ];

  return (
    <section className="py-40 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-xl text-gray-300- mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 