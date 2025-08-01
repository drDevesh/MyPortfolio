import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'InTrainz EduTech',
      location: 'Bengaluru, India',
      period: '2 months ',
      type: 'Full-time',
      description: 'I have gained substantial experience in developing scalable machine learning solutions, with a particular focus on exploring and implementing large language models (LLMs). A significant achievement during this process was the successful deployment of a fraud detection model that enhanced system accuracy by 40%',
      technologies: ['AWS', 'Python', 'PostgreSQL','Docker'],
      achievements: [
        'Deployed LLM-powered fraud detection model with 40% accuracy improvement',
        'Gained hands-on experience in ML deployment and model optimization',
        'Explored LLM architectures and fine-tuning techniques'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'JIVOJAS PVt LTD',
      location: 'Bengaluru , India',
      period: 'Summer 2024',
      type: 'Internship',
      description: 'Developed responsive web applications using React  Collaborated with design team to implement pixel-perfect UI components.',
      technologies: ['React', 'CSS', 'Html', 'Figma'],
      achievements: [
        'Built 15+ reusable components',
        'Improved accessibility score to 98%',
        'Received outstanding intern award'
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey and key milestones in my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'Internship' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;