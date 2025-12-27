import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock,
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaChartLine,
  FaGraduationCap,
  FaShieldAlt,
  FaHardHat,
  FaCheck
} from 'react-icons/fa';

// Assets
import teamImage from '../assets/linkway_linemarking_healthsafety-1-1024x683-1-qotj1hvo2gcg24znem7aiql326g489nrh235feiqhg.jpg';
import workerImage from '../assets/erepublic.brightspotcdn-1.jpg'; // Alternate image

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Civil Engineer',
      dept: 'Engineering',
      loc: 'Harare HQ',
      type: 'Full-time',
      exp: '5+ Years',
      desc: 'Lead major road construction projects and supervise engineering teams.',
      tags: ['Civil', 'Management', 'Site']
    },
    {
      id: 2,
      title: 'Road Marking Specialist',
      dept: 'Operations',
      loc: 'Bulawayo',
      type: 'Contract',
      exp: '3+ Years',
      desc: 'Expert in thermoplastic and cold plastic road marking applications.',
      tags: ['Technical', 'Field Work']
    },
    {
      id: 3,
      title: 'QA/QC Manager',
      dept: 'Quality',
      loc: 'Harare HQ',
      type: 'Full-time',
      exp: '7+ Years',
      desc: 'Ensure all projects meet SABS and international quality standards.',
      tags: ['ISO9001', 'Management']
    },
    {
      id: 4,
      title: 'Heavy Machinery Mechanic',
      dept: 'Maintenance',
      loc: 'Site Based',
      type: 'Full-time',
      exp: '4+ Years',
      desc: 'Maintenance and repair of pavers, rollers, and construction fleets.',
      tags: ['Mechanical', 'Diesel']
    }
  ];

  const benefits = [
    { icon: FaChartLine, title: 'Growth', desc: 'Clear progression paths.' },
    { icon: FaHeart, title: 'Health', desc: 'Full medical aid coverage.' },
    { icon: FaGraduationCap, title: 'Training', desc: 'Certification support.' },
    { icon: FaShieldAlt, title: 'Security', desc: 'Stable long-term contracts.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image Half */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
           <img src={teamImage} alt="Team" className="w-full h-full object-cover opacity-40 lg:opacity-100 grayscale hover:grayscale-0 transition-all duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent lg:via-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 rounded-full text-slate-900 font-bold text-xs uppercase mb-6">
                <span className="w-2 h-2 bg-slate-900 rounded-full animate-ping" />
                We Are Hiring
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Legacy</span> With Us.
              </h1>
              
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Join Zimbabwe's premier infrastructure team. We don't just offer jobs; we offer the chance to shape the nation's landscape.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#openings">
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/25">
                    View Open Roles <FaArrowRight />
                  </button>
                </a>
                <Link to="/about">
                  <button className="px-8 py-4 rounded-xl font-bold text-white border border-slate-700 hover:bg-slate-800 transition-all">
                    Our Culture
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CULTURE GRID (Bento Box Style) --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Why Linkmap?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">More than just a paycheck. We build careers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <FaUsers size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-4">A Team Like Family</h3>
                <p className="text-slate-300 text-lg max-w-md">
                  We believe in collaboration over competition. When you join Linkmap, you join a supportive network of professionals dedicated to your success.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-full opacity-20">
                <img src={workerImage} className="w-full h-full object-cover" alt="Worker" />
              </div>
            </motion.div>

            {/* Tall Card */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl"
            >
              <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-slate-900">
                <FaLightbulb size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation First</h3>
              <p className="text-slate-600">
                We work with the latest road construction tech. If you love machines and modern engineering, this is home.
              </p>
            </motion.div>

            {/* Small Benefits Cards */}
            {benefits.map((ben, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all"
              >
                <ben.icon className="text-blue-500 text-2xl mb-3" />
                <h4 className="font-bold text-slate-900">{ben.title}</h4>
                <p className="text-sm text-slate-500">{ben.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOB LISTINGS (Technical Style) --- */}
      <section id="openings" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900">Current Openings</h2>
              <p className="text-slate-500 mt-2">Find your next role.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-sm font-bold bg-green-100 text-green-700 px-4 py-2 rounded-full">
                {jobOpenings.length} Positions Available
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{job.dept}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="text-xs font-bold text-slate-500">{job.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                      <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.loc}</span>
                      <span className="flex items-center gap-1"><FaClock /> {job.exp}</span>
                    </div>
                  </div>

                  {/* Tags & Action */}
                  <div className="flex flex-col items-end gap-4">
                    <div className="flex gap-2">
                       {job.tags.map((tag, i) => (
                         <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-bold">
                           {tag}
                         </span>
                       ))}
                    </div>
                    <Link to="/contact">
                      <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPLICATION PIPELINE --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">The Hiring Pipeline</h2>
            <p className="text-slate-400">Streamlined process from application to onboarding.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-800" />
            
            {[
              { step: '01', title: 'Apply', icon: FaBriefcase },
              { step: '02', title: 'Screening', icon: FaCheck },
              { step: '03', title: 'Interview', icon: FaUsers },
              { step: '04', title: 'Offer', icon: FaHardHat },
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center mb-6 group-hover:border-yellow-500 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="text-3xl text-slate-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-500 text-sm mt-2">Step {item.step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GENERAL CTA --- */}
      <section className="py-20 bg-yellow-400 text-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-6">Don't see your role?</h2>
          <p className="text-lg font-medium mb-8">
            We are always looking for talent. Send us your CV and we'll keep it on file for future projects.
          </p>
          <Link to="/contact">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all shadow-xl">
              Contact HR Department
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Careers;