'use client'
import React, { Fragment } from 'react'
import '@/style/Default/Testimonial.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaArrowRight } from "react-icons/fa6";

import ThumbSvgComponent from '../../../../public/icons/Thumb';

const ServiceSlider = () => {
    const slider_list = [
        {
            id: 1,
            image: "service-image-4",
            title: 'Risk management ',
            description: 'Mitigate workplace issues before they escalate ,Shared Time Human.',
        },
        {
            id: 2,
            image: "service-image-5",
            title: 'Task Management  ',
            description: "Once your company has hired the best employees, the next step. ",
        },
        {
            id: 3,
            image: "service-image-6",
            title: 'Health Care Benefits ',
            description: 'We hired creote to assist us with refining marketing plans, you truly understands & gave us very good ideas.',
        },

    ]

    return (
        <div className='service_section'>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 3,        // Enable loop sliding
                    autoplay: true,      // Auto slide the carousel
                    interval: 4000,      // Slide every 4 seconds
                    arrows: false,
                    // Enable navigation arrows
                    pagination: false,   // Disable pagination
                    pauseOnHover: false, // Keep sliding when hovered
                    perMove: 1,          // Move one slide at a time
                    // Gap between slides (adjust as needed)
                    breakpoints: {
                        1200: {
                            perPage: 3, // 2 slides per view on large screens
                        },
                        990: {
                            perPage: 2, // 1 slide per view on medium screens (tablet)
                        }
                    },
                }}
            >
                {slider_list.map((item, idx) => (
                    <Fragment key={idx}>
                        <SplideSlide >
                            <div className='px-3'>
                                <div className="service_box type_one clearfix">
                                    <div className="image_box">
                                        <img src={`/images/service/${item.image}.jpg`} alt="" className='img-fluid' />
                                        <div className="overlay">
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <div className="icon_box clearfix">
                                            <div className="icon_box_inner">
                                                <span className='icon'>
                                                    <ThumbSvgComponent />
                                                </span>
                                            </div>
                                        </div>
                                        <h2>
                                            <a href="">{item.title} </a>
                                        </h2>
                                        <p>
                                            {item.description.slice(0,50)+'...'}
                                        </p>
                                        <a href="" className='d-flex gap-2 mt-2'>
                                            <span>
                                                <FaArrowRight />
                                            </span>
                                            Read More
                                        </a>
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

export default ServiceSlider