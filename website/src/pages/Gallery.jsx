import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaCamera, 
  FaExpand, 
  FaTag 
} from 'react-icons/fa';

// Assets
import img1 from '../assets/images.jpg';
import img2 from '../assets/erepublic.brightspotcdn-1.jpg';
import img3 from '../assets/Maintenance-of-Road.jpg';
import img4 from '../assets/1659496063279.jpg';
import img5 from '../assets/linkway_linemarking_healthsafety-1-1024x683-1-qotj1hvo2gcg24znem7aiql326g489nrh235feiqhg.jpg';
import img6 from '../assets/istockphoto-474221742-612x612-1-qotj1hvo2gcg24znem7aiql326g489nrh235feiqhg.jpg';
import img7 from '../assets/types-of-asphalt-2-1024x839-1-qotj1hvo20jkqe2p3pyw3upe3vs9epkgaxr0ynlu4w.jpeg';
import img8 from '../assets/pavement-marking-guide.jpg';
import img9 from '../assets/traffic-zone-urban-road-sign-prohibition-signs.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Shots' },
    { id: 'construction', label: 'Construction' },
    { id: 'safety', label: 'Safety & Signs' },
    { id: 'equipment', label: 'Machinery' },
  ];

  // Assigned clearer categories for the demo
  const galleryItems = [
    { id: 1, image: img1, title: 'Highway Foundation', category: 'construction', date: 'Oct 2023' },
    { id: 2, image: img2, title: 'Safety Protocol', category: 'safety', date: 'Nov 2023' },
    { id: 3, image: img3, title: 'Resurfacing Works', category: 'construction', date: 'Jan 2024' },
    { id: 4, image: img4, title: 'Heavy Loading', category: 'equipment', date: 'Feb 2024' },
    { id: 5, image: img5, title: 'Precision Marking', category: 'safety', date: 'Mar 2024' },
    { id: 6, image: img6, title: 'Site Logistics', category: 'equipment', date: 'Mar 2024' },
    { id: 7, image: img7, title: 'Asphalt Mix', category: 'construction', date: 'Apr 2024' },
    { id: 8, image: img8, title: 'Lane Definition', category: 'safety', date: 'May 2024' },
    { id: 9, image: img9, title: 'Urban Signage', category: 'safety', date: 'Jun 2024' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Keyboard Navigation
  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  }, [selectedImage, currentIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (item) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setCurrentIndex(index);
    setSelectedImage(item);
  };

  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 px-4 bg-slate-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 skew-x-12 opacity-50 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-mono mb-6">
              <FaCamera /> ARCHIVE // 2021-2024
           </div>
           <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
             Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Record</span>
           </h1>
           <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
             A photographic journey through our infrastructure development across Zimbabwe.
           </p>
        </div>
      </section>

      {/* --- FILTER BAR (Sticky) --- */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 bg-slate-100 p-1 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-slate-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- MASONRY GRID --- */}
      <section className="py-12 px-4 max-w-7xl mx-auto min-h-[50vh]">
        {/* Using CSS Columns for true Masonry layout 
           (Items flow down columns, not rows)
        */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group cursor-zoom-in rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <FaExpand className="text-slate-900" />
                    </div>
                  </div>
                </div>

                {/* Bottom Info Strip */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <h3 className="text-white font-bold text-lg">{item.title}</h3>
                   <div className="flex items-center gap-2 text-slate-300 text-xs font-mono mt-1">
                     <FaTag size={10} />
                     <span className="uppercase">{item.category}</span>
                     <span>•</span>
                     <span>{item.date}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl font-light">No images found in this category.</p>
          </div>
        )}
      </section>

      {/* --- IMMERSIVE LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col"
          >
            {/* Top Toolbar */}
            <div className="flex justify-between items-center p-6 text-white/50">
               <div className="text-sm font-mono">
                  IMG_00{selectedImage.id} // {currentIndex + 1} OF {filteredItems.length}
               </div>
               <button 
                 onClick={closeLightbox}
                 className="p-2 hover:text-white hover:bg-white/10 rounded-full transition-colors"
               >
                 <FaTimes size={24} />
               </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center relative px-4 md:px-20">
              
              {/* Prev Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 md:left-8 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all hidden md:block"
              >
                <FaChevronLeft size={24} />
              </button>

              <motion.img 
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] max-w-full object-contain shadow-2xl rounded-sm"
              />

              {/* Next Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 md:right-8 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all hidden md:block"
              >
                <FaChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Metadata */}
            <div className="p-8 text-center md:text-left">
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 className="max-w-4xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
               >
                 <div>
                   <h2 className="text-3xl font-bold text-white mb-1">{selectedImage.title}</h2>
                   <p className="text-blue-400 font-mono text-sm uppercase tracking-wider">{selectedImage.category} Collection</p>
                 </div>
                 
                 <div className="flex gap-8 text-sm font-mono text-gray-400">
                    <div>
                      <span className="block text-gray-600 text-xs">DATE</span>
                      {selectedImage.date}
                    </div>
                    <div>
                      <span className="block text-gray-600 text-xs">LOCATION</span>
                      Zimbabwe
                    </div>
                 </div>
               </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CTA --- */}
      <section className="py-20 bg-white border-t border-gray-100 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">See our work in person?</h2>
        <a href="/contact" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
          Schedule a Site Visit
        </a>
      </section>

    </div>
  );
};

export default Gallery;