import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';

 
 
const Testimonials = () => {
  const data= [
    {
      avater: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, pariatur explicabo amet ex fuga exercitationem deleniti, minima eius omnis, maxime quia repellat incidunt. Est animi suscipit consequatur, commodi sequi vero.'
    },
    {
      avater: AVTR2,
      name: 'Shatta Wale',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, pariatur explicabo amet ex fuga exercitationem deleniti, minima eius omnis, maxime quia repellat incidunt. Est animi suscipit consequatur, commodi sequi vero.'
    },
    {
      avater: AVTR3,
      name: 'Kwame Despite',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, pariatur explicabo amet ex fuga exercitationem deleniti, minima eius omnis, maxime quia repellat incidunt. Est animi suscipit consequatur, commodi sequi vero.'
    },
    {
      avater: AVTR4,
      name: 'Nana Ama McBrown',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, pariatur explicabo amet ex fuga exercitationem deleniti, minima eius omnis, maxime quia repellat incidunt. Est animi suscipit consequatur, commodi sequi vero.'
    }
  ]
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimoials</h2>

      < Swiper className="container testimonials_container"
         // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
        
        >
          {  data.map(({avater,name,review},index)=>{
            return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avater} alt="Avatar One" />
              </div>
              <h5 className='client_name'> {name}</h5>
              <small className='client_review'>
                {review}
              </small>
            </SwiperSlide>
            )
            })}
      </ Swiper>
    </section>
  )
}

export default Testimonials