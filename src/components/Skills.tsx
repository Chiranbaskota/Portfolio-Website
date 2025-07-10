import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Framework", level: 90 },
        { name: "Spring Boot", level: 90 },
        { name: "Hibernate/JPA", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Oracle Database", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Maven/Gradle", level: 85 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "JUnit Testing", level: 85 },
        { name: "IntelliJ IDEA", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-500 group-hover:to-purple-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;