import React from 'react';
import { Code, Zap, Users, Database } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following modern backend best practices."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing backend systems for speed, efficiency, and smooth API performance."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Designing and managing relational databases like MySQL and PostgreSQL for reliable data operations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver high-quality backend solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Aspiring Java Backend Developer with hands-on experience in Spring Boot, REST APIs, and database-driven application development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a dedicated Java developer with practical experience in backend application development. 
              My expertise spans across the Spring Framework, database design, and RESTful API development, 
              with a strong focus on building secure, scalable, and maintainable backend systems. 
              I have hands-on experience developing real-world projects like e-commerce platforms 
              with robust backend architectures.

            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in Java ecosystem technologies including Spring Boot, Spring Security, and MySQL.
               My recent work includes developing a full-featured Online Book Store with functionalities 
               such as user authentication, book catalog browsing, cart management, and order processing. 
               The project also integrates JWT-based security and follows modular, RESTful API design, 
               showcasing my ability to create production-ready backend systems that power dynamic 
               and user-friendly web applications.
          
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Java', 'Spring Boot', 'Spring Security','JWT', 'SQL', 'REST APIs', 'JPA'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;