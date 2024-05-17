'use client';

import { ImagesSlider } from '../ui/image-slider';
import { Separator } from '../ui/separator';

const PageSlide = () => {
  const images = ['/bg/1.webp', '/bg/2.webp', '/bg/3.webp', '/bg/4.webp', '/bg/5.webp'];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <div className="absolute w-full top-[70%] flex flex-col items-center  text-center z-50 text-white ">
        {' '}
        <h1>PERNIKAHAN</h1>
        <div className="text-xl sm:text-3xl space-x-2">
          <span>Ari</span>
          <span>&</span>
          <span>Cici</span>
        </div>
        <Separator className="max-w-[10rem] bg-white mt-4" />
        <div className="text-sm sm:text-2xl space-x-2">
          <span>22.</span>
          <span>Juni.</span>
          <span>2024</span>
        </div>{' '}
      </div>
    </ImagesSlider>
  );
};

export default PageSlide;
