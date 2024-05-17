import Image from 'next/image';

const Quotes = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-quotes bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="mt-6">
        <Image src="/bg/2.webp" alt="Wedding Couple" width={300} height={300} className="rounded-lg shadow-lg max-w-xs mx-auto" />
      </div>
      <div className="relative z-10 p-8 bg-white bg-opacity-80 rounded-xl shadow-lg flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">A & C</h1>
          <p className="text-center text-gray-800 italic">
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh,
            pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
