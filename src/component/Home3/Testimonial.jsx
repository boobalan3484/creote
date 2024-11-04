import React from 'react'
import '@/style/Default/Testimonial.css'
import TitleSection from '@/component/Home2/Reusable/TitleSection'
import TestimonialSlider from './Testimonial/TestimonialSlider'

const Testimonial = () => {
    return (
        <section className='py-5'>
            <div className='container px-4 pb-5'>
                <div className='row gap-4'>
                    <div className="col-lg-8 m-auto text-center">
                        <TitleSection
                        className='d-flex flex-column justify-content-center align-items-center'
                            title='Our Clients'
                            headline='Customers Experience'
                        />
                    </div>
                    <div className="col-12">
                        <div className='row '>
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial