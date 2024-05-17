import Image from 'next/image';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';

const AkadResepsi = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <div className="text-center mb-12">
        <h1 className="text-xl font-bold mb-2 space-y-0">
          Akad & Resepsi <br /> <span className="text-4xl font-bold">Pernikahan</span>
        </h1>
        <p className="italic text-xs">
          {`"`}Cintaku kepadamu telah memaktu
          <br />
          Syair ini juga akan membuatku
          <br />
          Yang jelas usianya akan lebih panjang dari usiaku dan usiamu.{`"`}
        </p>
        <p className="mt-4 text-sm">W.S. Rendra</p>
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center flex flex-col items-center">
          <div className="w-full  border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <Image src="/bg/4.webp" alt="Akad" width={300} height={300} className="rounded-lg p-3 object-cover w-full h-[10rem]" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Akad</h2>
          <Separator className="max-w-[5rem]" />
          <p className="text-gray-600 mb-4">Juni</p>
          <p className="text-xl font-semibold mb-2">Sabtu, 22 2024</p>

          <p className="text-gray-600 mb-4">09.00 WIB - Selesai</p>
          <Separator className="max-w-[5rem]" />
          <p className="text-gray-600 mb-4">Lapang Badminton (Agotax)</p>
          <p className="text-gray-600 mb-4">
            Jl. Setrasari Kulon 1<br />
            Sukarasa, Kec. Sukasari
            <br />
            Kota Bandung
          </p>
          <Button asChild className="bg-gray-800 text-white py-2 px-4 rounded-lg">
            <Link href="/" target="_blank">
              Lihat Lokasi
            </Link>
          </Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center flex flex-col items-center">
          <div className="w-full  border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <Image src="/bg/3.webp" alt="Resepsi" width={300} height={300} className="rounded-lg p-3 object-cover w-full h-[10rem]" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Resepsi</h2>
          <Separator className="max-w-[5rem]" />
          <p className="text-gray-600 mb-4">Juni</p>
          <p className="text-xl font-semibold mb-2">Sabtu, 22 2024</p>
          <p className="text-gray-600 mb-4">11.00 WIB - Selesai</p>
          <Separator className="max-w-[5rem]" />
          <p className="text-gray-600 mb-4">Lapang Badminton (Agotax)</p>
          <p className="text-gray-600 mb-4">
            Jl. Setrasari Kulon 1<br />
            Sukarasa, Kec. Sukasari
            <br />
            Kota Bandung
          </p>
          <Button asChild className="bg-gray-800 text-white py-2 px-4 rounded-lg">
            <Link href="/" target="_blank">
              Lihat Lokasi
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AkadResepsi;
