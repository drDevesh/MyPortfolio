import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Devesh T</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Full Stack | Cloud | Ai/ML Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I create beautiful, functional web applications that solve real-world problems and deliver exceptional user experiences.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/drDevesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/devesh-t-a87263301/"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:deveshdevesht@gmail.com"
              className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;