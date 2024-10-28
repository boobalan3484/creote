import React from 'react'
import '@/style/Home2/Job.css'
import TitleSection from './Reusable/TitleSection'
import { MdDescription } from 'react-icons/md'
import { IoLocationOutline } from "react-icons/io5";
import { LuBriefcase } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import BottomShape from './Reusable/BottomShape';
const Job = () => {

    const job_list = [
        {
            image: 'logo-one',
            title: 'Junior Graphic Designer (Web)',
            description: 'Weimann LtdIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            location: 'New York ',
            emp_type: 'Full Time',
            posted: 'Posted 6 months ago'
        },
        {
            image: 'logo-two',
            title: 'Finance Manager & Health',
            description: 'Weimann LtdIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            location: 'New York ',
            emp_type: 'Full Time',
            posted: 'Posted 6 months ago'
        },
        {
            image: 'logo-three',
            title: 'Assistant / Store Keeper',
            description: 'Weimann LtdIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            location: 'New York ',
            emp_type: 'Full Time',
            posted: 'Posted 6 months ago'
        },
    ]

    return (
        <section className="job-section pt-5">
            <div className="container">
                <div className="col-8 m-auto">
                    <TitleSection className='text-center'
                        title='For Your Business'
                        headline='Work with us! We have openings for the following positions.'
                    />
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-8 col-md-12">
                            <div className="position-relative" style={{ zIndex: '99' }}>
                                <img src="home2/images/job/cal-img.png" className="img-fluid" alt="image" />
                            </div>
                        </div>
                        <div className="col col-xxl-7 col-xl-7 col-lg-12 col-md-12 mt-5">
                            {job_list.map((item, idx) => (
                                <div className='job-box' key={idx}>
                                    <a href='' >
                                        <div className='inner_bx'>
                                            <div className='logo_bx'>
                                                <img src={`home2/images/job/${item.image}.png`} alt="" />
                                            </div>
                                            <div className='content_bx d-flex flex-column justify-content-between'>
                                                <div className='d-flex flex-column gap-1'>
                                                    <h3 className='text-dark'>
                                                        {item.title}
                                                    </h3>
                                                    <p>
                                                        <strong> Weimann Ltd | </strong> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </p>
                                                </div>
                                                <ul className='meta d-flex flex-column flex-md-row align-items-start align-items-md-center gap-1 gap-md-3 mt-2 pt-2'>
                                                    <li className='d-flex align-items-center gap-1'>
                                                        <IoLocationOutline />
                                                        {item.location}
                                                    </li>
                                                    <li className='d-flex align-items-center gap-1'>
                                                        <LuBriefcase />
                                                        {item.emp_type}
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2'>
                                                        <FaRegClock />
                                                        {item.posted}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <BottomShape />
        </section>
    )
}

export default Job