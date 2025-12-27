import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaArrowRight,
  FaHardHat
} from 'react-icons/fa';
import logo from '../assets/cropped-tg3.jpg';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sitemap = [
    { name: 'Home', path: '/' },
    { name: 'About Company', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Project Gallery', path: '/gallery' },
    { name: 'Get a Quote', path: '/quote' },
  ];

  const services = [
    'Road Markings & Signage',
    'Hot Mix Asphalt Supply',
    'Road Construction',
    'Equipment Rental',
    'Civil Engineering',
    'Maintenance Services'
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      
      {/* --- DECORATIVE TOP BORDER (The "Road Line") --- */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
        <div className="w-full h-full border-t-4 border-yellow-400 border-dashed opacity-70" />
      </div>

      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* COLUMN 1: BRANDING (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3 bg-white p-2 rounded-lg">
                 <img src={logo} alt="Linkmap Logo" className="h-10 w-auto" />
              </div>
            </Link>
            
            <p className="text-slate-400 leading-relaxed text-lg">
              Engineering the path forward. We provide world-class infrastructure development across Zimbabwe and the SADC region.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: LINKS (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">
              Navigate
            </h4>
            <ul className="space-y-4">
              {sitemap.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <FaArrowRight className="text-xs text-blue-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">
              Capabilities
            </h4>
            <ul className="space-y-4">
              {services.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group cursor-default">
                  <FaHardHat className="text-slate-600 mt-1 group-hover:text-blue-500 transition-colors" size={12} />
                  <span className="text-slate-400 group-hover:text-gray-200 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">
              Contact HQ
            </h4>
            
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <FaMapMarkerAlt className="text-blue-500 mt-1 text-xl" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  102 Golden Hope Crescent,<br />
                  Goodhope, Harare,<br />
                  Zimbabwe
                </p>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <a href="mailto:info@linkmap.co.zw" className="text-slate-300 text-sm hover:text-white transition-colors">
                  info@linkmap.co.zw
                </a>
              </div>

              {/* Call Action */}
              <a href="tel:+263775626840" className="mt-6 block">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
                  <FaPhone className="group-hover:rotate-12 transition-transform" />
                  <span>Call Us Now</span>
                </button>
              </a>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Linkmap Zimbabwe. Engineered for Excellence.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;