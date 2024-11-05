'use client'
import React, { createElement, Fragment, useEffect, useState } from 'react'
import '@/style/Home2/Header.css'
// import LinkButton from '../SectionComponent/LinkButton'
import { FaAngleDown } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { data } from '@/utils/Data'
import LinkButton from './Reusable/LinkButton';

// const nav_links = [
//     {
//         id: 1,
//         label: 'Home',
//         link: '/',
//         child: [
//             {
//                 id: 1,
//                 parent_id: 1,
//                 label: 'Home 1',
//                 link: '/',
//             },
//             {
//                 id: 2,
//                 parent_id: 1,
//                 label: 'Home 2',
//                 link: '/home2',
//             },
//             {
//                 id: 3,
//                 parent_id: 1,
//                 label: 'Home 3',
//                 link: '/home3',
//             },
//         ]
//     },
//     {
//         id: 2,
//         label: 'About us',
//         link: '/',
//     },
//     {
//         id: 3,
//         label: 'Services',
//         link: '/',
//         child: [
//             {
//                 id: 1,
//                 parent_id: 3,
//                 label: 'Pricing Plan',
//                 link: '/',
//             },
//             {
//                 id: 2,
//                 parent_id: 3,
//                 label: 'Partners',
//                 link: '/',
//             },
//         ]
//     },
//     {
//         id: 4,
//         label: 'Influencer',
//         link: '/',
//     },
//     {
//         id: 5,
//         label: 'Pages',
//         link: '/',
//         child: [
//             {
//                 id: 1,
//                 parent_id: 5,
//                 label: 'Gallery',
//                 link: '/',
//             },
//             {
//                 id: 2,
//                 parent_id: 5,
//                 label: 'Contact us',
//                 link: '/',
//             },
//             {
//                 id: 3,
//                 parent_id: 5,
//                 label: 'FAQ',
//                 link: '/',
//             },
//             {
//                 id: 4,
//                 parent_id: 5,
//                 label: 'Blog',
//                 link: '/',
//             },
//             {
//                 id: 5,
//                 parent_id: 5,
//                 label: 'Error 404',
//                 link: '/',
//             },
//         ]
//     }
// ]

const Header = () => {

    const { logo, nav_links, contact_us } = data

    const [navMenu, setNavMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset; // Cross-browser compatibility
        if (scrollY > 50) {  // Adjust this value based on how much scroll should trigger the opacity change
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    const handleMouseEnter = (categoryID) => {
        setActiveMenu(categoryID); // Set active menu on hover
    };
    const handleMouseLeave = () => {
        setActiveMenu(null); // Clear active menu on hover leave
    };
    const handleClick = (categoryID) => {
        setActiveMenu(activeMenu === categoryID ? null : categoryID); // Toggle menu on click
    };

    return (
        <div className='header_area'>
            <header className='header_main'>
                <section className='header-top'>
                    <div className="header_top">
                        <div className="py-1 container d-flex flex-column flex-lg-row justify-content-center">
                            <div className="d-flex">
                                <ul className="contact_info_two text-start text-lg-center">
                                    {contact_us.map((item, idx) => (
                                        <li className="single my-2 my-lg-0 mx-3" key={idx}>
                                            <div className='home2_icon_bg d-flex gap-2'>
                                                <span className="icon-telephone"> {createElement(item.icon, { className: 'fs-3' })}</span>
                                                <div className='d-flex flex-column text-start gap-2'>
                                                    <h5 className='text-capitalize'> {item.platform} </h5>
                                                    <a href={item.url}>{item.label}</a>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='header-section2'>
                    <div className='header-overlay'>
                        <div className={`header-effect ${isVisible ? 'header-visible' : ''}`}></div>
                    </div>
                    <div className="position-relative">
                        <div className="container-lg header-container flex-row align-items-center justify-content-between gap-3">
                            <div className='header-logo-wrapper '>
                                <div className='header-logo-anime'>
                                    <a href="/" className='header-logo-link'>
                                        <img src={logo.logo_white.src} alt="" className='header-logo-img' />
                                    </a>
                                </div>
                            </div>
                            <div className='d-flex d-lg-none'>
                                <button className='fs-2 p-2 d-flex header-breadcrumb fw-semibold' onClick={() => setNavMenu(!navMenu)}>
                                    {navMenu ? <CgClose /> : <HiMenu />}
                                </button>
                            </div>
                            <div className='col home2_header d-none  d-lg-flex flex-row justify-content-end align-items-center gap-lg-5'>
                                <nav>
                                    <ul className='list-unstyled d-flex flex-row flex-wrap gap-lg-4 gap-xl-5 my-0'>
                                        {nav_links.map((category, idx) => (
                                            <Fragment key={idx}>
                                                {!category.child ?
                                                    (
                                                        <li className='' key={category.id}>
                                                            <a href='/' className=' header-nav-link2 text-uppercase fw-semibold'>
                                                                {category.label}
                                                            </a>
                                                        </li>
                                                    ) : (
                                                        <li className='position-relative pb-1'
                                                            onMouseEnter={() => handleMouseEnter(category.id)}
                                                            onMouseLeave={handleMouseLeave}
                                                            onClick={() => handleClick(category.id)}
                                                            key={category.id}
                                                        >
                                                            <a className='header-nav-link2 text-uppercase fw-semibold d-flex align-items-center gap-2'>
                                                                {category.label}
                                                                <FaAngleDown />
                                                            </a>
                                                            {(activeMenu === category.id) && (
                                                                <ul className='list-unstyled position-absolute rounded shadow header-nav-link-sub-menu d-flex flex-column'>
                                                                    {category.child.map((subCategory) => (
                                                                        <li key={subCategory.id} className='header-nav-sub-menu-link px-4 py-2'>
                                                                            <a href={subCategory.link} className='text-capitalize fw-semibold'>
                                                                                {subCategory.label}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    )}
                                            </Fragment>
                                        ))}
                                    </ul>
                                </nav>
                                <button type="button" className="search-toggler"><i className="icon-search"></i>
                                    <HiOutlineSearch className='text-white' />
                                </button>
                                <LinkButton label='Get Started'
                                    a_ClassName='theme-btn one color_white_1' />
                            </div>
                        </div>
                        {navMenu && (
                            <div className='col d-flex flex-column d-lg-none bg-light px-4 py-3 shadow rounded gap-3'>
                                <nav>
                                    <ul className='list-unstyled d-flex flex-column flex-wrap gap-3 gap-lg-4 gap-xl-5 my-0'>
                                        {nav_links.map((category, idx) => (
                                            <Fragment key={idx}>
                                                {!category.child ?
                                                    (
                                                        <li className='' key={category.id}>
                                                            <a href='/' className='header-nav-link text-uppercase fw-semibold'>
                                                                {category.label}
                                                            </a>
                                                        </li>
                                                    ) : (
                                                        <li className='position-relative'
                                                            // onMouseEnter={() => handleMouseEnter(category.id)}
                                                            // onMouseLeave={handleMouseLeave} key={category.id}
                                                            onClick={() => handleClick(category.id)}
                                                            key={category.id}
                                                        >
                                                            <a className='header-nav-link text-uppercase fw-semibold d-flex align-items-center gap-2'>
                                                                {category.label}
                                                                <FaAngleDown />
                                                            </a>
                                                            {(activeMenu === category.id) && (
                                                                <ul className='list-unstyled position-relative header-nav-link-sub-menu d-flex flex-column'>
                                                                    {category.child.map((subCategory) => (
                                                                        <li key={subCategory.id} className='header-nav-sub-menu-link px-4 py-2'>
                                                                            <a href={subCategory.link} className='text-capitalize fw-semibold'>
                                                                                {subCategory.label}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    )}
                                            </Fragment>
                                        ))}
                                    </ul>
                                </nav>
                                {/* <LinkButton label='Get Started' margin='my-0' className='w-100 rounded-1 justify-content-center' /> */}
                            </div>
                        )}
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header