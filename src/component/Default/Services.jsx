import React from 'react'
import '@/style/Default/Services.css'
import TitleSection from './Reusable/TitleSection'
import BottomContainer from './Reusable/BottomContainer';
import ServiceSlider from './Services/ServiceSlider';
const Services = () => {
    return (
        <section className='services-section py-5'>
            <div className="auto-container py-5">
                <div className="row">
                    <div className="col-lg-8 pb-4 m-auto">
                        <TitleSection className='text-center' textColor='text-white'
                            title='Our Services'
                            headline=' We Offer Different Services'
                            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form believable.'
                        />
                    </div>
                </div>
                <div className="row">
                    <ServiceSlider />
                </div>
            </div>
            <BottomContainer position='curve_shape_bottom_1' />
        </section>
    )
}

export default Services