import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Gesture Controlled Interface for Application Management',
      description: ' Built for touchless interaction, this gesture controlled interface lets users manage music, drums, and email using hand movements. It offers an intuitive and futuristic way to control digital tasks.',
      image: 'https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg',
      technologies: ['Tensorflow', 'Opencv',  'Pygame', 'Python'],
      features: ['Touch less UI', 'Entertainment', 'Real-time Hand Detection', 'Futuristic'],
      liveUrl: 'https://github.com/drDevesh',
      githubUrl: 'https://github.com/drDevesh/beV.ai',
      status: 'Completed',
      starred: true
    },
    {
      title: 'RAG APPLICATION App',
      description: ' This RAG assistant, built with Python, LangChain, and AWS, helps businesses extract insights from documents. Streamlit integration ensures a smooth, interactive AI experience',
      image: 'https://images.pexels.com/photos/7947849/pexels-photo-7947849.jpeg',
      technologies: ['Python', 'AWS','Aws Amplify', 'Docker'],
      features: ['Easy to upload', 'Real-time Analysis ', 'Advanced Filtering','Natural Language Processing'],
      liveUrl: 'https://github.com/drDevesh',
      githubUrl: 'https://github.com/drDevesh/RAG-APPLICATON',
      status: 'Completed',
      starred: false
    },
{
      title: 'Dictionary App',
      description: 'A beautiful Dictionary Aplication For finding Meaning of Various Words Among Different Languages and Also to Find and learn about Rare Books around World .',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      technologies: ['Vue.js', 'D3.js', 'Express', 'Weather API', 'Chart.js'],
      features: ['Interactive Maps', 'Weather Forecasts', 'Location Services', 'Data Visualization'],
      liveUrl: 'https://github.com/drDevesh',
      githubUrl: 'https://github.com/drDevesh/cloud-dictionary-app',
      status: 'Completed',
      starred: false
    },
    {
      title: 'Automated Customer E-bill',
      description: 'This project Helps To Automate E-biils To Customers Via E-Mail.The registered Customers will Get There Purchase Bill once the Purchase Details is uploaded To AWS Buckets ',
      image: 'https://images.pexels.com/photos/8475156/pexels-photo-8475156.jpeg',
      technologies: ['AWS', 'AWS Lambda', 'AWS SES','AWS S3'],
      features: ['Cloud Integrated', 'Fast & Secure'],
      liveUrl: 'https://github.com/drDevesh',
      githubUrl: 'https://github.com/drDevesh/Customer-E-Bill',
      status: 'Completed',
      starred: false
    },
    
    {
      title: 'Train Reservation System',
      description: ' This Project made with Java Swing,Effortlessly check train availability and book tickets through this user-friendly Java Swing application',
      image: 'https://images.pexels.com/photos/2031758/pexels-photo-2031758.jpeg',
      technologies: ['Java', 'Java DataBase', 'Java Swing'],
      features: ['User Friendly', 'Classic UI'],
      liveUrl: 'https://github.com/drDevesh',
      githubUrl: 'https://github.com/drDevesh',
      status: 'Completed',
      starred: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  {project.starred && (
                    <span className="p-1 bg-yellow-100 rounded-full">
                      <Star size={12} className="text-yellow-600 fill-current" />
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/drDevesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;