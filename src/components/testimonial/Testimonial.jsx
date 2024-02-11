import React, { useState } from 'react';
import './Testimonial.scss';
import { FaQuoteLeft } from "react-icons/fa";
import { users } from './data';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <section className='main --flex-center'>
      <div className="container --text-center">
        <h2 className="--text-center --mb2">Testimonial section</h2>
        <div className="slider">
          <FaQuoteLeft className='icon' />
          {users.map((user, index) => (
            <div className={index === currentSlide ? 'slide current' : 'slide'}>
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
            <FaArrowCircleLeft size={30} className='prev' />
            <FaArrowCircleRight size={30} className='next' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
