'use client';

import { motion } from 'framer-motion';

const Thanks: React.FC = () => {
  return (
    <div className="relative inset-0 min-h-screen bg-home bg-cover bg-center text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div className="relative z-10 flex flex-col items-center text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-3xl font-bold mb-4">Kami Yang Berbahagia</h1>
        <h2 className="text-2xl font-semibold mb-4">Ari & Cici</h2>
        <p className="mb-4">Turut Mengundang:</p>
        <ul className="list-none mb-4">
          <li>- Bpk. Ade</li>
          <li>- Bpk. Eman</li>
          <li>- Bpk. Acin</li>
          <li>- Kel. Bpk. Oto (Alm)</li>
          <li>- Kel. Bpk. Emet (Alm)</li>
          <li>- Kel. Ma Anah (Alm)</li>
          <li>- Ma Anni</li>
        </ul>
        <div className="max-w-md sm:max-w-xl">
          <p className="text-sm">Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari Hati Yang Tulus Apabila Bapak/Ibu/Saudara/i Berkenan Hadir Untuk Memberikan Do{`'`}a Restu Kepada Kami</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Thanks;
