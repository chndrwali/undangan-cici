import Image from 'next/image';

const Thanks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-lg">
        <Image src="/path/to/your/image.jpg" alt="Wedding Couple" width={500} height={500} className="rounded-lg mx-auto mb-6" />
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
        <p className="text-sm">Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari Hati Yang Tulus Apabila Bapak/Ibu/Saudara/i Berkenan Hadir Untuk Memberikan Do{`'`}a Restu Kepada Kami</p>
      </div>
    </div>
  );
};

export default Thanks;
