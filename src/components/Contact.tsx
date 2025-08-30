import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => window.setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Hide success message after 5 seconds
    window.setTimeout(() => setShowSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: 'bi-envelope',
      title: 'Email',
      value: 'hello@opeyemi.dev',
      link: 'mailto:hello@opeyemi.dev'
    },
    {
      icon: 'bi-phone',
      title: 'Phone',
      value: '+234 (0) 123 456 7890',
      link: 'tel:+2341234567890'
    },
    {
      icon: 'bi-geo-alt',
      title: 'Location',
      value: 'Lagos, Nigeria',
      link: '#'
    },
    {
      icon: 'bi-clock',
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Let's <span className="text-lime-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and 
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Get in <span className="text-lime-400">Touch</span>
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-lime-400/50 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-lime-500/30 transition-colors">
                    <i className={`${info.icon} text-xl text-lime-400`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'bi-linkedin', url: '#', color: 'hover:text-blue-400' },
                  { icon: 'bi-github', url: '#', color: 'hover:text-gray-300' },
                  { icon: 'bi-twitter', url: '#', color: 'hover:text-blue-400' },
                  { icon: 'bi-instagram', url: '#', color: 'hover:text-pink-400' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} border border-dark-700 hover:border-lime-400/50 transition-all duration-200`}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a <span className="text-lime-400">Message</span>
            </h3>

            {showSuccess && (
              <div className="mb-6 p-4 bg-lime-500/20 border border-lime-500/50 rounded-lg">
                <div className="flex items-center text-lime-400">
                  <i className="bi bi-check-circle mr-2"></i>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-lime-500 text-dark-900 font-semibold rounded-lg hover:bg-lime-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <i className="bi bi-arrow-clockwise animate-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
