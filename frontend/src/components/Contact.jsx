import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { portfolioData } from "../data/kishandata";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeUp, staggerContainer, viewport, staggerSlow } from "../lib/motion";

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          toast({
            title: "Message Sent Failed!!",
            description: "Try again later or use another method for contact",
          });
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      description: "Available for calls",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      description: "Based in India",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: personal.github,
      label: "GitHub",
      username: "kishanghosh090",
    },
    {
      icon: Linkedin,
      href: personal.linkedin,
      label: "LinkedIn",
      username: "Kishan Rana Ghosh",
    },
    {
      icon: SiLeetcode,
      href: personal.leetcode,
      label: "LeetCode",
      username: "KishanRanaGhosh2005",
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="mb-5">
            <span className="inline-block px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 text-xs font-medium tracking-[0.15em] uppercase">
              Contact
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/35 text-base max-w-2xl mx-auto font-light"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-2 space-y-4"
          >
            <motion.div variants={fadeUp} className="card-premium rounded-2xl p-6">
              <h3 className="text-base font-bold text-white/90 mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-white/40" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-white/30 font-medium mb-0.5 tracking-wide uppercase">
                          {method.label}
                        </p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="text-sm text-white/70 hover:text-white transition-colors duration-200 block truncate"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white/70 truncate">
                            {method.value}
                          </p>
                        )}
                        <p className="text-[11px] text-white/20 mt-0.5">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="card-premium rounded-2xl p-6">
              <h3 className="text-base font-bold text-white/90 mb-4">Connect</h3>
              <div className="flex flex-col gap-2">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                        <SocialIcon size={14} className="text-white/30 group-hover:text-white/60 transition-colors duration-200" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-200">
                          {social.label}
                        </p>
                        <p className="text-xs text-white/20 truncate">
                          {social.username}
                        </p>
                      </div>
                      <ExternalLink size={12} className="text-white/20 group-hover:text-white/40 transition-colors duration-200 flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-3"
          >
            <motion.div variants={fadeUp}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="card-premium rounded-2xl p-6 md:p-8 h-full"
              >
                <h3 className="text-base font-bold text-white/90 mb-6">
                  Send a Message
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs text-white/30 mb-2 tracking-wide uppercase"
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
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-xl focus:outline-none focus:ring-0 focus:border-white/20 transition-all duration-200 text-white placeholder-white/15 text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs text-white/30 mb-2 tracking-wide uppercase"
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
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-xl focus:outline-none focus:ring-0 focus:border-white/20 transition-all duration-200 text-white placeholder-white/15 text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs text-white/30 mb-2 tracking-wide uppercase"
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
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-xl focus:outline-none focus:ring-0 focus:border-white/20 transition-all duration-200 resize-none text-white placeholder-white/15 text-sm"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white/70 text-sm font-medium hover:bg-white/[0.06] hover:border-white/[0.18] hover:text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-white/15 mt-4 text-center">
                  I'll get back to you within 24 hours
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mt-24 pt-8 border-t border-white/[0.06] text-center"
        >
          <p className="text-white/20 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white/40">{personal.name}</span>. Built with React & passion for development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;