import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Modern Calculator',
        description: 'A basic calculator application for performing standard arithmetic operations',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/Maheshwaran03/calculator  ',
        liveLink: 'https://newcalculator-new.vercel.app/',
      },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubLink: 'https://github.com/yourusername/task-manager',
      liveLink: 'https://task-manager-demo.com',
      image: '/task-manager.jpg'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information and forecasts with interactive maps and data visualization.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      githubLink: 'https://github.com/yourusername/weather-dashboard',
      liveLink: 'https://weather-dashboard-demo.com',
      image: '/weather.jpg'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 mb-4">
                  {project.description}
                </p>
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
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="mr-2" size={18} />
                    <span className="text-base">GitHub</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" size={18} />
                    <span className="text-base">Live Demo</span>
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