import React from 'react';
import { User, Heart, Code, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer creating web applications that users love. My journey started with a curiosity about how websites and ai/ml models  work, and it has evolved into a deep passion for crafting beautiful, functional digital experiences.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in writing clean, maintainable code and always strive to learn something new every day.
              </p>
              <p className="text-lg leading-relaxed">
                My approach combines technical expertise with creative problem-solving, ensuring that every project I work on delivers both exceptional performance and outstanding user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Clean Code</h3>
                <p className="text-sm text-gray-600 mt-1">Writing maintainable, scalable solutions</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">User-Focused</h3>
                <p className="text-sm text-gray-600 mt-1">Designing with empathy and purpose</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <User className="h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-semibold">Devesh T</h3>
                    <p className="text-blue-100">Full Stack | Cloud | Ai/ML 
                      Developer
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Frontend Development</span>
                    <span className="text-blue-200">90%</span>
                  </div>
                  <div className="w-full bg-blue-400/30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Backend Development</span>
                    <span className="text-blue-200">85%</span>
                    
                  </div>
                  <div className="w-full bg-blue-400/30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Cloud & Ai/ML</span>
                    <span className="text-blue-200">80%</span>
                  </div>
                  <div className="w-full bg-blue-400/30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4 border-t border-blue-400/30">
                  <Coffee className="h-5 w-5" />
                  <span className="text-sm text-blue-100">Fueled by coffee and curiosity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;