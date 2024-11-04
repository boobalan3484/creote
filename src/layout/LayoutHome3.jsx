'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import AboutUs from '@/component/Home3/AboutUs'
import Teams from '@/component/Home2/Teams'
import Client from '@/component/Default/Client'
import Contact from '@/component/Home3/Contact'
import Testimonial from '@/component/Home3/Testimonial'
import Blogs from '@/component/Home3/Blogs'
import Services from '@/component/Home3/Services'
import Projects from '@/component/Home3/Projects'
import ContactForm from '@/component/Home3/ContactForm'
import Hero from '@/component/Home3/Hero'

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
            <Services />
            <AboutUs />
            <Projects />
            <ContactForm />
            <Teams />
            <Testimonial />
            <Client />
            <Blogs />
            <Contact />
        </main>
    )
}

export default LayoutHome3