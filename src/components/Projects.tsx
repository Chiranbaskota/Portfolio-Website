import React from 'react';
import { Github, Brain, Database, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Quiz Application",
      description:
        "Interactive quiz app built with Java Spring Boot backend. Features dynamic question handling, scoring, and secure APIs.",
      image:
        "https://i.postimg.cc/L8f0LQ64/quiz-app-image.png",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Spring Data JPA"],
      githubUrl: "https://github.com/Chiranbaskota/quizapp",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Online Book Store",
      description:
        "E-commerce platform with Spring Boot backend and Angular frontend. Includes authentication, browsing, cart, and checkout.",
      image:
        "https://i.postimg.cc/GhRj63cR/online-book-store.jpg",
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "JWT","Spring Security"],
      githubUrl: "https://github.com/Chiranbaskota/OnlineBookStoreBackend",
      icon: <Database className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Pneumonia Detection Using CNN",
      description:
        "Deep learning model using U-Net to detect and localize pneumonia in X-rays. Achieved high accuracy with ResNet50 and MobileNetV2.",
      image:
        "https://i.postimg.cc/65BdYH05/pneumonia-image.avif",
      technologies: ["Python", "TensorFlow", "Keras", "Google Colab", "U-Net", "ResNet50", "MobileNetV2"],
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Real-world applications I've built using Java, Spring Boot, and AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white">
                  {React.cloneElement(project.icon, { stroke: "currentColor" })}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button (if available) */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-100 dark:from-gray-700 dark:to-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm currently working on new Java based projects—stay tuned!
            </p>
            <a
              href="https://github.com/Chiranbaskota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;