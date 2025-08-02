import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Aplications',
      school: 'CMR UNIVERSITY',
      location: 'Bengaluru, India',
      period: '2022 - 2025',
      gpa: '8.30',
      status: 'Graduated',
      description: 'Focused on software engineering, cloud , web development and Ai/ML. Completed senior capstone project on machine learning applications.',
      coursework: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Machine Learning',
        'Computer Networks'
      ],
      achievements: [
        'Won the College Hackathon',
        'Best Capstone Project Of the Batch',
        'Outstanding Senior Project Award'
        
      ]
    },
    {
      degree: 'PU-CEBA(Computer science,Economics,business,Accounts)',
      school: 'Indiranagar Composite PU COllege',
      location: 'Bengaluru , Inida',
      period: '2020 - 2022',
      gpa: '66.33%',
      status: 'Graduated',
      description: 'Graduated Summa Cum Laude with focus on STEM subjects. Active in computer science club and robotics team.',
      coursework: [
        'Advanced Computer Science',
        'Advanced Economics',
        'Advanced Accounts',
        'Advanced Business'
      ],
      achievements: [
        'Science Fair 1st Place'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Business Analytics',
      issuer: 'My Captian',
      date: '2025',
      credentialId: 'MY_Business-009'
    },
    {
      name: 'Data Anlaytics With Python',
      issuer: 'My Captian',
      date: '2025',
      credentialId: 'MyCaptian-Python-2025-456'
    },
    {
      name: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG',
      issuer: 'Google Cloud',
      date: '2025',
      credentialId: 'GCP-RAG-2025-789'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic background and continuous learning journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Graduated' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </span>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>

                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <BookOpen size={16} className="mr-2" />
                      <span className="font-medium">{edu.school}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Award size={16} className="mr-2" />
                        <span className="font-medium">GPA: {edu.gpa}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Coursework:</h4>
                        <ul className="space-y-1">
                          {edu.coursework.map((course, courseIndex) => (
                            <li key={courseIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Professional <span className="text-blue-600">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Issued:</span>
                    <span className="font-medium">{cert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ID:</span>
                    <span className="font-mono text-xs">{cert.credentialId}</span>
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

export default Education;