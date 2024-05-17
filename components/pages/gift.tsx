import React from 'react';
import { FaCreditCard, FaGift } from 'react-icons/fa';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

const Gift: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg text-center shadow-lg max-w-lg">
        <div className="mb-6">
          <FaGift className="text-6xl text-gray-800 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Hadiah</h1>
        <h2 className="text-4xl font-semibold mb-4">Pernikahan</h2>
        <p className="mb-6 text-lg">
          Do{`'`}a restu keluarga, sahabat, serta rekan-rekan semua di pernikahan kami sudah sangat cukup sebagai hadiah, tetapi jika memberi merupakan tanda kasih, kami dengan senang hati menerimanya dan tentunya semakin melengkapi
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
                <DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
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
                <DialogDescription>This action cannot be undone. </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Gift;
