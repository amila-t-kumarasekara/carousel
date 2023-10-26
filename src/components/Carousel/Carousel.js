import React, { useState, useEffect } from 'react';
import Slide from '../Slide/Slide';
import ArrowButton from '../ArrowButton/ArrowButton';
import axios from 'axios';
import { toast } from 'react-toastify';

const Carousel = ({ slides, infinite }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([]);
  const [transition, setTransition] = useState('slide');

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_AXIOS_URL}/api/carousel?slides=${slides}`);
        setCarouselData(data.slides);

      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error(error.response.data.error);
      }
    };

    fetchData();
  }, [slides]);

  const nextSlide = () => {
    if (currentIndex === slides - 1 && !infinite) {
      return;
    }
    setTransition('slide');
    setCurrentIndex((currentIndex + 1) % slides);
  };

  const prevSlide = () => {
    if (currentIndex === 0 && !infinite) {
      return;
    }
    setTransition('slide');
    setCurrentIndex((currentIndex - 1 + slides) % slides);
  };

  return (
    <div className="carousel relative">
      <div className="flex">
        {carouselData.map((slide, index) => (
            <Slide
                image={slide.image}
                title={slide.title}
                subtitle={slide.subTitle}
                index={index}
                currentIndex={currentIndex}
                transition={transition}
            />
        ))}
      </div>
      {slides > 1 && (
        <>
          <ArrowButton direction="prev" onClick={prevSlide} />
          <ArrowButton direction="next" onClick={nextSlide} />
        </>
      )}
    </div>
  );
};

export default Carousel;
