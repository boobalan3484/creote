import React from 'react'
import '@/style/Services.css'
import TitleSection from './Reusable/TitleSection'
import { FaArrowRight } from "react-icons/fa6";
import ThumbSvgComponent from '../../public/icons/Thumb';
import BottomContainer from './Reusable/BottomContainer';
import ServiceSlider from './Services/ServiceSlider';


const Services = () => {
    return (
        <section className='services-section py-5'>
            <div className="auto-container py-5">
                <div className="row">
                    <div className="col-lg-8 pb-4 m-auto">
                        <TitleSection className='text-center' textColor='text-white'
                            title='Our Services'
                            headline=' We Offer Different Services'
                            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form believable.'
                        />
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col">
                        <div className="service_box type_one clearfix">
                            <div className="image_box">
                                <img src='/images/service/service-image-4.jpg' alt="" className='img-fluid' />
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
                                    <a href=""> Risk management </a>
                                </h2>
                                <p>
                                    Mitigate workplace issues before they escalate ,Shared Time Human.
                                </p>
                                <a href="" className='d-flex gap-2'>
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service_box type_one clearfix">
                            <div className="image_box">
                                <img src='/images/service/service-image-4.jpg' alt="" className='img-fluid' />
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
                                    <a href=""> Risk management </a>
                                </h2>
                                <p>
                                    Mitigate workplace issues before they escalate ,Shared Time Human.
                                </p>
                                <a href="" className='d-flex gap-2'>
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service_box type_one clearfix">
                            <div className="image_box">
                                <img src='/images/service/service-image-4.jpg' alt="" className='img-fluid' />
                                <div className="overlay"></div>
                            </div>
                            <div className="content_box">
                                <div className="icon_box clearfix">
                                    <div className="icon_box_inner">
                                        <span className='icon'>
                                            <ThumbSvgComponent />
                                        </span>
                                    </div>
                                </div>
                                <h2> <a href=""> Risk management </a> </h2>
                                <p> Mitigate workplace issues before they escalate ,Shared Time Human.</p>
                                <a href="" className='d-flex gap-2'>
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <ServiceSlider />
                </div>
            </div>
            <BottomContainer position='curve_shape_bottom_1'/>
        </section>
    )
}

export default Services