'use client';

import { useRef, useState } from 'react';
import ModalVisible from '@/components/ui/Modal';
import MusicButton from '@/components/ui/music-btn';
import PageSlide from '../pages/page-slide';
import Mempelai from '../pages/mempelai';
import Countdown from '../pages/countdown';
import Quotes from '../pages/quotes';
import AkadResepsi from '../pages/akad-resepsi';

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
    <main>
      {isModalVisible ? (
        <ModalVisible isVisible={isModalVisible} onClose={handleCloseModal} />
      ) : (
        <div>
          <PageSlide />
          <Mempelai />
          <Countdown />
          <Quotes />
          <AkadResepsi />
          <button onClick={() => setModalVisible(true)} className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Buka Undangan
          </button>
        </div>
      )}
      <MusicButton audioRef={audioRef} isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
    </main>
  );
};

export default HomePage;
