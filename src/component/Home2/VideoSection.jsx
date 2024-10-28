import React from 'react'
import '@/style/Home2/VideoSection.css'
import { IoPlayOutline } from 'react-icons/io5'
import { FaWhatsapp } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";

const VideoSection = () => {
    return (
        <section className="video-section">
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 video-btn-wrapper d-flex justify-content-center align-items-center">
                    <div className='py-5 '>
                        <div className="video_btn_all text-center py-5">
                            <div className="video_section video_box">
                                <a href="https://www.youtube.com/71EZb94AS1k" className="lightbox-image">
                                    <IoPlayOutline />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12 video-content-wrapper py-5">
                    <div className="client-brand-wrapper text-white px-5 py-5 d-flex flex-column gap-4 ">
                        <div className="title_all_box style_one light_color">
                            <div className="title_sections left">
                                <h2>Creote has extensive experience across all industries. </h2>
                                <p>Over 20 years of experience we'll ensure you always get the best guidance.We help
                                    our clients set new standards of excellence.</p>
                            </div>
                        </div>
                        <div className='clients d-flex align-items-center gap-5'>
                            <div className='image'>
                                <img src="home2/images/video-section/clients/CLIENT-logo-w.png" alt="clients-logo" className="img-fluid" />
                            </div>
                            <div className='image'>
                                <img src="home2/images/video-section/clients/CLIENT-logo-3-w.png" alt="clients-logo" className="img-fluid" />
                            </div>
                            <div className='image'>
                                <img src="home2/images/video-section/clients/CLIENT-logo-2-w.png" alt="clients-logo" className="img-fluid" />
                            </div>
                            <div className='image'>
                                <img src="home2/images/video-section/clients/CLIENT-logo-1-w.png" alt="clients-logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className='communication'>
                            <div className="row row-gap-3 flex-column flex-md-row">
                                <div className="col">
                                    <div className='d-flex align-items-center gap-2 '>
                                        <span className='video_communication_icon'>
                                            <FaWhatsapp className='fs-5'/>
                                        </span>
                                        <div>
                                            <h4> What's App Chat</h4>
                                            <a href="" className='text-white'>
                                                (888)456 - 7890 - 12354
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='d-flex align-items-center gap-2 '>
                                        <span className='video_communication_icon'>
                                            <FaSkype className='fs-5'/>
                                        </span>
                                        <div className=''>
                                            <h4> Skype Meet</h4>
                                            <a href="" className='text-white'>
                                                creotesuppot@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection