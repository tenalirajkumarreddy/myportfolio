import React, { useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { FloatingShapes } from './FloatingShapes';
import { ScrollReveal } from './ScrollReveal';
import { downloadResume } from '../utils/resumeUtils';

export const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    
    try {
      const result = await downloadResume({
        fileName: 'Raj_Kumar_Reddy_Tenali_Resume.pdf',
        resumePath: '/resume.pdf'
      });
      
      if (!result.success) {
        alert(result.message);
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <FloatingShapes />
      
      <div className="container mx-auto px-6 text-center z-10">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Raj Kumar Reddy Tenali
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Computer Science Student
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Passionate about Full Stack Development, AI/ML, and Data Analytics. 
            Currently pursuing my Bachelor's in Computer Science at VIT AP University.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 ${
                isDownloading 
                  ? 'bg-blue-400 text-white cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <Download size={20} className={isDownloading ? 'animate-bounce' : ''} />
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </button>
            <button 
              onClick={handleContactClick}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </ScrollReveal>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};