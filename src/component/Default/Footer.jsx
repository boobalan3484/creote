import React, { createElement } from 'react'
import '@/style/Default/Footer.css'

import { FaArrowRight } from "react-icons/fa6";

import LinkButton from './Reusable/LinkButton';

import { data } from '@/utils/Data'

const Footer = () => {
    const { logo, recent_news, social, contact_us, quick_links1 } = data

    // const quick_links = [
    //     {
    //         name: 'Infrastructure',
    //         url: ''
    //     },
    //     {
    //         name: 'Client Support',
    //         url: ''
    //     },
    //     {
    //         name: 'Privacy Policy',
    //         url: ''
    //     },
    //     {
    //         name: 'Terms of Use',
    //         url: ''
    //     },
    //     {
    //         name: 'Professionals',
    //         url: ''
    //     },
    //     {
    //         name: 'Careers',
    //         url: ''
    //     },
    //     {
    //         name: 'Site Map',
    //         url: ''
    //     }
    // ]

    // const recent_news = [
    //     {
    //         title: 'Why Should Business Payroll Outsourcing?',
    //         image: 'blog-image-7'
    //     },
    //     {
    //         title: 'Most Employees Support Measures',
    //         image: 'blog-image-8'
    //     },
    //     {
    //         title: 'How to Handle Employee',
    //         image: 'blog-image-9'
    //     },
    // ]

    // const contact_us = [
    //     {
    //         platform: 'address',
    //         icon: FaLocationDot,
    //         label: 'Jl Cempaka Wangi No 22 Jakarta - Indonesia',
    //         url: '/'
    //     },
    //     {
    //         platform: 'mail',
    //         icon: MdMail,
    //         label: 'support@example.com',
    //         url: 'mailto:support@example.com'
    //     },
    //     {
    //         platform: 'mobile',
    //         icon: FaMobileScreen,
    //         label: '+6221.2002.2012',
    //         url: 'https://wa.me/+622120022012'
    //     },
    // ]

    // const social = [
    //     {
    //         platform: 'LinkedIn',
    //         icon: FaLinkedinIn,
    //         link: 'https://www.linkedin.com/',
    //         color: '#0a66c2',
    //     },
    //     {
    //         platform: 'Instagram',
    //         icon: FaInstagram,
    //         link: 'https://www.instagram.com/',
    //         color: 'linear-gradient(45deg, #FF7A00, #FF0169, #D300C5)', // Using a gradient
    //     },
    //     {
    //         platform: 'X Corp.',
    //         icon: FaXTwitter,
    //         link: 'https://x.com/',
    //         color: '#000',
    //     },
    //     {
    //         platform: 'YouTube',
    //         icon: AiOutlineYoutube,
    //         link: 'https://www.youtube.com/',
    //         color: '#FF0000',
    //     },
    //     {
    //         platform: 'Facebook',
    //         icon: FaFacebookF,
    //         link: 'https://www.facebook.com/',
    //         color: '#0866ff',
    //     },
    // ];

    return (
        <footer className='footer-background'>
            <div className='footer-overlay'></div>
            <div className='container position-relative'>
                <div className="row gap-3 gap-lg-0">
                    <div className="col-12 col-lg-3 pe-4">
                        <div className='d-flex flex-column gap-3'>
                            <div className='title+logo'>
                                <a href="" className='d-inline-block'>
                                    <img src={logo.logo_white.src} alt="" className='footer-brand-logo-img' />
                                </a>
                            </div>

                            <div>
                                <p className={` m-0 p-0 footer-brand-description text-white`} style={{ textAlign: 'justify' }}>
                                    Si nostra facilisi donec ad lacus lectus imperdiet nascetur neque. Letius nibh non sociosqu dictum sit.
                                </p>
                            </div>
                            <LinkButton
                                div_ClassName='theme_btn_all '
                                a_ClassName='theme-btn one color_white'
                                label='Read More' />

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
                    <div className="col-12 col-lg-9 px-0 px-lg-4">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-3">
                                    <div>
                                        <h2 className={` m-0 p-0 fs-6 fw-bold text-white text-uppercase my-2 footer-list-title pb-2`}>
                                            Essentials
                                        </h2>
                                    </div>
                                    <ul className='d-flex flex-column gap-2'>
                                        {quick_links1.map((item, idx) => (
                                            <li key={idx}>
                                                <a href={item.url} className='d-flex align-items-center gap-2 text-white'>
                                                    <span className='text-primary'>
                                                        <FaArrowRight />
                                                    </span>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-12 col-md-8 col-lg-6 mt-4 mt-md-0">
                                    <div>
                                        <h2 className={` m-0 p-0 fs-6 fw-bold text-white text-uppercase my-2 footer-list-title pb-2`}>
                                            Recent News
                                        </h2>
                                    </div>
                                    {recent_news.map((item, idx) => (
                                        <div className="news_recent clearfix image_s" key={idx}>
                                            <div className="image ">
                                                <img width="750" height="420" src={`/images/footer/${item.image}.jpg`} className="img-fluid" alt="img" loading="lazy" />
                                            </div>
                                            <div className="content ">
                                                <h2 className="title"><a href="blog-single.html" rel="bookmark">{item.title}</a></h2>
                                                <a className="date d-flex align-items-center gap-2">
                                                    <span className="fa fa-clock-o">
                                                        {createElement(item.icon)}
                                                    </span>
                                                    {item.date}
                                                </a>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                                <div className="col-12 col-lg-3">
                                    <div>
                                        <h2 className={` m-0 p-0 fs-6 fw-bold text-white text-uppercase my-2 footer-list-title pb-2`}>
                                            Contact us
                                        </h2>
                                    </div>
                                    <ul className='d-flex flex-column flex-column-reverse gap-2'>
                                        {contact_us.map((item, idx) => (
                                            <li key={idx}>
                                                <div className=''>
                                                    {createElement(item.icon, { className: 'text-info' })}
                                                    <a href={item.url} className='ps-3'>
                                                        {item.label}
                                                    </a>
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer