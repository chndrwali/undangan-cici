'use client';

import { Button } from '@/components/ui/button';

interface ModalVisibleProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalVisible: React.FC<ModalVisibleProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-home bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center text-white text-center bg-black bg-opacity-75 p-4 rounded">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">THE WEDDING OF</h1>
        <Button variant="outline" onClick={onClose} className="text-black">
          Buka Undangan
        </Button>
        <p className="text-lg md:text-xl">Saturday</p>
        <p className="text-lg md:text-xl">22. June. 2024</p>
      </div>
    </div>
  );
};

export default ModalVisible;
