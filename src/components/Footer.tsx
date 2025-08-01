import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">Devesh</span> T
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full Stack | Cloud | Ai/ML Developer passionate about creating beautiful, functional web & Cloud applications 
              that solve real-world problems and deliver exceptional user experiences.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and</span>
            <Code size={16} className="text-blue-400" />
            <span>by Devesh T</span>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Devesh T. All rights reserved.
              </p>
              
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Back to Top
                </button>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;