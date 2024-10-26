import React from 'react'
import '@/style/Home2/Services.css'
import TitleSection from './Reusable/TitleSection'
// import BottomContainer from './Reusable/BottomContainer';
import ServiceSlider from './Services/ServiceSlider';
const Services = () => {
    return (
        <section className='service-section'>
            <div className="auto-container py-5">
                <div className="row">
                    <div className="col-lg-8 pb-4 m-auto">
                        <TitleSection className='text-center' textColor='text-white'
                            title='Leading'
                            headline='Effective Solutions'
                            description='We work with your company to identify position requirements, implement recruitment programs, and initiate employee assessments that maximize recruitment efforts'
                        />
                    </div>
                </div>
                <div className="row">
                    <ServiceSlider />
                </div>
            </div>
            {/* <BottomContainer position='curve_shape_bottom_1' /> */}
        </section>
    )
}

export default Services