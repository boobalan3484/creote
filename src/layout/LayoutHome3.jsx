'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Hero from '@/component/Home2/Hero'
import AboutUs from '@/component/Home2/AboutUs'
import Services from '@/component/Home2/Services'
import WhyUs from '@/component/Home2/WhyUs'
import Contact from '@/component/Home2/Contact'
import Teams from '@/component/Home2/Teams'
import VideoSection from '@/component/Home2/VideoSection'
import Blogs from '@/component/Home2/Blogs'
import Job from '@/component/Home2/Job'
import ProcessSection from '@/component/Home2/ProcessSection'

const LayoutHome3 = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 800,
        })
    }, [])

    return (
        <main>
            <Hero />
            <ProcessSection />
            <AboutUs />
            <Services />
            <WhyUs />
            <Teams />
            <VideoSection />
            <Job />
            <Blogs />
            <Contact />
        </main>
    )
}

export default LayoutHome3