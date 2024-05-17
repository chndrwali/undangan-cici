'use client';

import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <motion.div className="relative z-10 text-center text-white px-4 max-w-xl" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <p className="text-lg font-semibold">
          {`"`}Semoga Allah memberkahimu dan memberkahi apa yang menjadi tanggung jawabmu, serta menyatukan kalian berdua dalam kebaikan.{`"`}
        </p>
        <p className="mt-4 text-base italic">(HR. Ahmad, at-Tirmidzi, an-Nasa{`'`}i, Abu Dawud, dan Ibnu Majah)</p>
      </motion.div>
    </div>
  );
};

export default QuoteSection;
