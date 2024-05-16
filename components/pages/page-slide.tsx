'use client';

import { ImagesSlider } from '../ui/image-slider';

const PageSlide = () => {
  const images = ['/bg/1.webp', '/bg/2.webp', '/bg/3.webp', '/bg/4.webp', '/bg/5.webp'];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <div className="absolute w-full top-[70%] flex flex-col items-center  text-center z-50 text-white ">
        {' '}
        <h1>PERNIKAHAN</h1>
        <div>
          <span>Ari Agiana</span>
          <span>&</span>
          <span>Cici Febrianti</span>
        </div>
        <div>
          <span>Sabtu</span>
          <span>28. Juni. 2024</span>
        </div>{' '}
      </div>
    </ImagesSlider>
  );
};

export default PageSlide;
