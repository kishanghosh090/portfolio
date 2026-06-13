import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { portfolioData } from "../data/kishandata";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_8hjc37a";
    const templateId = "template_l64wy22";
    const publicKey = "H8P4OdLra6PfJ5V_t";
    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });
          formRef.current.reset();
        },
        (error) => {
          console.log(error);

          toast({
            title: "Message Sent Failed!!",
            description: "Try again later or use another method for contact",
          });
        },
      );
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: personal.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: personal.linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" className="min-h-screen section-dark py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="card-dark rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-5">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-600/90 p-2 rounded-lg flex-shrink-0">
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-blue-300 transition-colors duration-200 text-sm"
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

              <div className="mt-6 pt-6 border-t border-blue-900/30">
                <h4 className="text-base font-semibold text-white mb-3">
                  Follow Me
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-950/40 p-2.5 rounded-lg hover:bg-blue-900/40 transition-colors duration-200 border border-blue-900/30"
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

          <motion.div variants={fadeUp}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card-dark rounded-2xl p-6"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-blue-950/30 border border-blue-900/40 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white placeholder-slate-600 text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-blue-950/30 border border-blue-900/40 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white placeholder-slate-600 text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2.5 bg-blue-950/30 border border-blue-900/40 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none text-white placeholder-slate-600 text-sm"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl hover:bg-blue-500 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm shadow-lg shadow-blue-600/20"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mt-16 pt-8 border-t border-blue-900/30 text-center"
        >
          <p className="text-slate-500 text-sm">
            © 2024{" "}
            <span className="text-white font-medium">{personal.name}</span>.
            Built with React & passion for Android development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
