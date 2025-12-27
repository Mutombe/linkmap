import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRoad, FaTools, FaHardHat, FaArrowRight, FaCheck 
} from 'react-icons/fa';
import { FaRoadBarrier } from "react-icons/fa6";


// Assets (Using the ones you provided)
import roadWork from '../assets/erepublic.brightspotcdn-1.jpg';
import asphalt from '../assets/types-of-asphalt-2-1024x839-1-qotj1hvo20jkqe2p3pyw3upe3vs9epkgaxr0ynlu4w.jpeg';
import roadMarking from '../assets/pavement-marking-guide.jpg';
import maintenance from '../assets/Maintenance-of-Road.jpg';
import img6 from '../assets/istockphoto-474221742-612x612-1-qotj1hvo2gcg24znem7aiql326g489nrh235feiqhg.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: img6,
      alt: "Heavy Machinery Construction",
      tag: "Heavy Duty"
    },
    {
      id: 2,
      image: roadMarking,
      alt: "Road Marking Services",
      tag: "Precision"
    },
    {
      id: 3,
      image: asphalt,
      alt: "Hot Mix Asphalt",
      tag: "Quality Materials"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const services = [
    { icon: FaRoad, title: 'Road Markings', desc: 'Precision safety marking solutions.' },
    { icon: FaRoadBarrier, title: 'Road Signs', desc: 'SABS approved signage manufacturing.' },
    { icon: FaHardHat, title: 'Hot Mix Asphalt', desc: 'Premium durable asphalt supply.' },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center">
        
        {/* CAROUSEL LAYER */}
        {/* Mobile: Absolute background covering everything. Desktop: Absolute right covering 50% */}
        <div className="absolute inset-0 lg:left-[45%] lg:right-0 z-0 overflow-hidden">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={heroSlides[currentSlide].image} 
                alt={heroSlides[currentSlide].alt} 
                className="w-full h-full object-cover"
              />
              {/* Overlay for Desktop (Gradient) */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-transparent to-black/20" />
            </motion.div>
          </AnimatePresence>
          
          {/* Slanted Edge Effect for Desktop */}
          <div className="hidden lg:block absolute top-0 left-0 w-32 h-full bg-white -skew-x-12 origin-top -ml-16 z-10" />
        </div>

        {/* MOBILE OVERLAY (The "Light BG" effect) */}
        {/* This fades the images out on mobile so text is readable */}
        <div className="absolute inset-0 bg-white/5 lg:hidden z-0" />

        {/* CONTENT LAYER */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full pt-20 lg:pt-0">
          <div className="pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className=" py-12 lg:py-0"
            >
              {/* Dynamic Tag based on current slide */}
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-wider mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {heroSlides[currentSlide].tag}
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                  Infrastructure
                </span> <br />
                That Lasts.
              </h1>

              <p className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed font-medium">
                Transforming visions into reality with Zimbabwe's leading construction team. From road markings to heavy surfacing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all w-full sm:w-auto"
                  >
                    Start a Project
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-yellow-400 transition-all w-full sm:w-auto"
                  >
                    Our Services <FaArrowRight className="text-sm" />
                  </motion.button>
                </Link>
              </div>

              {/* Carousel Indicators */}
              <div className="flex gap-2 mt-12">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-blue-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Side is empty here because the Image Layer handles it absolutely */}
            <div className="hidden lg:block h-full" />
          </div>
        </div>
      </section>

      {/* --- SERVICES TEASER (Overlapping Card) --- */}
      <section className="relative z-20 -mt-5 lg:-mt-5 px-4 pb-20">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Our Expertise</h2>
              <div className="h-1 w-20 bg-yellow-500 rounded-full" />
            </div>
            <Link to="/services" className="text-yellow-400 hover:text-white transition-colors mt-4 md:mt-0 flex items-center gap-2 font-semibold">
              View All Services <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="text-2xl text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src={maintenance} alt="About Us" className="w-full object-cover h-[500px]" />
               <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-8 rounded-2xl shadow-xl">
               <p className="text-4xl font-black text-slate-900">3+</p>
               <p className="text-sm font-bold text-slate-800 uppercase tracking-wider">Years Exp.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Constructing the Future of Zimbabwe
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2021, Linkmap recognizes the critical role infrastructure plays in economic development. We are committed to offering world-class competitive products.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Safety First', 'Quality Control', 'SADC Region', 'Professional Team'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                     <FaCheck size={10} />
                   </div>
                   <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <button className="text-slate-900 font-bold border-b-2 border-yellow-400 hover:text-blue-600 transition-colors pb-1">
                Read More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;