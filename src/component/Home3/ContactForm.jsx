import React, { createElement } from 'react'
import TitleSection from '@/component/Home2/Reusable/TitleSection'
import { IoPlayOutline } from 'react-icons/io5'
import '@/style/Home3/ContactForm.css'

import { IoSettingsOutline } from "react-icons/io5";
// {/* <IoSettingsOutline />
import { PiToolbox } from "react-icons/pi";
import LinkButton from '../Home2/Reusable/LinkButton';
{/* <PiToolbox />  */ }

const ContactForm = () => {

    const funFact1 = [
        {
            icon: IoSettingsOutline,
            description: 'It is a long establish fact that a reader distracted',
            count: 1456,
            metric_suffix: 'Cases Done'
        },
        {
            icon: PiToolbox,
            description: 'It is a long establish fact that a reader distracted',
            count: 356,
            metric_suffix: 'Satisfied clients'
        }
    ]
    return (
        <section className="home3_contact_form">
            <div className="position-relative">
                <div className="col bg-secondary-subtle py-5">
                    <div className="container contact_form_video_icon">
                        <div className="col col-lg-5">
                            <TitleSection
                                title='Just Watch Our Work Process'
                                headline='Extensive experience across all industries.'
                            />
                            <div className="video_inner type_seven">
                                <a href="#" className="lightbox-image">
                                    <i className="icon-play">
                                        <IoPlayOutline />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col bg-bg-light-subtle py-5">
                    <div className="container contact_form_funfacts">
                        <div className="col col-lg-5">
                            <div className="row gap-3">
                                {funFact1.map((item, idx) => (
                                    <div className="col content_box d-flex flex-column gap-2" key={idx}>
                                        <div className='icon'>
                                            {createElement(item.icon, { className: 'icon' })}
                                        </div>
                                        <p>
                                            {item.description}
                                        </p>
                                        <h6>
                                            <div className="coun_ter d-block">
                                                <span className="count-text" data-speed="1500" data-stop="1456">{item.count}</span>
                                                <small>+</small>
                                            </div>
                                            {item.metric_suffix}
                                        </h6>
                                    </div>
                                ))}
                                <p>
                                    In job gives you handcrafted options such as front admin reviews or email
                                    notifications. It also gives employer management for apps.
                                </p>
                                <LinkButton
                                    label='Contact us'
                                    div_ClassName='theme_btn_all color_one'
                                    a_ClassName='theme-btn one'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute end-0 top-0 h-100 d-none d-lg-flex justify-content-center align-items-center col-7">
                    <div className='p-lg-4 p-xl-5 bg-light rounded shadow mx-auto' style={{width:'70%'}}>
                        <TitleSection className='text-center'
                            title='Reach us'
                            headline='Send a message'
                        />
                        <form>
                            <div className="row row-cols-2">
                                <div className='col-6 pb-2 d-flex flex-column'>
                                    <label htmlFor="fullName" className='fw-bold'> Your name</label>
                                    <input
                                        id='fullName'
                                        name='fullName'
                                        type="text"
                                        className='border rounded px-3 py-2 mt-1'
                                        placeholder='Enter your name'
                                    />
                                </div>
                                <div className='col-6 pb-2 d-flex flex-column'>
                                    <label htmlFor="email" className='fw-bold'> Your email</label>
                                    <input
                                        id='email'
                                        name='email'
                                        type="email"
                                        className='border rounded px-3 py-2 mt-1'
                                        placeholder='Enter your email'
                                    />
                                </div>
                                <div className='col-6 pb-2 d-flex flex-column'>
                                    <label htmlFor="mobile" className='fw-bold'> Phone Number</label>
                                    <input
                                        id='mobile'
                                        name='mobile'
                                        type="tel"
                                        className='border rounded px-3 py-2 mt-1'
                                        placeholder='Enter your number'
                                    />
                                </div>
                                <div className='col-6 pb-2 d-flex flex-column'>
                                    <label htmlFor="subject" className='fw-bold'> Subject</label>
                                    <input
                                        id='subject'
                                        name='subject'
                                        type="text"
                                        className='border rounded px-3 py-2 mt-1'
                                        placeholder='Enter your subject'
                                    />
                                </div>
                                <div className='col-12 pb-2 d-flex flex-column'>
                                    <label htmlFor="message" className='fw-bold'> Your message (optional)</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder='Enter your message'
                                        className='border rounded px-3 py-2 mt-1'
                                        style={{ height: '80px !important', minHeight: '80px !important', maxHeight: '80px !important' }}>
                                    </textarea>
                                </div>

                            </div>
                            <LinkButton
                                label='Submit'
                                div_ClassName='theme_btn_all color_one'
                                a_ClassName='theme-btn one text-uppercase w-100 mt-3'
                            />

                        </form>
                        <div className='contact_form_video_icon mt-4 d-flex gap-3'>
                            <div className="video_inner type_seven">
                                <a href="#" className="lightbox-image">
                                    <i className="icon-play">
                                        <IoPlayOutline />
                                    </i>
                                </a>
                            </div>
                            <div >
                                <h4> General Enquires</h4>
                                <div className='d-flex flex-column flex-md-row gap-3'>
                                    <div>
                                        <span>
                                            Phone:
                                        </span>
                                        <a href="">
                                            +98 06071234
                                        </a>
                                    </div>
                                    <div>
                                        <span>
                                            Email:
                                        </span>
                                        <a href="">
                                            sendmail@getus.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col d-block d-lg-none justify-content-center align-items-center col">
                    <div className='p-3 p-md-4 bg-light rounded shadow w-auto m-3'>
                        <TitleSection className='text-center'
                            title='Reach us'
                            headline='Send a message'
                        />
                        <form>
                            <div className="row row-cols-2">
                                <div className='col-12 col-sm-6 pb-2 d-flex flex-column'>
                                    <label htmlFor="fullName" className='fw-bold'> Your name</label>
                                    <input
                                        id='fullName'
                                        name='fullName'
                                        type="text"
                                        className='border rounded px-3 py-2 mt-1'
                                        placeholder='Enter your name'
                                    />
                                </div>
                                <div className='col-12 col-sm-6 pb-2 d-flex flex-column'>
                                    <label htmlFor="email" className='fw-bold'> Your email</label>
                                    <input
                                        id='email'
                                        name='email'
                                        type="email"
                                        className='border rounded px-3 py-2 mt-1'
                                        placeholder='Enter your email'
                                    />
                                </div>
                                <div className='col-12 col-sm-6 pb-2 d-flex flex-column'>
                                    <label htmlFor="mobile" className='fw-bold'> Phone Number</label>
                                    <input
                                        id='mobile'
                                        name='mobile'
                                        type="tel"
                                        className='border rounded px-3 py-2 mt-1'
                                        placeholder='Enter your number'
                                    />
                                </div>
                                <div className='col-12 col-sm-6 col-sm-6pb-2 d-flex flex-column'>
                                    <label htmlFor="subject" className='fw-bold'> Subject</label>
                                    <input
                                        id='subject'
                                        name='subject'
                                        type="text"
                                        className='border rounded px-3 py-2 mt-1'
                                        placeholder='Enter your subject'
                                    />
                                </div>
                                <div className='col-12 pb-2 d-flex flex-column'>
                                    <label htmlFor="message" className='fw-bold'> Your message (optional)</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder='Enter your message'
                                        className='border rounded px-3 py-2 mt-1'
                                        style={{ height: '80px !important', minHeight: '80px !important', maxHeight: '80px !important' }}>
                                    </textarea>
                                </div>

                            </div>
                            <LinkButton
                                label='Submit'
                                div_ClassName='theme_btn_all color_one'
                                a_ClassName='theme-btn one text-uppercase w-100 mt-3'
                            />

                        </form>
                        <div className='contact_form_video_icon mt-4 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3'>
                            <div className="video_inner type_seven">
                                <a href="#" className="lightbox-image">
                                    <i className="icon-play">
                                        <IoPlayOutline />
                                    </i>
                                </a>
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <h4> General Enquires</h4>
                                <div className='d-flex flex-column flex-md-row gap-2'>
                                    <div>
                                        <span>
                                            Phone:
                                        </span>
                                        <a href="">
                                            +98 06071234
                                        </a>
                                    </div>
                                    <div>
                                        <span>
                                            Email:
                                        </span>
                                        <a href="">
                                            sendmail@getus.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm