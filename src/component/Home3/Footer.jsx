import React, { createElement } from 'react'
import '@/style/Home2/Footer.css'

import { FaArrowRight } from "react-icons/fa6";

import { data } from '@/utils/Data'


const Footer = () => {

    const { recent_news, social, contact_us, quick_links1, quick_links2 } = data

    return (
        <footer className='footer-background' style={{ background: 'var(--primary-color-two) !important' }}>
            <div className='footer-overlay'></div>
            <div className='container position-relative'>
                <div className="row gap-3 gap-md-0">
                    <div className="col-12 col-md-6 col-lg-12 col-xl-2 pe-4 mt-4 mt-xl-0">
                        <div className='d-flex flex-column gap-3'>
                            <div className='title+logo'>
                                <a href="" className='d-inline-block'>
                                    <img src="/images/logo-white.png" alt="" className='footer-brand-logo-img' />
                                </a>
                            </div>
                            <div className='row social-icons mt-2'>
                                <ul className='d-flex list-unstyled gap-2 social-list my-2 justify-content-start px-2'>
                                    {social.map((item, idx) => (
                                        <li key={idx} className="social-icon-item" style={{ '--social-color': item.color }}>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-icon-link"
                                                title={item.platform}
                                            >
                                                {createElement(item.icon)}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4 mt-xl-0">
                        <div className='col'>
                            <h2 className={` m-0 p-0 fs-6 fw-bold text-white text-uppercase my-2 footer-list-title pb-2`}>
                                Get In Touch
                            </h2>
                        </div>
                        <ul className='d-flex flex-column gap-2'>
                            {contact_us.map((item, idx) => (
                                <li key={idx}>
                                    <div className=''>
                                        <h5 className='text-white text-capitalize'> {item.platform} </h5>
                                        <a href={item.url} className='text-secondary'>
                                            {item.label}
                                        </a>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4 mt-xl-0">
                        <div className='col'>
                            <h2 className={` m-0 p-0 fs-6 fw-bold text-white text-uppercase my-2 footer-list-title pb-2`}>
                                Company
                            </h2>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <ul className='d-flex flex-column gap-2 col'>
                                {quick_links1.map((item, idx) => (
                                    <li key={idx}>
                                        <a href={item.url} className='d-flex align-items-center gap-2 text-white'>
                                            {/* <span className='text-primary'>
                                                <FaArrowRight />
                                            </span> */}
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 mt-4 mt-xl-0">
                        <div>
                            <h2 className={` m-0 p-0 fs-6 fw-bold text-white text-uppercase my-2 footer-list-title pb-2`}>
                                Subscribe Us
                            </h2>
                        </div>
                        <div className='d-flex flex-column gap-2'>
                            <p className='text-secondary'>
                                Subscribe Us & Receive Our Offers and Updates in Your Inbox Directly.
                            </p>

                            <form>
                                <div className='input-group'>
                                    <input
                                        type="email"
                                        id='email'
                                        name='email'
                                        placeholder='Enter your email'
                                        maxLength={45}
                                        autoComplete='off'
                                    />
                                    <button className='text-uppercase shadow-sm'><small> Sign up </small></button>
                                </div>
                            </form>

                            <p className='text-secondary'>
                                * We do not share your email id
                            </p>
                        </div>


                    </div>
                    {/* <div className="col m-auto px-0 px-lg-4">
                        <div className="col-12">
                            <div className="row">
                 
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer