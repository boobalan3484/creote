import React from 'react'
import TitleSection from './Reusable/TitleSection'
import { FaRegClock } from "react-icons/fa6";

const Blogs = () => {

    const blogs_list = [
        {
            id: 1,
            image: 'blog-image-12',
            title: 'My Bedside Table: The Fashion Designer',
            tag: 'Lights',
            date: 'July 5, 2023',
            link: ''
        },
        {
            id: 2,
            image: 'blog-image-13',
            title: 'Shining a New Light on Marsha P. Jonson',
            tag: 'Furnitures',
            date: 'July 8, 2023',
            link: ''
        },
        {
            id: 3,
            image: 'blog-image-14',
            title: 'Home Tour: Cleo & McShane Murnane',
            tag: 'Beds',
            date: 'July 13, 2023',
            link: ''
        },
    ]
    return (
        <section className="blog-section2 py-5" style={{background: 'var(--primary-color-three)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <TitleSection className='text-center'
                            title='Find out our'
                            headline='News & Announcements'
                        />
                    </div>
                    <div className="col-10 m-auto">
                        <div className="blog-posts-section row">
                            {blogs_list.map((item, idx) => (
                                <div className="col p-3" key={idx}>
                                    <div className="card p-3 rounded-0 border-0 shadow-sm">
                                        <img src={`/home2/images/blog/${item.image}.jpg`} className="card-img-top rounded-0" alt='blog-img' />
                                        <div className="card-body p-0 pt-3">
                                            <h5 className="card-title">{item.title}</h5>
                                            <div className='mt-3 d-flex gap-3'>
                                                <div className='px-3 py-1' style={{ background: 'var(--primary-color-one)' }}>
                                                    <small className='text-white fw-semibold'>{item.tag}</small>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center' style={{ color: 'var(--primary-color-one)' }}>
                                                    <FaRegClock />
                                                    <small className='text-secondary'>
                                                        {item.date}
                                                    </small>
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

export default Blogs