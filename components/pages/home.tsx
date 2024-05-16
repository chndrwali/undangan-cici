'use client';

import { useRef, useState } from 'react';
import ModalVisible from '@/components/ui/Modal';
import MusicButton from '@/components/ui/music-btn';

const HomePage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isModalVisible, setModalVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    togglePlayPause();
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
      <MusicButton audioRef={audioRef} isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
    </main>
  );
};

export default HomePage;
