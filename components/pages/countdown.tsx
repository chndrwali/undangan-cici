'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-06-22T08:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDaysLeft(days);
      setHoursLeft(hours);
      setMinutesLeft(minutes);
      setSecondsLeft(seconds);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
    <div className="relative inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-countdown text-white overflow-hidden">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 0.5 }} className="absolute inset-0 bg-black opacity-40"></motion.div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={containerVariants} className="text-xl font-bold mb-4">
          Hitung Mundur <br />
          <span className="text-4xl font-black">Hari Bahagia Kami</span>
        </motion.h1>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={containerVariants} className="flex space-x-4 text-center">
          <motion.div className="p-4 bg-black rounded-full" variants={itemVariants}>
            <span className="text-xl font-bold">{daysLeft.toString().padStart(2, '0')}</span>
            <span className="block text-xs">Hari</span>
          </motion.div>
          <motion.div className="p-4 bg-black rounded-full" variants={itemVariants}>
            <span className="text-xl font-bold">{hoursLeft.toString().padStart(2, '0')}</span>
            <span className="block text-xs">Jam</span>
          </motion.div>
          <motion.div className="p-4 bg-black rounded-full" variants={itemVariants}>
            <span className="text-xl font-bold">{minutesLeft.toString().padStart(2, '0')}</span>
            <span className="block text-xs">Menit</span>
          </motion.div>
          <motion.div className="p-4 bg-black rounded-full" variants={itemVariants}>
            <span className="text-xl font-bold">{secondsLeft.toString().padStart(2, '0')}</span>
            <span className="block text-xs">Detik</span>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={containerVariants} className="w-full max-w-[20rem]">
          <p className="mt-4 text-center text-sm italic">
            {`"`}Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi
            tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir.{`"`}
          </p>
          <p className="mt-2 text-center">- Q.S. Ar-Rum: 21 -</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;
