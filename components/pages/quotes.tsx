import Image from 'next/image';

const Quotes = () => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 items-center justify-center min-h-screen bg-quotes bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" flex justify-center">
        <div className="relative z-10 rounded-tr-full rounded-tl-full  h-[25rem] shadow-2xl">
          <Image src="/bg/6.png" alt="Wedding Couple" width={300} height={400} className="object-fit rounded-tr-full rounded-tl-full p-2 " />
        </div>
      </div>
      <div className="flex flex-col items-center text-center relative z-10 px-4">
        <div className="bg-white opacity-50 rounded-lg w-full max-w-[10rem] p-3 flex justify-center items-center">
          <div className="relative z-50">
            <h1 className="text-3xl font-bold text-gray-800">A & C</h1>
          </div>
        </div>
        <div className="relative z-10 p-8 bg-white bg-opacity-50 rounded-xl shadow-lg mt-4">
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
