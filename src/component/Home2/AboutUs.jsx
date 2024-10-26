import React from 'react'
import '@/style/Home2/About.css'
import { IoPlayOutline } from "react-icons/io5";
import TitleSection from './Reusable/TitleSection';
import LinkButton from './Reusable/LinkButton';

const AboutUs = () => {
    return (
        <section className='position-relative py-5'>
            <div className='container py-3'>
                <div className='row justify-content-between'>
                    <div className="col-lg-8 m-auto pb-5 text-center">
                        <TitleSection
                            title='Make sense for your business'
                            headline='Recruitment First HR Solutions can help.'
                        // description="Over 20 years of experience we'll ensure you always get the best. We serve a clients at every level of their organization we can be most useful, whether as a trusted advisor to top trusted our management."
                        />
                    </div>
                    <div className="col-12 col-md-6 px-4">
                        <div className="image_boxes style_two">
                            <img src="/home2/images/make-sense/shape-1.png" className="background_image" alt="image" />
                            <div className="image one d-block d-md-flex">
                                <img src="/home2/images/make-sense/about-6.png" className="img-fluid" alt="image" />
                            </div>
                            <div className="image two">
                                <img src="/home2/images/make-sense/about-7.png" className="img-fluid" alt="image" />
                                <div className="video_box">
                                    <a href="#" className="lightbox-image">
                                        {/* <a href="https://youtu.be/RN81h85V6D4" className='d-flex justify-content-center align-items-center'> */}
                                        <IoPlayOutline />
                                        {/* </a> */}
                                    </a>
                                </div>
                            </div>
                            <div className="authour_quotes">
                                <i className="icon-quote"></i>
                                <h6>Making What's Possible in Human Resource</h6>
                                <p>/ Liam Oliver</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-5 col-xxl-6 px-4 d-flex flex-column gap-4 mt-4 mt-lg-0">

                        <div className="title_all_box style_one  dark_color">
                            <div className="title_sections left">
                                <h5 className="title font_20">We take the time to develop a strong working relationship with
                                    you by understanding your needs, your business and your corporate culture.</h5>
                            </div>
                        </div>

                        <div className="description_box">
                            <p>Countsy provides Finance, Accounting and HR Solutions to venture backed startups. Through
                                a unique combination of an on demand CFO, CPO (Chief People Officer) and technologies.</p>
                        </div>

                        <div className="description_box">
                            <p>We also have a number of staff who are recipients and who are currently working advanced
                                HR degrees. We are very proud of our long and successful history of organizations
                                industries .</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-xl-6">
                                <div className="icon_box_all  style_two">
                                    <div className="icon_content  icon_imgs ">
                                        <div className="icon">
                                            <img src="home2/icons/icon-img-n-1.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><a href="#">Tailored Advice &amp; Support</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="icon_box_all  style_two">
                                    <div className="icon_content  icon_imgs ">
                                        <div className="icon">
                                            <img src="home2/icons/icon-img-n-2.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><a href="#">Flexible Company Policies</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4">
                                <LinkButton
                                    div_ClassName='theme_btn_all'
                                    a_ClassName='theme_btn one'
                                    label='Download'
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs