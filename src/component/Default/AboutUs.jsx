import React from 'react'
import '@/style/Default/About.css'
import { IoPlayOutline } from "react-icons/io5";
import TitleSection from './Reusable/TitleSection';
import LinkButton from './Reusable/LinkButton';

const AboutUs = () => {
    return (
        <section className='position-relative py-5'>
            <div className='container py-3'>
                <div className='row'>
                    <div className="col-12 col-md-6 px-4">
                        <div className='img-box clearfix'>
                            <div className='img-one'>
                                <img src='/images/about/about1.jpg' alt="about" className='img-fluid object-fit-cover' />
                                <div className='year-experience'>
                                    <h2>
                                        10+ Years Of experience
                                    </h2>
                                </div>
                            </div>
                            <div className="video_box video-inner text-center">
                                <a href="https://youtu.be/RN81h85V6D4" className='d-flex justify-content-center align-items-center'>
                                    <IoPlayOutline />
                                </a>
                            </div>
                            <div className='image_two'>
                                <img src="images/about/about2.jpg" className="img-fluid" alt="about2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 px-4 d-flex flex-column gap-4">
                        <TitleSection
                            title='About us'
                            headline=' Take Your Business To The Next Level '
                            description="Over 20 years of experience we'll ensure you always get the best. We serve a clients at every level of their organization we can be most useful, whether as a trusted advisor to top trusted our management."
                        />
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="type_one px-4">
                                    <div className="icon_bx">
                                        <img src="/icons/idea.png" alt="idea" className='img-fluid svg_img' />
                                        <span className='icon_bg'></span>
                                    </div>
                                    <div className="text_box">
                                        <h2>
                                            <a href="/"> Creative Work</a>
                                        </h2>
                                        <p>
                                            A creative work is a manifestation of creative effort including fine artwork
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="type_one px-4">
                                    <div className="icon_bx">
                                        <img src="/icons/solution.png" alt="solution" className='img-fluid svg_img' />
                                        <span className='icon_bg'></span>
                                    </div>
                                    <div className="text_box">
                                        <h2>
                                            <a href="/">Best Solution</a>
                                        </h2>
                                        <p>
                                            Consult Solution is a dynamic, multipurpose, elegant and modern corporate and business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <LinkButton 
                                 div_ClassName='theme_btn_all'
                                 a_ClassName='theme_btn one'
                                 label='Learn More'
                                />
                            </div>
                            <div className="col-12 col-md-8">
                                <div className='image'>
                                    <img src="/icons/sign.png" className="img-fluid" alt="sign" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs