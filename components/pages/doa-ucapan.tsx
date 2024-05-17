// components/DoaUcapan.tsx
import React from 'react';

const DoaUcapan = () => {
  const comments = [
    { name: 'Jihan Hakiki', message: 'Lancar sampai hari-H ahip 😊' },
    {
      name: 'Siti Hasanah',
      message:
        "Wilujeung ngahiji sagara kahirupan anu enggal, sarareug nganwangun rumah tangga anu sakinah mawaddah warahmah, sing bagja di dun'ya parat dugi ka surga, kalayan enggal di paparira putra/putri anu soleh solehah..amiin allohumma amiin",
    },
    { name: 'Triana Maulida Sari', message: 'Selamat menempuh hidup baru, semoga langgeng hingga akhir hayat, aamiin..' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 opacity-90"></div>
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-xl font-bold">
          Doa & Ucapan untuk <br />
          <span className="text-4xl font-black">Pasangan Mempelai</span>{' '}
        </h1>
        <div className="max-w-xl">
          <p className="mt-4 text-lg text-gray-700">Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir, untuk memberikan doa restu kepada kedua mempelai.</p>
        </div>
      </div>
      <div className="bg-black rounded-xl p-8">
        <div className="relative z-10 w-full max-w-lg sm:max-w-3xl bg-white p-4 rounded-xl shadow-lg">
          <form className="mb-8">
            <div className="mb-4">
              <input type="text" placeholder="Nama Anda" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Berikan Ucapan Dan Doa Restu" className="w-full p-3 border border-gray-300 rounded-lg" rows={4}></textarea>
            </div>
            <div className="mb-4">
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="">Konfirmasi Kehadiran</option>
                <option value="yes">Ya</option>
                <option value="no">Tidak</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-brown-500 text-white p-3 rounded-lg">
              Kirim
            </button>
          </form>
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold text-gray-900">{comment.name}</h2>
                <p className="text-gray-700">{comment.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoaUcapan;
