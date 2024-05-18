'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Quotes = () => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 items-center justify-center min-h-screen bg-kertas bg-cover bg-no-repeat text-black overflow-hidden">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }} viewport={{ once: false, amount: 0.5 }} className="flex justify-center">
        <div className="relative z-10 rounded-tr-full rounded-tl-full h-[25rem] shadow-2xl">
          <Image src="/bg/13.jpeg" alt="Wedding Couple" width={300} height={400} className="object-cover rounded-tr-full rounded-tl-full p-2 " />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col items-center text-center relative z-10 px-4"
      >
        <div className="bg-white opacity-50 rounded-lg w-full max-w-[10rem] p-3 flex justify-center items-center">
          <div className="relative z-50">
            <h1 className="text-3xl font-bold text-black">Ari & Cici</h1>
          </div>
        </div>
        <div className="relative z-10 p-8 bg-white bg-opacity-50 rounded-xl shadow-lg mt-4">
          <p className="text-center text-black italic">
            Hai para pemuda! barang siapa di antara kamu sudah mampu kawin, maka kawinlah, Karena dia itu dapat menundukkan pandangan dan menjaga kemaluan. Dan siapa yang belum mampu hendaklah dia berpuasa karena dapat menahan.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Quotes;
