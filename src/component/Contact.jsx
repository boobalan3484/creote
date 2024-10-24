import React from 'react'
import '@/style/Contact.css'
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import TitleSection from './Reusable/TitleSection';
import LinkButton from './Reusable/LinkButton';
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
    return (
        <section className='contact-section mt-5 mt-lg-0 pb-5 pb-lg-0'>
            <div className='container px-2 px-lg-5'>
                <div className="row px-2 px-lg-5 mx-0 mx-lg-4">
                    <div className="col-lg-5 col-md-12">
                        <div style={{ marginTop: '-50px' }} data-aos='fade-right' data-aos-delay='300'>
                            <img src="/images/contact/cosnsult-image.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 pt-4 pt-lg-0 d-grid align-content-center gap-3">
                            <div className="col">
                                <TitleSection
                                    title='ANY TIME, ANY WHERE CONSULTING'
                                    headline=' Get A Free Consultancy Right Now Here'
                                    description="We help you to see world differently , discover oppurtunities you may never have imagined."
                                />
                            </div>
                            <div className="col">
                                <div className="row d-flex flex-column flex-sm-row gap-4 gap-sm-0">
                                    <div className="col">
                                        <LinkButton
                                            div_ClassName='theme_btn_all'
                                            a_ClassName='theme_btn one'
                                            label='Contact us'
                                        />
                                    </div>
                                    <div className="col">
                                        <div className='same_contact d-flex gap-3 align-items-center'>
                                            <span>
                                                <BsTelephone />
                                            </span>
                                            <div className="content">
                                                <h6 className="titles"> Phone</h6>
                                                <a href="tel:+(1 800) - 5554400">+(1 800) - 5554400</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact