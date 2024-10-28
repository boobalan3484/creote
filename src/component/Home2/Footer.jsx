import React, { createElement } from 'react'
import '@/style/Home2/Footer.css'

import { MdMail } from "react-icons/md";
import { FaArrowRight, FaMobileScreen } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import LinkButton from './Reusable/LinkButton';
import { FaRegClock } from "react-icons/fa6";


const Footer = () => {

    const quick_links1 = [
        {
            name: 'Infrastructure',
            url: ''
        },
        {
            name: 'Client Support',
            url: ''
        },
        {
            name: 'Privacy Policy',
            url: ''
        },
        {
            name: 'Terms of Use',
            url: ''
        },
        {
            name: 'Careers',
            url: ''
        },
        {
            name: 'Site Map',
            url: ''
        },
        {
            name: 'Contact',
            url: ''
        },
    ]

    const quick_links2 = [
        {
            name: "How it's Work",
            url: ''
        },
        {
            name: 'Testimonials',
            url: ''
        },
        {
            name: 'HR Solutions',
            url: ''
        },
        {
            name: 'Case Studies',
            url: ''
        },
        {
            name: 'Partners',
            url: ''
        },
        {
            name: 'Key Areas',
            url: ''
        },
        {
            name: 'Pricing',
            url: ''
        }
    ]

    const recent_news = [
        {
            title: 'Why Should Business Payroll Outsourcing?',
            image: 'blog-image-7'
        },
        {
            title: 'Most Employees Support Measures',
            image: 'blog-image-8'
        },
        {
            title: 'How to Handle Employee',
            image: 'blog-image-9'
        },
    ]

    const contact_us = [
        {
            platform: 'address',
            icon: FaLocationDot,
            label: 'Jl Cempaka Wangi No 22 Jakarta - Indonesia',
            url: '/'
        },
        {
            platform: 'mail',
            icon: MdMail,
            label: 'support@example.com',
            url: 'mailto:support@example.com'
        },
        {
            platform: 'mobile',
            icon: FaMobileScreen,
            label: '+6221.2002.2012',
            url: 'https://wa.me/+622120022012'
        },
    ]

    const social = [
        {
            platform: 'LinkedIn',
            icon: FaLinkedinIn,
            link: 'https://www.linkedin.com/',
            color: '#0a66c2',
        },
        {
            platform: 'Instagram',
            icon: FaInstagram,
            link: 'https://www.instagram.com/',
            color: 'linear-gradient(45deg, #FF7A00, #FF0169, #D300C5)', // Using a gradient
        },
        {
            platform: 'X Corp.',
            icon: FaXTwitter,
            link: 'https://x.com/',
            color: '#000',
        },
        {
            platform: 'YouTube',
            icon: AiOutlineYoutube,
            link: 'https://www.youtube.com/',
            color: '#FF0000',
        },
        {
            platform: 'Facebook',
            icon: FaFacebookF,
            link: 'https://www.facebook.com/',
            color: '#0866ff',
        },
    ];

    return (
        <footer className='footer-background'>
            <div className='footer-overlay'></div>
            <div className='container position-relative'>
                <div className="row gap-3 gap-lg-0">
                    {/* <div className="col-12 col-lg-3 pe-4">
                        <div className='d-flex flex-column gap-3'>
                            <div className='title+logo'>
                                <a href="" className='d-inline-block'>
                                    <img src="/images/logo-white.png" alt="" className='footer-brand-logo-img' />
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
                                label='Read More'
                            />

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
                    </div> */}
                    <div className="col-12  m-auto px-0 px-lg-4">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
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
                                                        <FaRegClock />
                                                    </span>
                                                    October 8, 2023
                                                </a>
                                            </div>
                                        </div>
                                    ))}


                                </div>

                                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                                    <div className='col'>
                                        <h2 className={` m-0 p-0 fs-6 fw-bold text-white text-uppercase my-2 footer-list-title pb-2`}>
                                            Informations
                                        </h2>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <ul className='d-flex flex-column gap-2 col'>
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
                                        <ul className='d-flex flex-column gap-2 col'>
                                            {quick_links2.map((item, idx) => (
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

                                </div>

                                <div className="col-12 col-lg-4 mt-4 mt-md-0">
                                    <div>
                                        <h2 className={` m-0 p-0 fs-6 fw-bold text-white text-uppercase my-2 footer-list-title pb-2`}>
                                            Get In Touch
                                        </h2>
                                    </div>
                                    <div className='d-flex flex-column gap-2'>
                                        <p className='text-white'>
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

                                        <p className='text-white'>
                                        * We do not share your email id
                                        </p>
                                    </div>

                                    <div className='row social-icons mt-4 px-1'>
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
                                    {/* <ul className='d-flex flex-column gap-2'>
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
                                    </ul> */}
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