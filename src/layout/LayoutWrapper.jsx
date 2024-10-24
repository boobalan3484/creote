'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Hero from '@/component/Hero'
import AboutUs from '@/component/AboutUs'
import Client from '@/component/Client'
import Services from '@/component/Services'
import WhyUs from '@/component/WhyUs'
import Projects from '@/component/Projects'
import LatestBlogs from '@/component/LatestBlogs'
import Testimonial from '@/component/Testimonial'
import Contact from '@/component/Contact'
import ChoosePlans from '@/component/ChoosePlans'

const LayoutWrapper = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 800,
        })
    }, [])

    return (
        <main>
            <Hero />
            <AboutUs />
            <Client />
            <Services />
            <WhyUs />
            <Projects />
            <Testimonial />
            <Contact />
            <ChoosePlans />
            <LatestBlogs />
        </main>
    )
}

export default LayoutWrapper