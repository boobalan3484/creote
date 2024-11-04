import React from 'react'
import '@/style/Home3/About.css'
import TitleSection from '@/component/Home2/Reusable/TitleSection'
import NavsTab from './WhyUs/NavsTab';
import { IoPlayOutline } from 'react-icons/io5';

const AboutUs = () => {
    return (
        <section className='py-5'>
            <div className='container px-4'>
                <div className='row'>
                    <div className="col-xl-6 col-12 mb-5 mb-xl-0 px-3 home3_about">
                        <div className="image_boxes style_seven">
                            <div className="image_box">
                                <img src="/home3/images/about/about-11.jpg" className="img-fluid height_600px object-fit-cover" alt="about" />
                                <div className="video_inner type_seven">
                                    <a href="#" className="lightbox-image">
                                        <i className="icon-play">
                                            <IoPlayOutline />
                                        </i>
                                    </a>
                                </div>
                                <div className="experience">
                                    <div className="experience_inner">
                                        <h2> 25+ Years Of Experience </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="pattern_imag">
                                {/* <img src="assets/images/pattern-n1.png" alt="img" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-12 col-md-12 px-3 d-flex flex-column justify-content-between">
                        <TitleSection
                            title='For Your Business'
                            headline='The Growing Trend of Outsourcing HR Services'
                            description="Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure."
                        />
                        <div className="progress_bar style_two">
                            <div className="progress_new">
                                <div className="ProgressBar ProgressBar--animateText" data-progress="70">
                                    <svg className="ProgressBar-contentCircle" height="170" width="170">
                                        <circle className="ProgressBar-background" cx="85" cy="85" r="75"></circle>
                                        <circle transform="rotate(-90, 85, 85)" className="ProgressBar-circle" cx="85" cy="85" r="75" style={{ strokeDasharray: '471px', strokeDashoffset: '141.3px' }}></circle>
                                    </svg>
                                </div>
                                <div className="progress-value">
                                    <div>
                                        <h6>Year of 2020 </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="content_box">
                                <h2>70%</h2>
                                <h3>Consultion </h3>
                                <p>Certain circumstances seds owing to the claims duty righteous indignation and so
                                    beguiled.</p>
                            </div>
                        </div>
                        <NavsTab />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs