import React from 'react'
import '@/style/Default/Testimonial.css'
import TitleSection from './Reusable/TitleSection'
import TestimonialSlider from './Testimonial/TestimonialSlider'

const Testimonial = () => {
    return (
        <section className='py-5'>
            <div className='container px-4 pb-5'>
                <div className='row gap-4'>
                    <div className="col-lg-8 m-auto text-center">
                        <TitleSection
                            title='TESTIMONIAL'
                            headline=' Words From Our Customers '
                            description="Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."
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