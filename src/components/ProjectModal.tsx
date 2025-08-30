import React, { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web-development':
        return 'bi-code-slash';
      case 'mobile-development':
        return 'bi-phone';
      case 'digital-marketing':
        return 'bi-graph-up-arrow';
      case 'branding':
        return 'bi-palette';
      default:
        return 'bi-folder';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'web-development':
        return 'Web Development';
      case 'mobile-development':
        return 'Mobile Development';
      case 'digital-marketing':
        return 'Digital Marketing';
      case 'branding':
        return 'Branding';
      default:
        return 'Project';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-700">
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
            crossOrigin="anonymous"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-900 transition-colors"
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <span className="px-3 py-1 bg-lime-500/20 text-lime-400 text-sm rounded-full flex items-center">
              <i className={`${getCategoryIcon(project.category)} mr-1`}></i>
              {getCategoryName(project.category)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {project.title}
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <i className="bi bi-gear mr-2 text-lime-400"></i>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg border border-dark-600 hover:border-lime-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <i className="bi bi-check-circle mr-2 text-lime-400"></i>
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-300"
                >
                  <i className="bi bi-arrow-right text-lime-400 mr-3"></i>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-lime-500 text-dark-900 font-semibold rounded-lg hover:bg-lime-400 transition-colors"
              >
                <i className="bi bi-eye mr-2"></i>
                View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 border-2 border-lime-400 text-lime-400 font-semibold rounded-lg hover:bg-lime-400 hover:text-dark-900 transition-colors"
              >
                <i className="bi bi-github mr-2"></i>
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
