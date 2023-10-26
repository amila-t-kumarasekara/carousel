import React from 'react';

const Slide = ({ image, title, subtitle, index, currentIndex, transition }) => {
  const active = index === currentIndex;

  const slideStyle = {
    transform: `translateX(${100 * (index - currentIndex)}%)`,
    transition: transition === 'slide' ? 'transform 0.5s ease' : 'opacity 0.5s ease',
  };

  const imageStyle = {
    position: 'relative',
  };

  const contentStyle = {
    position: 'absolute',
    bottom: '90px',
    left: '0',
    right: '0',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <div style={slideStyle} className={`slide ${active ? 'block' : 'hidden'}`}>
      <div style={imageStyle}>
        <img src={`data:image/png;base64,${image}`} alt={title}  style={{ maxWidth: '100%', height: 'auto' }}/>
        <div className='flex flex-col capitalize gap-3' style={contentStyle}>
          <h2 className='font-bold text-[31px]'>{title}</h2>
          <p className='text-[17px]'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
