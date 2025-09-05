import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Raj Kumar Reddy Tenali</h3>
            <p className="text-gray-400">Computer Science Student & Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/tenalirajkumarreddy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/tenalirajkumarreddy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/tenalirajkumar" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
