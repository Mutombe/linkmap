import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaPaperPlane,
  FaArrowRight,
  FaBuilding
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', type: 'General Inquiry', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(30deg, #475569 12%, transparent 12.5%, transparent 87%, #475569 87.5%, #475569), linear-gradient(150deg, #475569 12%, transparent 12.5%, transparent 87%, #475569 87.5%, #475569), linear-gradient(30deg, #475569 12%, transparent 12.5%, transparent 87%, #475569 87.5%, #475569), linear-gradient(150deg, #475569 12%, transparent 12.5%, transparent 87%, #475569 87.5%, #475569), linear-gradient(60deg, #47556977 25%, transparent 25.5%, transparent 75%, #47556977 75%, #47556977), linear-gradient(60deg, #47556977 25%, transparent 25.5%, transparent 75%, #47556977 75%, #47556977)', backgroundSize: '80px 140px', backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px' }} 
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              Online & Operational
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Together</span>
            </h1>
            
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a project in mind? Our team of engineers and specialists is ready to discuss your infrastructure needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN SPLIT CONTENT --- */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* LEFT: Contact Info (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              
              {/* HQ Card */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-600 rounded-xl text-white">
                    <FaBuilding size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Headquarters</h3>
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">Harare, Zimbabwe</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                      102 Golden Hope Crescent,<br />
                      Goodhope, Harare
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl group hover:bg-blue-50 transition-colors cursor-pointer">
                    <FaPhone className="text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <a href="tel:+263775626840" className="block text-slate-900 font-bold hover:text-blue-600">+263 77 562 6840</a>
                      <a href="tel:+263774717680" className="block text-slate-600 text-sm hover:text-blue-600">+263 77 471 7680</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl group hover:bg-blue-50 transition-colors cursor-pointer">
                    <FaEnvelope className="text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <a href="mailto:info@linkmap.co.zw" className="text-slate-900 font-bold hover:text-blue-600">
                      info@linkmap.co.zw
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                   <FaClock className="text-yellow-400" />
                   <h3 className="font-bold">Operating Hours</h3>
                </div>
                <div className="space-y-3 relative z-10 text-sm text-slate-300">
                   <div className="flex justify-between border-b border-slate-700 pb-2">
                     <span>Mon - Fri</span>
                     <span className="font-mono text-white">08:00 - 17:00</span>
                   </div>
                   <div className="flex justify-between border-b border-slate-700 pb-2">
                     <span>Saturday</span>
                     <span className="font-mono text-white">08:00 - 13:00</span>
                   </div>
                   <div className="flex justify-between">
                     <span>Sunday</span>
                     <span className="text-yellow-400 font-bold">Closed</span>
                   </div>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4 justify-center">
                 {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-md">
                      <Icon />
                    </a>
                 ))}
              </div>

            </div>
          </div>

          {/* RIGHT: Contact Form (The "Work Order") */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Project Inquiry</h2>
                <p className="text-slate-500">Please fill out the details below. We usually respond within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 font-semibold text-slate-900 focus:border-blue-500 focus:outline-none focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 font-semibold text-slate-900 focus:border-blue-500 focus:outline-none focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+263..."
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 font-semibold text-slate-900 focus:border-blue-500 focus:outline-none focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Interest</label>
                    <select 
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 font-semibold text-slate-900 focus:border-blue-500 focus:outline-none focus:bg-white transition-all"
                    >
                      <option>General Inquiry</option>
                      <option>Road Construction</option>
                      <option>Road Markings</option>
                      <option>Equipment Rental</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about the project scope, location, and timeline..."
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 font-medium text-slate-900 focus:border-blue-500 focus:outline-none focus:bg-white transition-all resize-none"
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 font-bold"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Message sent successfully!
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-xl shadow-xl shadow-slate-900/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="h-[400px] w-full bg-slate-200 grayscale relative">
         {/* Placeholder for real map */}
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.309087654321!2d31.0!3d-17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1620000000000!5m2!1sen!2szw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Linkmap Location"
            className="filter grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-700"
          />
          
          <div className="absolute inset-0 pointer-events-none border-t-4 border-yellow-400 border-dashed" />
      </section>

    </div>
  );
};

export default Contact;