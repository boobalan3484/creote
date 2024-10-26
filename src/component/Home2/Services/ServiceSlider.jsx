'use client'
import React, { Fragment } from 'react'
import '@/style/Home2/Services.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaArrowRight } from "react-icons/fa6";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiQuotesLight } from "react-icons/pi";
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
            <div className="container">
                <div className="row">
                    {slider_list.map((item, idx) => (
                        <div className="col-12 col-md-6 col-lg-4" key={idx}>
                            <div className="service_box type_one clearfix shadow rounded-0">
                                <div className="image_box rounded-0">
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
                                        {item.description.slice(0, 80) + '...'}
                                    </p>
                                    <a href="" className='d-flex gap-2 mt-2'>
                                        <span>
                                            <FaArrowRight />
                                        </span>
                                        Read More
                                    </a>
                                </div>
                            </div>
                            {/* <div className="grid_box _card" style="position: absolute; left: 0px; top: 0px;">
                                <div className="service_post style_three">
                                    <div className="image_box">
                                        <img loading="lazy" width="500" height="500" src="/images/service/service-image-6.jpg" alt="img" />
                                    </div>
                                    <div className="text_box">
                                        <div className="text_box_inner">
                                            <span className="icon icon-thumbs-up icon"></span>
                                            <h2 className="title_service"><a href="index.html/service/talent-management/" rel="bookmark">Talent Management</a></h2>
                                            <p className="short_desc">Once your company has hired the best employees, the next
                                                step.</p>
                                            <a className="read_more" href="index.html/service/talent-management/"> Read More<i className="icon-right-arrow-long"></i></a>
                                            <div className="bg_icon">
                                                <span className="icon icon-thumbs-up icon"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="grid_box _card" style="position: absolute; left: 379.95px; top: 0px;">
                                <div className="service_post style_three">
                                    <div className="image_box">
                                        <img width="500" height="500" src="/images/service/service-image-5.jpg" alt="img" loading="lazy" />
                                    </div>
                                    <div className="text_box">
                                        <div className="text_box_inner">
                                            <span className="icon icon-thumbs-up icon"></span>
                                            <h2 className="title_service"><a href="index.html/service/health-care-benefits/" rel="bookmark">Health Care Benefits</a></h2>
                                            <p className="short_desc">Workplace conflict can become a costly and time-consuming
                                                process .</p>
                                            <a className="read_more" href="index.html/service/health-care-benefits/"> Read More<i className="icon-right-arrow-long"></i></a>
                                            <div className="bg_icon">
                                                <span className="icon icon-thumbs-up icon"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid_box _card" style="position: absolute; left: 759.9px; top: 0px;">
                                <div className="service_post style_three">
                                    <div className="image_box">
                                        <img width="500" height="500" src="/images/service/service-image-4.jpg" alt="img" loading="lazy" />
                                    </div>
                                    <div className="text_box">
                                        <div className="text_box_inner">
                                            <span className="icon icon-thumbs-up icon"></span>
                                            <h2 className="title_service"><a href="index.html/service/risk-management/" rel="bookmark">Risk Management</a></h2>
                                            <p className="short_desc">Mitigate workplace issues before they escalate ,Shared Time
                                                Human.</p>
                                            <a className="read_more" href="index.html/service/risk-management/"> Read More<i className="icon-right-arrow-long"></i></a>
                                            <div className="bg_icon">
                                                <span className="icon icon-thumbs-up icon"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ServiceSlider