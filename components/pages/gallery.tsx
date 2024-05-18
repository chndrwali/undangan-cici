'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = ['/bg/25.jpeg', '/bg/8.jpeg', '/bg/12.jpeg', '/bg/10.jpeg'];
  const images2 = ['/bg/13.jpeg', '/bg/22.jpeg', '/bg/14.jpeg'];
  const images3 = ['/bg/15.jpeg', '/bg/16.jpeg', '/bg/18.jpeg', '/bg/19.jpeg', '/bg/20.jpeg', '/bg/24.jpeg', '/bg/26.jpeg', '/bg/27.jpeg', '/bg/29.jpeg', '/bg/30.jpeg'];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center py-12 overflow-hidden">
      <div className="max-w-xl sm:max-w-4xl">
        <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-xl font-bold mb-8">
            Momen <br />
            <span className="text-3xl font-black">Bahagia Kami</span>
          </h1>
          <div className="w-full max-w-md mb-8">
            <Image src="/bg/22.jpeg" alt="Main" width={400} height={800} className="rounded-lg object-cover px-4" />
          </div>
        </motion.div>
        <motion.div className="grid grid-cols-4 gap-4 mb-4 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}>
          {images.map((src, index) => (
            <motion.div key={index} className="relative w-full h-48" whileHover={{ scale: 1.05 }} onClick={() => setSelectedImage(src)}>
              <Image src={src} alt={`Momen ${index + 1}`} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="grid grid-cols-3 gap-4 mb-4 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}>
          {images2.map((src, index) => (
            <motion.div key={index} className="relative w-full h-48" whileHover={{ scale: 1.05 }} onClick={() => setSelectedImage(src)}>
              <Image src={src} alt={`Momen ${index + 1}`} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="grid grid-cols-2 gap-4 mb-4 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}>
          {images3.map((src, index) => (
            <motion.div key={index} className="relative w-full h-48" whileHover={{ scale: 1.05 }} onClick={() => setSelectedImage(src)}>
              <Image src={src} alt={`Momen ${index + 1}`} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative">
            <Image src={selectedImage} alt="Selected" width={800} height={600} className="rounded-lg" />
            <button className="absolute top-2 right-2 text-white text-xl" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
