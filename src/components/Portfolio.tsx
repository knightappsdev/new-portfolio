import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

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

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    // Web Development Projects
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Socket.io'],
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Order tracking', 'Customer reviews'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'A comprehensive SaaS dashboard with advanced data visualization, user management, and subscription handling built with Next.js and TypeScript.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Chart.js'],
      features: ['Data visualization', 'User management', 'Subscription billing', 'API integration', 'Real-time updates'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Learning Management System',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      description: 'An interactive learning platform with video streaming, progress tracking, and collaborative features for educational institutions.',
      technologies: ['React', 'Express.js', 'MySQL', 'AWS S3', 'WebRTC'],
      features: ['Video streaming', 'Progress tracking', 'Interactive quizzes', 'Discussion forums', 'Certificate generation'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Real Estate Portal',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'A modern real estate platform with advanced search filters, virtual tours, and integrated CRM for property management.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API', 'Cloudinary'],
      features: ['Advanced search', 'Virtual tours', 'CRM integration', 'Property comparison', 'Mortgage calculator'],
      liveUrl: '#',
      githubUrl: '#'
    },

    // Mobile App Development Projects
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile-development',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      description: 'A comprehensive fitness app with workout tracking, nutrition planning, and social features built with React Native.',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
      features: ['Workout tracking', 'Nutrition planning', 'Social features', 'Progress analytics', 'Wearable integration'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile-development',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      description: 'A full-stack food delivery application with real-time tracking, payment integration, and restaurant management system.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
      features: ['Real-time tracking', 'Payment integration', 'Restaurant dashboard', 'Order management', 'Push notifications'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Banking Mobile App',
      category: 'mobile-development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      description: 'A secure banking application with biometric authentication, transaction history, and financial planning tools.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometric Auth'],
      features: ['Biometric login', 'Transaction history', 'Bill payments', 'Financial planning', 'Security alerts'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 8,
      title: 'Social Media App',
      category: 'mobile-development',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      description: 'A feature-rich social media platform with photo sharing, stories, messaging, and live streaming capabilities.',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Cloudinary', 'Push Notifications'],
      features: ['Photo sharing', 'Stories', 'Live streaming', 'Direct messaging', 'Social feeds'],
      liveUrl: '#',
      githubUrl: '#'
    },

    // Digital Marketing Projects
    {
      id: 9,
      title: 'E-commerce SEO Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Comprehensive SEO strategy that increased organic traffic by 300% and improved conversion rates for a major e-commerce client.',
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Schema Markup'],
      features: ['Keyword research', 'Technical SEO', 'Content optimization', 'Link building', 'Performance tracking'],
      liveUrl: '#'
    },
    {
      id: 10,
      title: 'Social Media Marketing',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'Multi-platform social media campaign that generated 500K+ engagements and increased brand awareness by 250%.',
      technologies: ['Facebook Ads Manager', 'Instagram API', 'Hootsuite', 'Canva', 'Google Analytics'],
      features: ['Content strategy', 'Paid advertising', 'Community management', 'Influencer partnerships', 'Analytics reporting'],
      liveUrl: '#'
    },
    {
      id: 11,
      title: 'PPC Campaign Management',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Google Ads and Facebook Ads campaigns that achieved 400% ROAS and reduced cost-per-acquisition by 60%.',
      technologies: ['Google Ads', 'Facebook Ads', 'Google Tag Manager', 'Conversion Tracking', 'A/B Testing'],
      features: ['Campaign optimization', 'Audience targeting', 'Conversion tracking', 'Budget management', 'Performance analysis'],
      liveUrl: '#'
    },
    {
      id: 12,
      title: 'Content Marketing Strategy',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      description: 'Content marketing strategy that increased website traffic by 400% and generated 200+ qualified leads monthly.',
      technologies: ['WordPress', 'Mailchimp', 'BuzzSumo', 'Canva', 'Google Analytics'],
      features: ['Content planning', 'Blog management', 'Email marketing', 'Lead generation', 'Performance tracking'],
      liveUrl: '#'
    },

    // Branding Projects
    {
      id: 13,
      title: 'Tech Startup Branding',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      description: 'Complete brand identity design for a fintech startup, including logo, color palette, typography, and brand guidelines.',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Adobe InDesign', 'Sketch'],
      features: ['Logo design', 'Brand guidelines', 'Color palette', 'Typography system', 'Marketing materials'],
      liveUrl: '#'
    },
    {
      id: 14,
      title: 'Restaurant Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      description: 'Brand redesign for a restaurant chain that increased customer recognition by 80% and improved sales by 45%.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Canva', 'Print Design', 'Packaging Design'],
      features: ['Brand strategy', 'Visual identity', 'Menu design', 'Packaging design', 'Marketing collateral'],
      liveUrl: '#'
    },
    {
      id: 15,
      title: 'Fashion Brand Campaign',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      description: 'Comprehensive branding campaign for a fashion retailer including brand positioning, visual identity, and marketing strategy.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Photography', 'Video Production', 'Social Media'],
      features: ['Brand positioning', 'Visual campaign', 'Photography direction', 'Social media assets', 'Brand guidelines'],
      liveUrl: '#'
    },
    {
      id: 16,
      title: 'Corporate Rebranding',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      description: 'Complete corporate rebranding project that modernized company image and improved market positioning.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy', 'Market Research', 'Design Systems'],
      features: ['Brand audit', 'Logo redesign', 'Brand guidelines', 'Website redesign', 'Marketing materials'],
      liveUrl: '#'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'bi-grid' },
    { id: 'web-development', name: 'Web Development', icon: 'bi-code-slash' },
    { id: 'mobile-development', name: 'Mobile Apps', icon: 'bi-phone' },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: 'bi-graph-up-arrow' },
    { id: 'branding', name: 'Branding', icon: 'bi-palette' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            My <span className="text-lime-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work across web development, mobile apps, 
            digital marketing, and branding projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-lime-500 text-dark-900'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-lime-400'
              }`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-lime-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <i className="bi bi-eye text-3xl text-lime-400"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-dark-700 text-xs text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-lime-500/20 text-xs text-lime-400 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
