import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: personal.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: personal.linkedin,
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -10 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" ref={formRef}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-4"
          >
            <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-900">
              <h3 className="text-xl font-bold text-white mb-5">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <div className="bg-white p-2 rounded-lg flex-shrink-0">
                        <Icon size={16} className="text-black" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-gray-300 transition-colors duration-150 text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-900">
                <h4 className="text-base font-semibold text-white mb-3">Follow Me</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1a1a1a] p-2.5 rounded-lg hover:bg-[#252525] transition-colors duration-150 border border-gray-800"
                        aria-label={social.label}
                      >
                        <Icon size={18} className="text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <form onSubmit={handleSubmit} className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-900">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-gray-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all duration-150 text-white placeholder-gray-600 text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-gray-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all duration-150 text-white placeholder-gray-600 text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-gray-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all duration-150 resize-none text-white placeholder-gray-600 text-sm"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-2.5 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-150 flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-900 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 <span className="text-white font-medium">{personal.name}</span>. Built with React & passion for Android development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;