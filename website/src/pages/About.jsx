import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaEye, 
  FaBullseye, 
  FaHandshake, 
  FaUsers, 
  FaLeaf, 
  FaLightbulb,
  FaHardHat,
  FaCheck
} from 'react-icons/fa';

// Assets
import roadWork from '../assets/1659496063279.jpg'; // Ensure this path is correct
import maintenance from '../assets/Maintenance-of-Road.jpg'; // Ensure this path is correct

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const coreValues = [
    { icon: FaHandshake, title: 'Integrity', desc: 'We treat everyone with respect, fairness, and honesty. Ethical standards are our foundation.' },
    { icon: FaUsers, title: 'Teamwork', desc: 'Collaborating to achieve common goals. We share information and listen to our clients.' },
    { icon: FaLightbulb, title: 'Innovation', desc: 'Continuously learning and adapting to industry changes to stay at the forefront.' },
    { icon: FaLeaf, title: 'Responsibility', desc: 'Committed to the health and safety of our people and the environment.' },
  ];

  const timeline = [
    { year: '2021', title: 'Foundation', desc: 'Linkmap Zimbabwe founded to aid SADC economic development.' },
    { year: '2022', title: 'Expansion', desc: 'Opened strategic offices in Harare and Bulawayo.' },
    { year: '2023', title: 'Growth', desc: 'Multiple infrastructure projects completed across provinces.' },
    { year: '2024', title: 'Leadership', desc: 'Recognized as a strategic player in national infrastructure.' },
  ];

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={roadWork}
            alt="About Linkmap" 
            className="w-full h-[120%] object-cover brightness-50"
          />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-slate-900 font-bold text-sm tracking-widest uppercase mb-6">
              Est. 2021
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Building the backbone of Zimbabwe's economy through world-class infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Diagonal Cut at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-slant" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* --- OUR STORY (Sticky Layout) --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Text (Scrolls) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Driven by <span className="text-blue-600 underline decoration-yellow-400 decoration-4 underline-offset-4">Purpose.</span>
            </h2>
            
            <div className="prose prose-lg text-slate-600">
              <p>
                Founded in 2021, Linkmap Zimbabwe was born from a recognition of the critical need for robust infrastructure in the SADC region. We aren't just building roads; we are facilitating trade, commerce, and connection.
              </p>
              <p>
                Our philosophy is simple: <strong>Infrastructure is the economy.</strong>
              </p>
              <p>
                From our headquarters, we have rapidly expanded into Harare and Bulawayo, establishing a presence that allows us to deploy teams quickly and efficiently across the country.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
               <div>
                 <h3 className="text-4xl font-black text-slate-900">50+</h3>
                 <p className="text-sm font-bold text-gray-500 uppercase">Projects</p>
               </div>
               <div>
                 <h3 className="text-4xl font-black text-slate-900">2</h3>
                 <p className="text-sm font-bold text-gray-500 uppercase">Major Offices</p>
               </div>
            </div>
          </motion.div>

          {/* Right: Image (Sticky) */}
          <div className="relative h-full hidden lg:block">
            <div className="sticky top-32">
              <img 
                src={maintenance} 
                alt="Our Story" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-2xl shadow-xl text-white max-w-xs">
                <FaHardHat className="text-4xl mb-4 text-yellow-400" />
                <p className="font-bold text-lg">"We create instant infrastructure that strengthens economies."</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- MISSION & VISION (Dark Mode Grid) --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Vision Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-800 p-10 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
                <FaEye className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To be the leader in integrated infrastructure services. We strive to improve road safety and protection for all users, leveraging technology to connect communities and save lives.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-slate-800 p-10 rounded-3xl border border-slate-700 hover:border-yellow-500 transition-all"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-yellow-500/20">
                <FaBullseye className="text-3xl text-slate-900" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <ul className="space-y-4">
                {[
                  'Simple solutions to global road safety problems.',
                  'Distinguish through listening and learning.',
                  'Create a safe workplace respecting the environment.',
                  'Fair and attractive services for customers.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <FaCheck className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- THE ROADMAP (Timeline) --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">The Journey</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* The "Road" Line - Dashed Yellow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 border-l-4 border-dashed border-yellow-400 hidden md:block opacity-50" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Text Side */}
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-6xl font-black text-gray-200">{item.year}</h3>
                    <h4 className="text-2xl font-bold text-blue-600 -mt-4 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>

                  {/* Center Marker */}
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-slate-900 flex items-center justify-center z-10 shadow-lg">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                  </div>

                  {/* Empty Side for balance */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-16">
            Core <span className="text-blue-600">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-blue-600 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="text-2xl text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;