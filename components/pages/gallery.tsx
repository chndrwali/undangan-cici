'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = ['/bg/1.webp', '/bg/2.webp', '/bg/3.webp', '/bg/4.webp'];
  const images2 = ['/bg/5.webp', '/bg/22.jpeg', '/bg/7.jpeg'];
  const images3 = [
    '/bg/8.jpeg',
    '/bg/12.jpeg',
    '/bg/10.jpeg',
    '/bg/25.jpeg',
    '/bg/13.jpeg',
    '/bg/14.jpeg',
    '/bg/15.jpeg',
    '/bg/16.jpeg',
    '/bg/17.jpeg',
    '/bg/18.jpeg',
    '/bg/19.jpeg',
    '/bg/20.jpeg',
    '/bg/24.jpeg',
    '/bg/26.jpeg',
    '/bg/27.jpeg',
    '/bg/bg.png',
    '/bg/29.jpeg',
    '/bg/30.jpeg',
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center py-12 overflow-hidden">
      <div className="max-w-xl sm:max-w-4xl">
        <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-xl font-bold mb-8">
            Momen <br />
            <span className="text-3xl font-black">Bahagia Kami</span>
          </h1>
          <div className="w-full max-w-md mb-8">
            <Image src="/bg/6.png" alt="Main" width={400} height={800} className="rounded-lg object-cover px-4" />
          </div>
        </motion.div>
        <motion.div className="grid grid-cols-4 gap-4 mb-4 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}>
          {images.map((src, index) => (
            <motion.div key={index} className="w-full h-48" whileHover={{ scale: 1.05 }}>
              <Image src={src} alt={`Momen ${index + 1}`} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="grid grid-cols-3 gap-4 mb-4 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}>
          {images2.map((src, index) => (
            <motion.div key={index} className="w-full h-48" whileHover={{ scale: 1.05 }}>
              <Image src={src} alt={`Momen ${index + 1}`} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="grid grid-cols-2 gap-4 mb-4 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}>
          {images3.map((src, index) => (
            <motion.div key={index} className="w-full h-48" whileHover={{ scale: 1.05 }}>
              <Image src={src} alt={`Momen ${index + 1}`} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
