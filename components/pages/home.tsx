'use client';

import { useState } from 'react';
import ModalVisible from '@/components/ui/Modal';

const HomePage = () => {
  const [isModalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <main className="flex items-center justify-center h-screen bg-gray-200">
      {isModalVisible ? (
        <ModalVisible isVisible={isModalVisible} onClose={handleCloseModal} />
      ) : (
        <div className="text-center">
          <button onClick={() => setModalVisible(true)} className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Buka Undangan
          </button>
          <div className="mt-4">
            {/* Add another component here when modal is closed */}
            <h2 className="text-2xl">Another Component</h2>
            <p className="text-lg">This is shown when the modal is closed.</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default HomePage;
