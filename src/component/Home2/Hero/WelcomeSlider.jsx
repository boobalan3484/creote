'use client'
import React, { Fragment } from 'react'
import '@/style/Home2/CarouselSlider.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import LinkButton from '../Reusable/LinkButton';

const WelcomeSlider = () => {
    const slider_list = [
        {
            id: 1,
            image: "slider-12-1",
            main_ClassName: 'text-start px-0 px-md-5',
            // title: 'Strategy & Planning',
            headline: 'Risk management and workplace audits to identify potential areas',
            ul_ClassName: 'justify-content-center',
            link_list: [
                {
                    label: 'Read more',
                    div_ClassName: 'theme_btn_all color_two',
                    a_ClassName: 'theme_btn one'
                },
            ]
        },
        {
            id: 2,
            image: "slider-12-1",
            main_className: 'text-start px-0 px-md-5',
            // title: 'Solutions for your business',
            headline: 'Risk management and workplace audits to identify potential areas',
            ul_ClassName: '',
            link_list: [
                {
                    label: 'Read more',
                    div_ClassName: 'theme_btn_all color_two',
                    a_ClassName: 'theme_btn one'
                },
            ]
        },
        {
            id: 3,
            image: "slider-12-1",
            main_ClassName: 'text-start px-0 px-md-5',
            // title: 'Solutions for your business',
            headline: 'Risk management and workplace audits to identify potential areas',
            ul_ClassName: 'justify-content-center',
            link_list: [
                {
                    label: 'Read more',
                    div_ClassName: 'theme_btn_all color_two',
                    a_ClassName: 'theme_btn one'
                },
            ]
        },
    ]

    return (
        <div className='overflow-hidden position-relative welcome-container'>
            <Splide
                options={{
                    type: 'loop',        // Enable loop sliding
                    perPage: 1,          // Display 3 slides per view
                    autoplay: true,      // Auto slide the carousel
                    interval: 4000,      // Slide every 2 seconds
                    arrows: true,        // Enable navigation arrows
                    pagination: false,
                    // Enable pagination
                    pauseOnHover: false, // Keep sliding when hovered
                    perMove: 1,           // Move one slide at a time
                    height: '100%'
                }
                }
                style={{ height: '100%' }}
                className='home2-slider'
            >
                {slider_list.map((item, idx) => (
                    <Fragment key={idx}>
                        <SplideSlide >
                            <div className='slide-item-content position-relative d-flex justify-content-center'>
                                <div className='slide_item ' >
                                    <div className="image-layer" style={{ backgroundImage: `url('/home2/images/hero/${item.image}.jpg` }}></div>
                                </div>
                                <div className='position-absolute container mx-auto h-100 w-100 top-0 text-white row d-flex align-items-center gap-4 px-4 p-md-5'>
                                    <div className="row">
                                        <div className={`col-lg-7 col-md-12 col-sm-12 col-xs-12 d-flex flex-column  justify-content-center gap-4 slider_content_home2 ${item.main_ClassName}`}>
                                            <h6 data-aos="fade-down" data-aos-delay='8000'>
                                                {item.title}
                                            </h6>
                                            <h1 data-aos="fade-right" data-aos-delay='8000'>
                                                {item.headline}
                                            </h1>
                                            {/* <p data-aos="fade-right" data-aos-delay='8000'>
                                            Who are so beguiled and demoralized the charms Long established fact <br /> that a reader will be distracted.
                                        </p> */}
                                            <ul className={`w-100 d-flex flex-column flex-md-row align-items-center gap-4 ${item.ul_ClassName}`}>
                                                {item.link_list.map((link, idx) => (
                                                    <li key={idx}>
                                                        <LinkButton
                                                            div_ClassName={link.div_ClassName}
                                                            a_ClassName={link.a_ClassName}
                                                            label={link.label}
                                                        />
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                        <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                            <div className="slider_image animate_left">
                                                <img src="home2/images/hero/slider-12-i-1.jpg" className="img-fluid" alt="img" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SplideSlide>
                    </Fragment>
                ))}
                {/* <SplideSlide >
                    <div className='slide-item-content position-relative d-flex justify-content-center'>
                        <div className='slide_item ' >
                            <div className="image-layer" style={{ backgroundImage: "url('/images/hero/slider-home-1.jpg')" }}></div>
                        </div>
                        <div className='position-absolute container mx-auto h-100 w-100 top-0 text-white row d-flex align-items-center gap-4 px-5'>
                            <div className=' col-12 d-flex flex-column text-center justify-content-center align-items-center gap-4 px-5 slider_content'>
                                <h6 data-aos="fade-down" data-aos-delay='8000'>
                                    Strategy & Planning
                                </h6>
                                <h1 data-aos="fade-right" data-aos-delay='8000'>
                                    The Fastest Way to Achieve Success
                                </h1>
                                <p data-aos="fade-right" data-aos-delay='8000'>
                                    Who are so beguiled and demoralized the charms Long established fact <br /> that a reader will be distracted.
                                </p>
                                <ul className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-4'>
                                    <li>
                                        <LinkButton
                                            div_ClassName='theme_btn_all color_two'
                                            a_ClassName='theme_btn one'
                                            label='Our Service'
                                        />
                                    </li>
                                    <li>
                                        <LinkButton
                                            div_ClassName='theme_btn_all '
                                            a_ClassName='theme-btn one color_white'
                                            label='Projects'
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </SplideSlide>
                <SplideSlide>
                    <div className='slide-item-content position-relative d-flex justify-content-center'>
                        <div className='slide_item ' >
                            <div className="image-layer" style={{ backgroundImage: "url('/images/hero/slider-home-2.jpg')" }}></div>
                        </div>
                        <div className='position-absolute container mx-auto h-100 w-100 top-0 text-white row d-flex align-items-center gap-4 px-5'>
                            <div className=' col-12 d-flex flex-column text-center justify-content-center align-items-center gap-4 px-5 slider_content'>
                                <h6 data-aos="fade-down" data-aos-delay='8000'>
                                    Solutions for your business
                                </h6>
                                <h1 data-aos="fade-right" data-aos-delay='8000'>
                                    Searching HR software for your business?
                                </h1>
                                <p data-aos="fade-right" data-aos-delay='8000'>
                                    Who are so beguiled and demoralized the charms Long established fact <br /> that a reader will be distracted.
                                </p>
                                <ul className='w-100 d-flex flex-column flex-md-row align-items-center justify-content-center gap-4'>
                                    <li>
                                        <LinkButton
                                            div_ClassName='theme_btn_all color_two'
                                            a_ClassName='theme_btn one'
                                            label='Our Service'
                                        />
                                    </li>
                                    <li>
                                        <LinkButton
                                            div_ClassName='theme_btn_all '
                                            a_ClassName='theme-btn one color_white'
                                            label='Projects'
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </SplideSlide> */}
            </Splide>
        </div>
    );
};

export default WelcomeSlider