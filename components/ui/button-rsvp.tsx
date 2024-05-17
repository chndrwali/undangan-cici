// MusicButton.tsx
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

const ButtonRspv = () => {
  return (
    <div
      className={`fixed min-h-[44px] min-w-[44px] z-50 cursor-pointer justify-center items-center bottom-20 p-4 right-6 h-11 w-11 bg-white bg-footer rounded-full shadow shadow-dark/50 hover:shadow-lg hover:shadow-dark/30 hover:opacity-90 transition-all duration-200 ease-in-out `}
    >
      <Link href="#rsvp" className="flex items-center justify-center h-full w-full">
        <MessageCircle size={20} className="line-through" />
      </Link>
    </div>
  );
};

export default ButtonRspv;
