'use client'
import React, { Fragment } from 'react'
import '@/style/Home3/Testimonial.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiQuotesLight } from "react-icons/pi";
const TestimonialSlider = () => {
  const slider_list = [
    {
      id: 1,
      banner:'banner-four-bg',
      image: "testi-1",
      name: 'Fleix Everard ',
      designation: 'HR, Blue Soft Sol',
      description: 'You bring tremendous value to company. We have generated more leads in the last 45 days.',
    },
    {
      id: 2,
      banner:'banner-five-bg',
      image: "testi-2",
      name: 'Boris Elbert  ',
      designation: 'Green Tech',
      description: "I love creote everyone has been great to work with and you're all great partner for company, we thank you ... ",
    },
  ]

  return (
    <div className='testimonial'>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,        // Enable loop sliding
          autoplay: true,      // Auto slide the carousel
          interval: 3000,      // Slide every 4 seconds
          arrows: true,        // Enable navigation arrows
          pagination: false,   // Disable pagination
          pauseOnHover: false, // Keep sliding when hovered
          perMove: 1,          // Move one slide at a time
          // Gap between slides (adjust as needed)
          breakpoints: {
            1200: {
              perPage: 1, // 2 slides per view on large screens
            },
            990: {
              perPage: 1, // 1 slide per view on medium screens (tablet)

            }
          },
        }}
      >
        {slider_list.map((item, idx) => (
          <Fragment 
          key={idx}
          >
            <SplideSlide className='home3_testimonial'>
          
              <div className="testimonial_box clearfix">
                <div className="image">
                  <img src={`/home3/images/testimonial/${item.banner}.jpg`} alt="image" />
                </div>
                <div className="authour_details">
                  <div className="b_image">
                    <img src="home2/images/video-section/clients/CLIENT-logo-1-w.png" alt="image"/>
                  </div>
                  <div className="comment">
                    While running an early stage startup everything feels
                    hard, that's why it's been so nice to have our accounting
                    feel easy. We recommed Qetus.
                  </div>
                  <div className="details clearfix">
                    <div className="c_image">
                      <img src={`home3/images/testimonial/${item.image}.png`} alt="image" />
                    </div>
                    <div className="c_content">
                      <div className="content_in">
                        <h2>Jacob Leonardo</h2>
                        <span>Senior Manager of Excel Solution</span>
                      </div>
                    </div>
                  </div>
                  <div className="rating mt-3">
                    <div style={{color: 'var(--primary-color-one)'}}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                      <FaRegStar />
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