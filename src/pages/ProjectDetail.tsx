import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, CheckCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ScrollReveal } from '../components/ScrollReveal';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    planned: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 pt-24 pb-16">
          <ScrollReveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                    <CheckCircle size={16} className="inline mr-1" />
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <Calendar size={16} />
                    {formatDate(project.date)}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              <div className="lg:order-first">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                {project.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Tag size={20} />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            {/* Project Contributions */}
            {project.contributions && (
              <ScrollReveal>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Project Contributions
                  </h3>
                  <div className="space-y-4">
                    {project.contributions.map((contribution, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800">{contribution.contributor}</h4>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                            {contribution.percentage}%
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {contribution.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
            
            <ScrollReveal>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Category:</span>
                    <span className="ml-2 text-gray-600 capitalize">{project.category === 'ai' ? 'AI/ML' : project.category}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Status:</span>
                    <span className="ml-2 text-gray-600 capitalize">{project.status.replace('-', ' ')}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Completion:</span>
                    <span className="ml-2 text-gray-600">{formatDate(project.date)}</span>
                  </div>
                  {project.featured && (
                    <div>
                      <span className="font-medium text-gray-700">Featured:</span>
                      <span className="ml-2 text-green-600">Yes</span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
