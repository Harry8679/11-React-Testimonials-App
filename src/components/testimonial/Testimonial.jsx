import React, { useEffect, useState } from 'react';
import './Testimonial.scss';
import { FaQuoteLeft } from "react-icons/fa";
import { users } from './data';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = users.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  return (
    <section className='main --flex-center'>
      <div className="container --text-center">
        <h2 className="--text-center --mb2">Testimonial section</h2>
        <div className="slider">
          <FaQuoteLeft className='icon' />
          {users.map((user, index) => (
            <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
              {index === currentSlide && (
                <div>
                  <p className='text'>{user.desc}</p>
                  <img src={user.img} alt="user" />
                  <h4>{user.name}</h4>
                  <p className="--fw-thin">
                    {user.job}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className="buttons">
            <FaArrowCircleLeft size={30} className='prev' onClick={prevSlide} />
            <FaArrowCircleRight size={30} className='next' onClick={nextSlide} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
