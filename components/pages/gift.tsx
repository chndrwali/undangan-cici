'use client';

import { toast } from 'react-hot-toast';
import { Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaGift } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Gift: React.FC = () => {
  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast.success('Rekening disalin ke clipboard.');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <motion.div className="bg-white p-8 rounded-lg text-center shadow-lg max-w-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-6">
          <FaGift className="text-6xl text-gray-800 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Hadiah</h1>
        <h2 className="text-4xl font-semibold mb-4">Pernikahan</h2>
        <p className="mb-6 text-lg">
          Do{'a'} restu keluarga, sahabat, serta rekan-rekan semua di pernikahan kami sudah sangat cukup sebagai hadiah, tetapi jika memberi merupakan tanda kasih, kami dengan senang hati menerimanya dan tentunya semakin melengkapi
          kebahagiaan kami.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Dialog>
            <DialogTrigger className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
              <FaCreditCard />
              <span>Cashless</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dompet Digital</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner w-full text-center">
                      <div className="flex items-center justify-center">
                        <p className="font-medium text-lg">5140660291</p>
                        <Button className="ml-2" variant="outline" size="sm" onClick={() => onCopy('5140660291')}>
                          <Copy className="h-4 w-4 text-black" />
                          <span className="hidden sm:block ml-2">Salin</span>
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">A.N Cici Febrianti</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner w-full text-center">
                      <div className="flex items-center justify-center">
                        <p className="font-medium text-lg">1234567890</p>
                        <Button className="ml-2" variant="outline" size="sm" onClick={() => onCopy('1234567890')}>
                          <Copy className="h-4 w-4 text-black" />
                          <span className="hidden sm:block ml-2">Salin</span>
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">A.N John Doe</p>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
              <FaGift />
              <span>Gift & Flower</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Kirim kado ke Alamat</DialogTitle>
                <DialogDescription>Silakan kirim kado dan bunga ke alamat berikut: [alamat lengkap].</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </div>
  );
};

export default Gift;
