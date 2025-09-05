import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData, getProjectsByCategory } from '../data/projects';
import { ScrollReveal } from '../components/ScrollReveal';

const categories = [
  { id: 'all', label: 'All Projects', count: projectsData.length },
  { id: 'web', label: 'Web Development', count: projectsData.filter(p => p.category === 'web').length },
  { id: 'mobile', label: 'Mobile Apps', count: projectsData.filter(p => p.category === 'mobile').length },
  { id: 'ai', label: 'AI/ML', count: projectsData.filter(p => p.category === 'ai').length },
  { id: 'data', label: 'Data Science', count: projectsData.filter(p => p.category === 'data').length },
  { id: 'other', label: 'Other', count: projectsData.filter(p => p.category === 'other').length }
];

const statusColors = {
  completed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  planned: 'bg-blue-100 text-blue-800'
};

export const AllProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredProjects(getProjectsByCategory(category));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 transition-colors duration-300">
        <div className="container mx-auto px-6 py-20">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 transition-colors duration-300">
              All Projects
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-3xl transition-colors duration-300">
              Explore my complete portfolio of projects spanning web development, mobile applications, 
              AI/ML implementations, and data science solutions.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 py-8">
        <ScrollReveal delay={600}>
          <div className="flex items-center gap-4 mb-8">
            <Filter size={20} className="text-gray-600" />
            <span className="text-gray-700 font-medium">Filter by category:</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-transparent">
                
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={14} />
                    {formatDate(project.date)}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Category Badge and View Details */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      {project.category === 'ai' ? 'AI/ML' : project.category}
                    </span>
                    {project.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/project/${project.id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <ScrollReveal>
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to see more projects.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};
