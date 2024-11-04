import React from 'react'
import TitleSection from '../Home2/Reusable/TitleSection'
import '@/style/Home3/Contact.css'

const Contact = () => {
    return (
        <section className="home3-contact contact-section py-5">

            <div className="container py-5">
                <div className=" d-flex flex-column align-items-center text-center">
                    <TitleSection textColor='text-light'
                        className='d-flex flex-column justify-content-center align-items-center'
                        title='Start Here'
                        headline={`Career Opportunities in Creote`}
                    />


                    <div className="theme_btn_all color_one">
                        <a href="#" target="_blank" rel="nofollow" className="theme-btn one">Contact</a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact