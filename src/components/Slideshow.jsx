import React, { useState } from 'react';

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className='relative'>
      <div className='flex justify-center items-center'>
        <button onClick={prevSlide} className='absolute left-0 text-2xl'>&#8249;</button>
        {slides.map((slide, index) => (
          <div key={index} className={index === current ? 'opacity-100' : 'opacity-0'}>
            {index === current && (
              <>
                <img src={slide.image} alt='slide' className='w-full' />
                <p className='text-xl mt-4'>{slide.description}</p>
              </>
            )}
          </div>
        ))}
        <button onClick={nextSlide} className='absolute right-0 text-2xl'>&#8250;</button>
      </div>
    </div>
  );
};

export default Slideshow;
