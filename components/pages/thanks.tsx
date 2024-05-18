'use client';

import { motion } from 'framer-motion';
import moment from 'moment';
import { Great_Vibes, Redressed } from 'next/font/google';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
});

const Thanks: React.FC = () => {
  return (
    <div className="relative inset-0 min-h-screen bg-home bg-cover bg-center text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div className="relative z-10 flex flex-col items-center text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-2xl font-bold mb-4">
          Kami Yang
          <br />
          <span className="text-4xl font-bold">Berbahagia</span>
        </h1>
        <h2 className={`${greatVibes.className} text-4xl font-semibold mb-4`}>Ari & Cici</h2>

        <div className="max-w-md sm:max-w-xl">
          <p className="text-sm">Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari Hati Yang Tulus Apabila Bapak/Ibu/Saudara/i Berkenan Hadir Untuk Memberikan Do{`'`}a Restu Kepada Kami</p>
        </div>
      </motion.div>

      <footer className="relative z-10 bottom-4 text-white text-center w-full flex items-center justify-center flex-col">
        <span className={`${redressed.className} font-bold text-2xl my-2`}>Azhar Digital</span>
        <p>Digital Wedding Invitation &copy; {moment().format('YYYY')}. All Rights Reserved </p>
        <div className="flex flex-row my-4">
          <Link href="" target="_blank" rel="noreferrer" title="facebook azhar digital" aria-label=" facebook azhar digital" className="mx-2 text-gray-50 hover:text-blue-500  transition duration-300">
            <FaFacebook size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/azr_digital.id/"
            target="_blank"
            rel="noreferrer"
            title="instagram azhar digital"
            aria-label=" instagram azhar digital"
            className="mx-2 text-gray-50 hover:text-blue-500  transition duration-300"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href="https://wa.me/6289652648201?text=Halo, Saya ingin membuat web"
            target="_blank"
            rel="noreferrer"
            title="whatsapp azhar digital"
            aria-label=" whatsapp azhar digital"
            className="mx-2 text-gray-50 hover:text-blue-500  transition duration-300"
          >
            <FaWhatsapp size={20} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Thanks;
