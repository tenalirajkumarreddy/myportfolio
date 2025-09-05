import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';
import { getFeaturedProjects } from '../data/projects';

export const Projects: React.FC = () => {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 bg-gray-50 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 transition-colors duration-300">Featured Projects</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Link 
                        to={`/project/${project.id}`}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                        title="View Details"
                      >
                        <ExternalLink size={20} />
                      </Link>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Source Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <ScrollReveal delay={800}>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
