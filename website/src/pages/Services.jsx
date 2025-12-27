import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRoad, 
  FaTools, 
  FaTruckMoving, 
  FaHardHat,
  FaCheckCircle,
  FaArrowRight,
  FaRulerCombined,
  FaCertificate
} from 'react-icons/fa';

// Assets
import roadMarking from '../assets/pavement-marking-guide.jpg';
import roadSign from '../assets/traffic-zone-urban-road-sign-prohibition-signs.jpg';
import asphalt from '../assets/types-of-asphalt-2-1024x839-1-qotj1hvo20jkqe2p3pyw3upe3vs9epkgaxr0ynlu4w.jpeg';
import equipment from '../assets/linkway_linemarking_healthsafety-1-1024x683-1-qotj1hvo2gcg24znem7aiql326g489nrh235feiqhg.jpg';

const Services = () => {
  const containerRef = useRef(null);

  const services = [
    {
      id: 'markings',
      icon: FaRoad,
      title: 'Road Markings',
      subtitle: 'Safety & Visibility',
      image: roadMarking,
      desc: 'Industry-leading road marking solutions ensuring safety and efficiency. We utilize high-grade thermoplastic and cold plastic applications compliant with international standards.',
      specs: ['Thermoplastic', 'Cold Plastic', 'Reflective beads'],
      features: ['Enhanced Night Visibility', 'SABS Compliant', 'Long-lasting Durability']
    },
    {
      id: 'signs',
      icon: FaTools,
      title: 'Road Signs',
      subtitle: 'Manufacturing & Supply',
      image: roadSign,
      desc: 'Fully equipped manufacturing plant producing regulatory, warning, and information signs. We use only SABS approved materials to ensure longevity and retro-reflectivity.',
      specs: ['Chromadek Steel', 'Class 1 Reflective', 'UV Resistant'],
      features: ['Custom Fabrication', 'Regulatory Standards', 'High Visibility']
    },
    {
      id: 'asphalt',
      icon: FaHardHat,
      title: 'Hot Mix Asphalt',
      subtitle: 'Surfacing & Paving',
      image: asphalt,
      desc: 'Premium quality hot mix asphalt for durable road construction. Our mixtures are engineered to withstand heavy traffic loads and varying weather conditions.',
      specs: ['Dense-Graded', 'Stone Matrix', 'Bitumen Rubber'],
      features: ['Superior Load Distribution', 'Smooth Finish', 'Cost-Effective']
    },
    {
      id: 'equipment',
      icon: FaTruckMoving,
      title: 'Construction Tech',
      subtitle: 'Equipment & Materials',
      image: equipment,
      desc: 'Supply of cutting-edge road construction technology, bitumen emulsions, and polymer-modified binders for both private and public sector projects.',
      specs: ['Bitumen Emulsion', 'Polymer Modified', 'Pavers & Rollers'],
      features: ['Technical Support', 'Quality Assurance', 'Modern Fleet']
    }
  ];

  return (
    <div className="bg-white overflow-hidden" ref={containerRef}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img src={asphalt} alt="Services Hero" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 py-1 mb-6">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-yellow-500 text-xs font-mono font-bold uppercase tracking-widest">
                Technical Capabilities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Engineering the infrastructure of tomorrow with precision, quality, and professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STICKY SERVICES SCROLL --- */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* --- PROCESS ROADMAP --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Project Execution</h2>
            <p className="text-gray-400">Our systematic approach to infrastructure development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* The Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-700 -z-10" />

            {[
              { step: '01', title: 'Consult', desc: 'Requirements & Site Analysis' },
              { step: '02', title: 'Plan', desc: 'Resource Allocation & Scheduling' },
              { step: '03', title: 'Execute', desc: 'Implementation & Quality Control' },
              { step: '04', title: 'Deliver', desc: 'Final Inspection & Handover' }
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:border-blue-500 group-hover:bg-blue-600 transition-all duration-300 shadow-xl z-10 relative">
                  <span className="text-3xl font-black text-gray-500 group-hover:text-white transition-colors">{phase.step}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-500">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Technical Grid) --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Why <span className="text-blue-600">Linkmap?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just build roads; we build trust. Our commitment to SABS standards and environmental responsibility sets us apart in the Zimbabwean market.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'SABS Approved Materials',
                  'ISO 9001 Compliant',
                  'Eco-Friendly Practice',
                  'Advanced Machinery',
                  'Skilled Workforce',
                  'On-Time Delivery'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="font-bold text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
               <div className="absolute top-0 right-0 p-4 bg-yellow-400 rounded-bl-3xl rounded-tr-3xl">
                  <FaCertificate className="text-2xl text-slate-900" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Guaranteed Excellence</h3>
               <p className="text-gray-600 mb-8">
                 Every project is backed by our comprehensive quality assurance protocol. We ensure durability that lasts for decades.
               </p>
               <Link to="/contact">
                 <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                   Request a Quote <FaArrowRight />
                 </button>
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// --- SUB-COMPONENT: Individual Service Card (Sticky Effect) ---
const ServiceCard = ({ service, index }) => {
  return (
    <div className="min-h-screen flex items-center justify-center sticky top-0 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full bg-white lg:bg-transparent">
        
        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
              <service.icon size={32} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">{service.title}</h2>
              <p className="text-blue-500 font-bold uppercase tracking-wider text-sm">{service.subtitle}</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-yellow-400 pl-6">
            {service.desc}
          </p>

          <div className="mb-8">
            <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
              <FaRulerCombined className="text-gray-400" /> Technical Specs
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.specs.map((spec, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-mono rounded border border-gray-200">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {service.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                {feat}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} relative`}
        >
           <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square group">
             <img 
               src={service.image} 
               alt={service.title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
             
             {/* Floating Number Badge */}
             <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md w-16 h-16 rounded-full flex items-center justify-center border border-white">
               <span className="font-display font-black text-2xl text-slate-900">0{index + 1}</span>
             </div>
           </div>
           
           {/* Decorative Background Blob */}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </motion.div>

      </div>
    </div>
  );
};

export default Services;