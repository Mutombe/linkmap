import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle,
  FaRoad,
  FaTools,
  FaHardHat,
  FaTruckMoving,
  FaPaperPlane,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    location: '',
    timeline: '',
    budget: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        projectType: '',
        location: '',
        timeline: '',
        budget: '',
        description: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const services = [
    {
      icon: FaRoad,
      name: 'Road Markings',
      features: ['Thermoplastic', 'Cold Plastic', 'Line Marking', 'Reflective']
    },
    {
      icon: FaTools,
      name: 'Road Signs',
      features: ['Regulatory', 'Warning', 'Informational', 'Custom']
    },
    {
      icon: FaHardHat,
      name: 'Hot Mix Asphalt',
      features: ['Dense Graded', 'Stone Matrix', 'Warm Mix', 'Premium']
    },
    {
      icon: FaTruckMoving,
      name: 'Equipment Supply',
      features: ['Construction', 'Bitumen', 'Polymer', 'Technical']
    }
  ];

  const projectTypes = [
    'New Construction',
    'Maintenance & Repair',
    'Upgrade & Modernization',
    'Emergency Work',
    'Consultation Services'
  ];

  const timelines = [
    'Urgent (Within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Flexible'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000',
    'To be discussed'
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-blue-500 to-gray-800" />
        <div className="absolute inset-0 diagonal-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Request a <span className="text-blue-500 bg-white px-4">Quote</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Tell us about your project and we'll provide a detailed, competitive quote
          </motion.p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FaCheckCircle, text: 'Free Consultation', detail: 'No obligation quote' },
              { icon: FaPhone, text: '24-48 Hour Response', detail: 'Quick turnaround' },
              { icon: FaEnvelope, text: 'Detailed Proposal', detail: 'Comprehensive breakdown' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-gray-50 rounded-xl p-6 border-2 border-gray-200 
                         hover:border-blue-500 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{item.text}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Select Your <span className="text-blue-500">Service</span>
            </h2>
            <p className="text-lg text-gray-600">
              Choose the service you're interested in
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift border-2 border-transparent 
                         hover:border-blue-500 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 
                              group-hover:bg-blue-500 transition-colors">
                  <service.icon className="text-blue-500 text-2xl group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                  {service.name}
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-blue-500 mr-2 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-8 text-center">
              Project Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                             focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                             focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                             focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                             focus:outline-none transition-colors"
                    placeholder="+263 77 123 4567"
                  />
                </div>
              </div>

              {/* Project Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                             focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service.name}>{service.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                             focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                             focus:outline-none transition-colors"
                    placeholder="City, Province"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                             focus:outline-none transition-colors"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, idx) => (
                      <option key={idx} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Estimated Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                           focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, idx) => (
                    <option key={idx} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 
                           focus:outline-none transition-colors resize-none"
                  placeholder="Provide detailed information about your project requirements, scope, and any specific needs..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-lg 
                           flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-2xl" />
                  <div>
                    <p className="font-bold">Quote Request Submitted!</p>
                    <p className="text-sm">We'll get back to you within 24-48 hours.</p>
                  </div>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-600">
                By submitting this form, you agree to be contacted by our team regarding your project.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-6">
            Prefer to Talk Directly?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Our team is ready to discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+263775626840">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <FaPhone />
                <span>+263 77 562 6840</span>
              </motion.button>
            </a>
            <a href="mailto:info@linkmap.co.zw">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold 
                         transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
              >
                <FaEnvelope />
                <span>info@linkmap.co.zw</span>
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;