'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Hero from '@/component/Home2/Hero'
import AboutUs from '@/component/Home2/AboutUs'
import Client from '@/component/Default/Client'
import Services from '@/component/Home2/Services'
import WhyUs from '@/component/Home2/WhyUs'
import Projects from '@/component/Default/Projects'
import LatestBlogs from '@/component/Default/LatestBlogs'
import Testimonial from '@/component/Default/Testimonial'
import Contact from '@/component/Default/Contact'
import ChoosePlans from '@/component/Default/ChoosePlans'

const LayoutHome2 = () => {
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
            <Services />
            <WhyUs />

            {/* 
            <Client />
            <Services />
            <WhyUs />
            <Projects />
            <Testimonial />
            <Contact />
            <ChoosePlans />
            <LatestBlogs /> */}
        </main>
    )
}

export default LayoutHome2