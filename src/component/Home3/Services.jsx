import React, { createElement } from 'react'
import '@/style/Home3/Services.css'
import TitleSection from '@/component/Home2/Reusable/TitleSection'
import { PiUsersThree } from "react-icons/pi";
import { AiOutlineAudit } from "react-icons/ai";
import { BsHeartPulse } from "react-icons/bs";

const Services = () => {

    const service_list = [
        {
            image: 'service-image-1.png',
            icon: PiUsersThree,
            headline: 'Recruitment Process',
            description: ' These cases are perfectly simple to distinguish.',
        },
        {
            image: 'service-image-3.png',
            icon: AiOutlineAudit,
            headline: 'Compliance Audits',
            description: 'Prevents our being able too what every pleasure.',
        },
        {
            image: 'service-image-5.jpg',
            icon: BsHeartPulse,
            headline: 'Health Care Benefits',
            description: 'Workplace conflict can become a consuming process',
        },
    ]

    return (
        <section className='home3-service-section'>
            <div className="service_text_container auto-container py-5">
                <div className="row">
                    <div className='col-11 m-auto d-flex flex-column flex-lg-row align-items-center justify-content-center'>
                        <div className="col order-1 order-lg-0 pb-4 px-4">
                            <TitleSection className='text-center text-lg-start' textColor='text-white'
                                description='In job gives you handcrafted options such as front admin reviews or email notifications. It also gives employer management for apps. It has panel/dashboard options for both companies to professional individuals in to social media.'
                            />
                        </div>
                        <div className="col order-0 order-lg-1 py-0 py-lg-4 px-4">
                            <TitleSection className='text-center text-lg-start' textColor='text-white'
                                title='Our Services'
                                headline='Key Areas of Expertise'
                            />
                        </div>
                    </div>
                </div>

                <div className="service-box-wrapper">
                    <div className="container">
                        <div className="row gutter_30px">
                            {service_list.map((item, idx) => (
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 py-2" key={idx}>
                                    <div className="service_box style_five dark_color mr_top_minus_160">
                                        <div className="service_content">
                                            <div className="image_box">
                                                <img src={`home3/images/service/${item.image}`} className="img-fluid" alt="Service Image" />
                                            </div>
                                            <div className="content_inner">
                                                <span className=" icon-human-resources d-flex align-items-center justify-content-center">
                                                    {createElement(item.icon)}
                                                </span>
                                                <div className="text_box">
                                                    <h2><a href="#">{item.headline}</a>
                                                    </h2>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services