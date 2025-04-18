import { motion } from 'framer-motion';

const Internship = () => {
  const internships = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      duration: "June 2023 - August 2023",
      description: [
        "Developed responsive web applications using React.js and Tailwind CSS",
        "Implemented RESTful API integrations and state management",
        "Collaborated with UX designers to implement modern UI components",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Digital Innovations",
      duration: "January 2023 - March 2023",
      description: [
        "Created and maintained company websites using modern web technologies",
        "Optimized website performance and implemented SEO best practices",
        "Worked with cross-functional teams to deliver client projects",
        "Developed custom WordPress themes and plugins"
      ]
    }
  ];

  return (
    <section id="internships" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Internships</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-blue-400">
                {internship.title}
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                {internship.company} | {internship.duration}
              </p>
              <ul className="space-y-2">
                {internship.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-base sm:text-lg text-gray-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;