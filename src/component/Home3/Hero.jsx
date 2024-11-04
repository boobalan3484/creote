'use client'
import React, { Fragment } from 'react'
import '@/style/Home3/Hero.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import LinkButton from '../Home2/Reusable/LinkButton';
import TitleSection from '../Home2/Reusable/TitleSection';
import { IoPlayOutline } from 'react-icons/io5';

const Hero = () => {

    const slider_list = [
        {
            id: 1,
            image: "url('/home3/images/hero/slider-7-bg.jpg')",
            // main_ClassName: 'text-center px-5',
            title: 'Our Vision to Grow Better',
            headline: 'Excellence for people in business',
            description: 'Helping Clients Achieve Results Through Their People.',
            ul_ClassName: 'justify-content-start',
            list_items: [
                {
                    list: 'Reducing Redundancy'
                },
                {
                    list: 'Uncovering Hidden Resources'
                },
                {
                    list: "Increasing Company's Agility"
                }
            ],
            link: [
                {
                    label: 'Read More',
                    div_ClassName: 'theme_btn_all ',
                    a_ClassName: 'theme-btn two'
                },
            ]
        },
        {
            id: 2,
            image: "url('/home3/images/hero/slider-7-bg.jpg')",
            // main_ClassName: 'text-center px-5',
            title: 'Our Vision to Grow Better',
            headline: 'Excellence for people in business',
            description: 'Helping Clients Achieve Results Through Their People.',
            ul_ClassName: 'justify-content-start',
            list_items: [
                {
                    list: 'Reducing Redundancy'
                },
                {
                    list: 'Uncovering Hidden Resources'
                },
                {
                    list: "Increasing Company's Agility"
                }
            ],
            link: [
                {
                    label: 'Read More',
                    div_ClassName: 'theme_btn_all ',
                    a_ClassName: 'theme-btn two'
                },
            ]
        },
        {
            id: 3,
            image: "url('/home3/images/hero/slider-7-bg.jpg')",
            // main_ClassName: 'text-center px-5',
            title: 'Our Vision to Grow Better',
            headline: 'Excellence for people in business',
            description: 'Helping Clients Achieve Results Through Their People.',
            ul_ClassName: 'justify-content-start',
            list_items: [
                {
                    list: 'Reducing Redundancy'
                },
                {
                    list: 'Uncovering Hidden Resources'
                },
                {
                    list: "Increasing Company's Agility"
                }
            ],
            link: [
                {
                    label: 'Read More',
                    div_ClassName: 'theme_btn_all ',
                    a_ClassName: 'theme-btn two'
                },
            ]
        },
    ]

    return (
        <section className='position-relative overflow-hidden'>
            <div className='overflow-hidden position-relative welcome-container'>
                <Splide
                    options={{
                        type: 'loop',        // Enable loop sliding
                        perPage: 1,          // Display 3 slides per view
                        autoplay: true,      // Auto slide the carousel
                        interval: 4000,      // Slide every 2 seconds
                        arrows: false,        // Enable navigation arrows
                        pagination: false,
                        // Enable pagination
                        pauseOnHover: false, // Keep sliding when hovered
                        perMove: 1,           // Move one slide at a time
                        height: '100%'
                    }
                    }
                    style={{ height: '100%' }}
                >
                    {slider_list.map((item, idx) => (
                        <Fragment key={idx}>
                            <SplideSlide >
                                <div className='slide-item-content position-relative d-flex justify-content-center'>
                                    <div className='slide_item ' >
                                        <div className="image-layer" style={{ backgroundImage: `${item.image}` }}></div>
                                    </div>
                                    <div className='position-absolute container mx-auto h-100 w-100 top-0 row d-flex align-items-center gap-4 px-4 p-md-5'>
                                        <div className={`col-12 d-flex flex-column  justify-content-start align-items-start gap-4 slider_content ${item.main_ClassName}`}>

                                            <TitleSection
                                                title={item.title}
                                                headline={item.headline}
                                                description={item.description}
                                                desc_color='text-secondary'
                                            />

                                            <ul className='home3_list d-flex flex-column gap-3 text-start px-4'>
                                                {item.list_items.map((listItm, idx) => (
                                                    <li key={idx} className='text-dark'>
                                                        {listItm.list}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* <h6 data-aos="fade-down" data-aos-delay='8000'>
                                                { }
                                            </h6>
                                            <h1 data-aos="fade-right" data-aos-delay='8000'>
                                                {item.headline}
                                            </h1>
                                            <p data-aos="fade-right" data-aos-delay='8000'>
                                                Who are so beguiled and demoralized the charms Long established fact <br /> that a reader will be distracted.
                                            </p> */}
                                            <ul className={`w-100 d-flex flex-column flex-md-row align-items-center gap-4 ${item.ul_ClassName}`}>
                                                {item.link.map((link, idx) => (
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
                                    </div>
                                </div>
                            </SplideSlide>
                        </Fragment>
                    ))}
                </Splide>
                <div className='position-absolute contact_form_video_icon mt-4 d-flex gap-3' style={{left:'10%', bottom:'6%'}}>
                    <div className="video_inner type_seven">
                        <a href="#" className="lightbox-image">
                            <i className="icon-play">
                                <IoPlayOutline />
                            </i>
                        </a>
                    </div>
                    <div >
                        <h4> General Enquires</h4>
                        <div className='d-flex flex-column flex-md-row gap-3'>
                            <div>
                                <span> Phone: </span><a href=""> +98 06071234 </a>
                            </div>
                            <div>
                                <span> Email: </span> <a href=""> sendmail@getus.com </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero