import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaArrowRight,
  FaHardHat,
  FaRoad,
  FaCity,
  FaIndustry,
  FaTrophy,
  FaCheckCircle
} from 'react-icons/fa';

// Assets
import img1 from '../assets/images.jpg';
import img2 from '../assets/erepublic.brightspotcdn-1.jpg';
import img3 from '../assets/Maintenance-of-Road.jpg';
import img4 from '../assets/1659496063279.jpg';
import img5 from '../assets/pavement-marking-guide.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    { name: 'All', icon: FaTrophy },
    { name: 'Highways', icon: FaRoad },
    { name: 'Urban', icon: FaCity },
    { name: 'Industrial', icon: FaIndustry },
  ];

  const projects = [
    {
      id: 1,
      title: 'Harare-Mutare Highway Upgrade',
      category: 'Highways',
      location: 'Harare to Mutare',
      duration: '8 months',
      year: '2024',
      image: img1,
      desc: 'Complete highway resurfacing including modern road markings, cat-eyes installation, and safety signage implementation.',
      tags: ['Hot Mix Asphalt', 'Safety Markings', 'Signage'],
      status: 'Completed',
      stats: { length: '215 km', team: '45+', budget: '$2.5M' }
    },
    {
      id: 2,
      title: 'Bulawayo CBD Safety Project',
      category: 'Urban',
      location: 'Bulawayo Central',
      duration: '4 months',
      year: '2023',
      image: img2,
      desc: 'Comprehensive urban renewal project focusing on pedestrian safety, intersection markings, and traffic flow optimization.',
      tags: ['Urban Planning', 'Road Markings', 'Traffic Logic'],
      status: 'Completed',
      stats: { length: '45 km', team: '30+', budget: '$850K' }
    },
    {
      id: 3,
      title: 'Victoria Falls Tourism Route',
      category: 'Highways',
      location: 'Victoria Falls',
      duration: '6 months',
      year: '2023',
      image: img3,
      desc: 'Premium road construction ensuring smooth access for tourists. Specialized aesthetic paving and environmentally sensitive execution.',
      tags: ['Eco-Paving', 'Scenic Route', 'Maintenance'],
      status: 'Completed',
      stats: { length: '78 km', team: '35+', budget: '$1.8M' }
    },
    {
      id: 4,
      title: 'Gweru Industrial Zone',
      category: 'Industrial',
      location: 'Gweru Industrial',
      duration: '5 months',
      year: '2024',
      image: img4,
      desc: 'Heavy-duty road construction designed to withstand high-tonnage industrial logistics and machinery traffic.',
      tags: ['Heavy Duty', 'Industrial Access', 'Concrete'],
      status: 'In Progress',
      stats: { length: '32 km', team: '40+', budget: '$1.2M' }
    },
    {
      id: 5,
      title: 'Masvingo Provincial Roads',
      category: 'Highways',
      location: 'Masvingo Province',
      duration: '12 months',
      year: '2024',
      image: img5,
      desc: 'Large scale provincial connectivity project upgrading gravel roads to surfaced standards with full signage.',
      tags: ['Provincial', 'Signage', 'Civil Works'],
      status: 'In Progress',
      stats: { length: '156 km', team: '50+', budget: '$3M' }
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 opacity-40">
           <img src={img4} alt="Projects Hero" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        {/* Grid Overlay for "Blueprint" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-blue-500/50 bg-blue-500/10 backdrop-blur-md rounded-full px-6 py-2 mb-6">
              <span className="text-blue-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                <FaHardHat /> Engineering Portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Endure.</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              A showcase of infrastructure excellence across Zimbabwe. From urban centers to provincial highways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER & PROJECTS --- */}
      <section className="py-20 px-4 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                  filter === cat.name 
                    ? 'bg-blue-600 text-white scale-105 shadow-blue-600/30' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                <cat.icon /> {cat.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-12">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Projects Done', val: '100+' },
            { label: 'Happy Clients', val: '50+' },
            { label: 'Km Covered', val: '500+' },
            { label: 'Provinces', val: '8' }
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <h3 className="text-4xl font-black text-yellow-400 mb-2">{stat.val}</h3>
              <p className="text-slate-400 text-sm uppercase tracking-wider font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Have a Project in Mind?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Whether it's a municipal road upgrade or a private industrial access route, we have the expertise to deliver.
          </p>
          <Link to="/contact">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

// --- SUB-COMPONENT: The "Blueprint" Card ---
const ProjectCard = ({ project }) => {
  const isCompleted = project.status === 'Completed';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
        
        {/* Left: Image (7 cols) */}
        <div className="lg:col-span-7 relative overflow-hidden h-64 lg:h-full">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent lg:hidden" />
          
          {/* Status Badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className={`w-3 h-3 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">{project.status}</span>
          </div>
        </div>

        {/* Right: Content (5 cols) */}
        <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-white relative">
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 rounded-bl-[4rem] -z-0" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-sm font-bold text-slate-500">
              <span className="text-blue-600">#{project.year}</span>
              <span>•</span>
              <span className="uppercase">{project.category}</span>
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Specs Grid (The "Blueprint" part) */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
            <div className="grid grid-cols-3 gap-4 divide-x divide-slate-200">
              <div className="text-center px-2">
                <FaRoad className="mx-auto text-blue-500 mb-2" />
                <div className="font-black text-slate-900">{project.stats.length}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Distance</div>
              </div>
              <div className="text-center px-2">
                <FaHardHat className="mx-auto text-blue-500 mb-2" />
                <div className="font-black text-slate-900">{project.stats.team}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Crew</div>
              </div>
              <div className="text-center px-2">
                <FaCheckCircle className="mx-auto text-green-500 mb-2" />
                <div className="font-black text-slate-900">{project.stats.budget}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Budget</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Projects;