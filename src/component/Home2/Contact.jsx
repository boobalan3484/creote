import React from 'react'
import '@/style/Home2/Contact.css'
import LinkButton from './Reusable/LinkButton'

const Contact = () => {
    return (
        <section className="contact-section-2 py-5">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-7 col-lg-9 col-md-12 col-sm-12 col-xs-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                        <div className="title_all_box style_one light_color text-white">
                            <div className="title_sections">
                                <div className="title text-white">Get the Countsy advantage</div>
                                <p>Our power of choice is untrammelled and when nothing prevents being able to do what we
                                    like best every pleasure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center col-xl-5 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <LinkButton
                            label='Read more'
                            div_ClassName='theme_btn_all color_two'
                            a_ClassName='theme_btn one'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact