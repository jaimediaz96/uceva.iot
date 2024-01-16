import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Carousel = () => {
  const images = [
    "../../../public/example1.png",
    "../../../public/example2.png",
    "../../../public/example3.png",
    "../../../public/example4.png",
    "../../../public/example5.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  function nextImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function prevImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className='flex items-center w-full h-3/4'>
      <button
        className="hover:bg-gray-100"
        onClick={prevImage}
      >
        <ChevronLeftIcon className="h-8 w-8 text-black" />
      </button>
      <figure className="w-full h-4/5 mb-2">
        <img
          className="w-full h-full object-contain rounded-lg"
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
      </figure>
      <button
        className="hover:bg-gray-100"
        onClick={nextImage}
      >
        <ChevronRightIcon className="h-8 w-8 text-black" />
      </button>
    </div>
  );
};

export default Carousel;