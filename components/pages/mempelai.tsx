'use client';

import Image from 'next/image';
import { Lora } from 'next/font/google';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

const lora = Lora({ subsets: ['latin'] });

const Mempelai = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <motion.div className="text-center max-w-6xl p-6 rounded-lg shadow-lg bg-kertas bg-no-repeat bg-cover" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={containerVariants}>
        <motion.h1 className="text-xl sm:text-2xl font-semibold mb-4" variants={itemVariants}>
          Pasangan <br /> <span className="text-3xl sm:text-5xl font-bold">Mempelai</span>
        </motion.h1>
        <motion.p className={`${lora.className} text-gray-600 mb-8`} variants={itemVariants}>
          Maha Suci Allah Subhanahu wa Ta{"'"}ala yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah dan Ridhoilah Pernikahan Kami.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-6 sm:space-y-0 sm:space-x-6" variants={containerVariants}>
          <motion.div className="grid grid-cols-2 items-center text-center" variants={itemVariants}>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mt-4">Ari Agiana</h2>
              <Separator className="my-2 max-w-[100px]" />
              <p className="text-gray-500 text-xs">Putra Kedua</p>
              <p className="text-gray-500 text-xs">Bpk. Asep Kusnadi & Ibu Noneng Dewi </p>
              <Link href="https://www.instagram.com/ariagiana" target="_blank" className="mt-2">
                <Instagram size={15} />
              </Link>
            </div>
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
              <Image src="/bg/5.webp" alt="Ari Agiana" width={300} height={300} className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div className="flex items-center text-3xl font-semibold mx-4" variants={itemVariants}>
            &
          </motion.div>
          <motion.div className="grid grid-cols-2 items-center text-center" variants={itemVariants}>
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
              <Image src="/bg/1.webp" alt="Cici Febrianti" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mt-4">Cici Febrianti</h2>
              <Separator className="my-2 max-w-[100px]" />
              <p className="text-gray-500 text-xs">Putri Kedua</p>
              <p className="text-gray-500 text-xs">Bpk. Dedi Suryana & Ibu Ratinah</p>
              <Link href="https://www.instagram.com/febiaaaaa" target="_blank" className="mt-2">
                <Instagram size={15} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mempelai;
