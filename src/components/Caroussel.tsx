import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

type Props = {
  images: string[]
}

const ImageCarousel: React.FC<Props> = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-300 items-center"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((name, index) => {
            const image = require(`@/assets/projects/${name}`)
            const width = image.default.width
            const height = image.default.height
            return (
              <div key={index} className="flex min-w-full justify-center">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={400}
                  className={`${width < height ? 'h-auto max-w-[50%]' : 'h-[300px] max-w-full'} object-cover`}
                />
              </div>
            )
          })}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white"
        onClick={prevSlide}
      >
        <MdOutlineArrowBackIosNew size={20} />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white"
        onClick={nextSlide}
      >
        <MdArrowForwardIos size={20} />
      </button>
      <div className="flex justify-center items-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
