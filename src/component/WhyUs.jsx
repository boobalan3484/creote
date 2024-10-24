import React from 'react'
import '@/style/WhyUs.css'
import TitleSection from './Reusable/TitleSection'
import { FaArrowRight } from "react-icons/fa6";
import BottomContainer from './Reusable/BottomContainer';


const WhyUs = () => {

    const featured_list = [
        {
            id: 1,
            logo: '24-hours-support',
            title: '24/7 support',
            description: 'Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.',
            label: 'Read More',
            link: '/'
        },
        {
            id: 2,
            logo: 'email-marketing',
            title: 'Quick Response',
            description: 'Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.',
            label: 'Read More',
            link: '/'
        },
        {
            id: 3,
            logo: 'team-management',
            title: 'Experience Team',
            description: 'Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.',
            label: 'Read More',
            link: '/'
        },
        {
            id: 4,
            logo: 'solution-1',
            title: 'Smart solutions',
            description: 'Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.',
            label: 'Read More',
            link: '/'
        }
    ]

    return (
        <section className='py-5'>
            <div className='container px-4'>
                <div className='row gap-4'>
                    <div className="col-lg-8 m-auto text-center">
                        <TitleSection className=''
                            title='CHOICES & OCCURS'
                            headline=' Why People Choose us '
                            description="Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
                        />
                    </div>
                    <div className="col-12">
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                            {featured_list.map((item, idx) => (
                                <div className="col p-2 d-flex" key={idx}>
                                    <div className='choose-item-anime h-100 d-flex' 
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

export default WhyUs