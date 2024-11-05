'use client'
import React, { createElement, Fragment, useEffect, useState } from 'react'
import { FaAngleDown, FaFacebookF, FaSkype, FaXTwitter } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import { data } from '@/utils/Data'
import '@/style/Home3/Header.css'
import { HiOutlineSearch } from "react-icons/hi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiShieldKeyholeLine } from "react-icons/ri";


const Header3 = () => {
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
        <section className="home3_header header_area" id="header_contents">
            <header>
                <div className="container-fluid px-2 px-lg-5">
                    <div className="row align-items-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-7 col-sm-6 col-12 d-flex justify-content-between align-items-center logo_column">
                            <div className="header_logo_box">
                                <a href="/" className="logo navbar-brand" target="_blank" rel="nofollow">
                                    <img src={logo.logo_default.src} alt="Creote Elementor" className="logo_default" />
                                    {/* <img src="assets/images/logo-default.png" alt="Creote Elementor" className="logo__sticky" /> */}
                                </a>
                            </div>
                            <div className='d-flex d-lg-none'>
                                <button className='fs-2 p-2 d-flex header-breadcrumb fw-semibold' onClick={() => setNavMenu(!navMenu)}>
                                    {navMenu ? <CgClose /> : <HiMenu />}
                                </button>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-9 col menu_column">
                            <div className='col d-none w-100 d-lg-flex flex-row justify-content-center align-items-center gap-lg-5'>
                                <nav>
                                    <ul className='list-unstyled d-flex flex-row flex-wrap gap-lg-4 gap-xl-5 my-0'>
                                        {nav_links.map((category, idx) => (
                                            <Fragment key={idx}>
                                                {!category.child ?
                                                    (
                                                        <li className='' key={category.id}>
                                                            <a href='/' className=' header-nav-link text-capitalize fw-semibold'>
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
                                                            <a className='header-nav-link text-capitalize fw-semibold d-flex align-items-center gap-2'>
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
                            </div>
                        </div>
                        <div className="d-none d-sm-block col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-3 right_column">
                            <div className="header_right_content">
                                <ul className='d-flex gap-3 align-items-center'>
                                    <li>
                                        <button type="button" className="search-toggler"><i className="icon-search"></i>
                                            <HiOutlineSearch className='text-secondary' />
                                        </button>
                                    </li>
                                    <li className='border-end border-2 border-secondary-subtle py-2 pe-3'>
                                        <div className="mini_cart_togglers header_side_cart">
                                            <div className="mini-cart-count">
                                                0
                                            </div>
                                            <i className="icon-shopping-bag1">
                                                <LiaShoppingBagSolid className='fs-4 text-secondary' />
                                            </i>
                                        </div>
                                    </li>
                                    <li className="last">
                                        <a href="#" target="_blank" rel="nofollow" className="login text-secondary">
                                            {/* <CgKeyhole className='fs-4 me-1' /> */}
                                            <RiShieldKeyholeLine className='fs-4 me-1'/>
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <div className="med_rg_side">
                                            <ul className="social_media_head d-flex gap-2">
                                                <li> <a href="#" target="_blank" rel="nofollow"><FaFacebookF /></a></li>
                                                <li> <a href="#" target="_blank" rel="nofollow"> <FaXTwitter /></a></li>
                                                <li> <a href="#" target="_blank" rel="nofollow"><FaSkype /></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
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
            </header>
        </section >
    )
}

export default Header3