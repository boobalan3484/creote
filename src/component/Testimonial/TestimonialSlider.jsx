'use client'
import React, { Fragment } from 'react'
import '@/style/Testimonial.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiQuotesLight } from "react-icons/pi";
const TestimonialSlider = () => {
  const slider_list = [
    {
      id: 1,
      image: "testi-1",
      name: 'Fleix Everard ',
      designation: 'HR, Blue Soft Sol',
      description: 'You bring tremendous value to company. We have generated more leads in the last 45 days.',
    },
    {
      id: 2,
      image: "testi-2",
      name: 'Boris Elbert  ',
      designation: 'Green Tech',
      description: "I love creote everyone has been great to work with and you're all great partner for company, we thank you ... ",
    },
    {
      id: 3,
      image: "testi-3",
      name: 'Ivor Herbert ',
      designation: 'Ivor Herbert',
      description: 'We hired creote to assist us with refining marketing plans, you truly understands & gave us very good ideas.',
    },

  ]

  return (
    <div className='testimonial'>
      <Splide
        options={{
          type: 'loop',
          perPage: 2,        // Enable loop sliding
          autoplay: true,      // Auto slide the carousel
          interval: 4000,      // Slide every 4 seconds
          arrows: true,        // Enable navigation arrows
          pagination: false,   // Disable pagination
          pauseOnHover: false, // Keep sliding when hovered
          perMove: 1,          // Move one slide at a time
          // Gap between slides (adjust as needed)
          breakpoints: {
            1200: {
              perPage: 2, // 2 slides per view on large screens
            },
            990: {
              perPage: 1, // 1 slide per view on medium screens (tablet)

            }
          },
        }}
      >
        {slider_list.map((item, idx) => (
          <Fragment key={idx}>
            <SplideSlide >
              <div className="testimonial_box type_one mx-3">
                <span className="icon-quote">
                  <PiQuotesLight />
                </span>
                <div className="testimonial_inner">
                  <div className="description">
                    <p>{item.description} </p>
                  </div>
                  <div className="lower_content clearfix">
                    <div className="image_box">
                      <img decoding="async" src={`/images/testimonial/${item.image}.png`} alt="image" />
                    </div>
                    <div className="authour_name d-flex flex-column gap-2 my-3">
                      <h2>{item.name}</h2>
                      <h6>{item.designation}</h6>
                      <p>
                        <span>
                          <FaStar className='fill' />
                        </span>
                        <span>
                          <FaStar className='fill' />
                        </span>
                        <span>
                          <FaStar className='fill' />
                        </span>
                        <span>
                          <FaStarHalfAlt className='half-fill' />
                        </span>
                        <span>
                          <FaRegStar className='empty' />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </SplideSlide>
          </Fragment>
        ))}
      </Splide>
    </div >
  )
}

export default TestimonialSlider