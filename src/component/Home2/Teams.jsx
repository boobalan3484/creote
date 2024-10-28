import React from 'react'
import '@/style/Home2/Teams.css'
import TitleSection from './Reusable/TitleSection'
import { FaFacebookF } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Teams = () => {

    const featured_list = [
        {
            id: 1,
            image: 'team-1.jpg',
            name: 'Amelia Margaret',
            position: 'Director ',
            link: '/'
        },
        {
            id: 2,
            image: 'team-2.jpg',
            name: 'Mary Merrill',
            position: 'Operations Director ',
            link: '/'
        },
        {
            id: 3,
            image: 'team-3.png',
            name: 'Andrew Cameron',
            position: 'Team Leader ',
            link: '/'
        },
        {
            id: 4,
            image: 'team-4.png',
            name: 'Sofia Charlotte',
            position: 'Manager ',
            link: '/'
        }
    ]

    return (
        <section className='py-5' style={{ background: 'var(--primary-color-three) !important' }}>
            <div className='container px-4'>
                <div className='row gap-4'>
                    <div className="col-lg-6 m-auto text-center">
                        <TitleSection
                            title='Dedicated Team'
                            headline=' Professional Individuals '
                            description="Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure."
                        />
                    </div>
                    <div className="col-lg-10 m-auto">
                        <div className='row row-cols-sm-2 row-cols-lg-4'>
                            {featured_list.map((item, idx) => (
                                <div className="col p-2 d-flex" key={idx}>
                                    {/* <div className='choose-item-anime h-100 d-flex'
                                    // data-aos='fade-up' data-aos-delay={idx * 200}
                                    >
                                        <div className='choose_box type_one d-flex'>
                                            <div className="image_box">
                                                <img src={`/icons/${item.logo}.png`} alt='logo' className='img-fluid' />
                                            </div>
                                            <div className="content_box">
                                                <span className='step_no'>{item.id}</span>
                                                <div className="text_box d-flex flex-column justify-content-between gap-2 h-100">
                                                    <h2>
                                                        <a href="">
                                                            {item.title}
                                                        </a>
                                                    </h2>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                    <div>
                                                        <a href="">
                                                            {item.label}
                                                            <span className='ps-2'>
                                                                <FaArrowRight />
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="team_box style_four mb-2">
                                        <div className="team_box_outer h-100">
                                            <div className="image_box ">
                                                <img src={`home2/images/team/${item.image}`} alt="team image" />
                                            </div>
                                            <div className="content_box ">
                                                <div className="share_links text-center d-flex justify-content-center align-items-center">
                                                    <ul className="clearfix d-flex gap-2">
                                                        <li><a href="#" className='d-flex justify-content-center align-items-center'>
                                                            <FaFacebookF />
                                                        </a></li>
                                                        <li><a href="#" className='d-flex justify-content-center align-items-center'>
                                                            <FaXTwitter />
                                                        </a></li>
                                                        <li><a href="#" className='d-flex justify-content-center align-items-center'>
                                                            <FaSkype />
                                                        </a></li>
                                                        <li><a href="#" className='d-flex justify-content-center align-items-center'>
                                                            <FaInstagram />
                                                        </a></li>
                                                    </ul>
                                                </div>
                                                <h2> <a href="#" className='text-dark fs-5 fw-bold'>
                                                    {item.name}</a>
                                                </h2>
                                                <h6 className="job_details">{item.position} </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams