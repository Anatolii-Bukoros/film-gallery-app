import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


export const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevImage} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextImage} />
      {CarouselData.map(({ image }, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                src={image}
                alt='movie image'
                className="image"
              />
            )}
          </div>
        )
      })}
    </section>
  )
}
