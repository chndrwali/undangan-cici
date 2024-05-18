'use client';

import { Great_Vibes, Lora } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Undangan from './undangan';

interface ModalVisibleProps {
  isVisible: boolean;
  onClose: () => void;
}

const GV = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
});

const lora = Lora({
  subsets: ['latin'],
  weight: '400',
});

const ModalVisible: React.FC<ModalVisibleProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-home bg-cover bg-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 0.5 }} className="absolute inset-0 bg-black opacity-50"></motion.div>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="relative z-10 flex flex-col items-center text-white text-center p-4">
        <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className={` text-3xl md:text-5xl font-bold italic mb-4`}>
          PERNIKAHAN
        </motion.h1>
        <div className="flex items-center space-y-2 space-x-2 mb-6">
          <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="relative flex-shrink-0 bg-white text-primary p-2 rounded-sm">
            <span className={`${GV.className} text-2xl md:text-3xl font-bold italic`}>Ari Agiana</span>
            <div className="absolute left-0 right-0 -bottom-2 border-t-2 border-white"></div>
          </motion.div>
          <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="text-2xl md:text-3xl font-bold italic">
            &
          </motion.div>
          <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} className="relative flex-shrink-0 bg-white text-primary p-2 rounded-sm">
            <div className="absolute left-0 right-0 -top-2 border-t-2 border-white"></div>
            <span className={`${GV.className} text-2xl md:text-3xl font-bold italic`}>Cici Febrianti</span>
          </motion.div>
        </div>
        <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className="my-4">
          <p className={`${lora.className} text-base md:text-xl`}>Yth. Bapak/Ibu/Saudara/I</p>
          <Suspense fallback={<span>Loading...</span>}>
            <Undangan />
          </Suspense>
          <p className={`${lora.className} text-xs md:text-base`}>
            Tanpa mengurangi rasa hormat, <br />
            kami mengundang anda untuk menghadiri <br /> acara pernikahan kami.
          </p>
        </motion.div>
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
          <Button onClick={onClose} className="text-black rounded-full bg-white hover:bg-transparent hover:text-white border hover:border-blue-500">
            Buka Undangan
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModalVisible;
