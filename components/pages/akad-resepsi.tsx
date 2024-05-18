'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import useCountUp from '@/lib/count';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { MapPin, Navigation } from 'lucide-react';
import useIntersectionObserver from '@/lib/hooks';

const AkadResepsi = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const count = useCountUp(22, 4, isIntersecting ? 'inView' : 'outOfView');

  return (
    <div ref={ref} className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }} viewport={{ once: false, amount: 0.5 }} className="text-center mb-12">
        <h1 className="text-xl font-bold mb-2 space-y-0">
          Akad & Resepsi <br /> <span className="text-4xl font-bold">Pernikahan</span>
        </h1>
        <p className="italic text-xs">
          {`"`}Cintaku kepadamu telah mewaktu
          <br />
          Syair ini juga akan mewaktu
          <br />
          Yang jelas usianya akan lebih panjang dari usiaku dan usiamu.{`"`}
        </p>
        <p className="mt-4 text-sm">W.S. Rendra</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center flex flex-col items-center"
        >
          <div className="w-full border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <Image src="/bg/12.jpeg" alt="Akad" width={300} height={300} className="rounded-lg p-3 object-cover w-full h-[10rem]" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Akad</h2>
          <Separator className="max-w-[5rem]" />
          <p className="text-gray-600 mb-4">Juni</p>
          <p className="text-xl mb-2 space-x-2">
            <span>Sabtu,</span>
            <span className="font-bold text-2xl ">{count}</span>
            <span>2024</span>
          </p>
          <p className="text-gray-600 mb-4">09.00 WIB - Selesai</p>
          <Separator className="max-w-[5rem] mb-4" />
          <div>
            <MapPin size={25} />
          </div>
          <p className="text-gray-600 font-bold mb-4">GSG Desa Ciwaruga</p>
          <p className="text-gray-600 mb-4">
            Ciwaruga, Kec. Parongpong,
            <br /> Kabupaten Bandung Barat,
            <br />
            Jawa Barat 40559
          </p>
          <Button asChild className="bg-gray-800 text-white py-2 px-4 rounded-lg">
            <Link href="https://maps.app.goo.gl/hCzcdL22RQqoijks9" target="_blank">
              <Navigation size={20} className="mr-2" /> Lihat Lokasi
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center flex flex-col items-center"
        >
          <div className="w-full border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <Image src="/bg/22.jpeg" alt="Resepsi" width={300} height={300} className="rounded-lg p-3 object-cover w-full h-[10rem]" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Resepsi</h2>
          <Separator className="max-w-[5rem]" />
          <p className="text-gray-600 mb-4">Juni</p>
          <p className="text-xl mb-2 space-x-2">
            <span>Sabtu,</span>
            <span className="font-bold text-2xl ">{count}</span>
            <span>2024</span>
          </p>
          <p className="text-gray-600 mb-4">11.00 WIB - Selesai</p>
          <Separator className="max-w-[5rem] mb-4" />
          <div>
            <MapPin size={25} />
          </div>
          <p className="text-gray-600 mb-4 font-bold">GSG Desa Ciwaruga</p>
          <p className="text-gray-600 mb-4">
            Ciwaruga, Kec. Parongpong,
            <br /> Kabupaten Bandung Barat,
            <br />
            Jawa Barat 40559
          </p>
          <Button asChild className="bg-gray-800 text-white py-2 px-4 rounded-lg">
            <Link href="https://maps.app.goo.gl/hCzcdL22RQqoijks9" target="_blank">
              <Navigation size={20} className="mr-2" /> Lihat Lokasi
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AkadResepsi;
