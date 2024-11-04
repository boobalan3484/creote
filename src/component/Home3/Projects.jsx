import React, { Fragment } from 'react'
import '@/style/Home3/Project.css'
import TitleSection from '@/component/Home2/Reusable/TitleSection'
import LinkButton from '@/component/Home2/Reusable/LinkButton'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Projects = () => {

    const project_list = [
        {
            image: 'project-3-img.jpg',
            tag: 'Human Resource',
            headline: 'Essential Steps to Writing Job Description'
        },
        {
            image: 'project-4-img.jpg',
            tag: 'Leadership',
            headline: 'Time HR Prepares Plastic Contract Manufacturer'
        },
        {
            image: 'project-5-img.jpg',
            tag: 'Coaching',
            headline: 'Six Essential Steps To Writing Successful Job'
        },
        {
            image: 'project-1-img.jpg',
            tag: 'Leadership',
            headline: 'Company Values & The Relationship'
        },
        {
            image:'project-2-img.jpg',
            tag:'Coaching',
            headline:'Complex Dismissal for a Small Company'
        },
    ]
    return (
        <section className="home3_project py-5">
            <div className="container py-5">
                <div className='col-10 m-auto d-flex flex-column flex-lg-row align-items-center justify-content-between mb-4'>
                    <TitleSection className='text-center text-lg-start' textColor='text-white'
                        title='Incredibly'
                        headline='Effective case studies'
                    />
                    <LinkButton label='More works'
                        div_ClassName='theme_btn_all color_one text-md-end'
                        a_ClassName='theme-btn one'
                    />
                </div>
                
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 4,        // Enable loop sliding
                        autoplay: true,      // Auto slide the carousel
                        interval: 4000,      // Slide every 4 seconds
                        arrows: false,
                        // Enable navigation arrows
                        pagination: false,   // Disable pagination
                        pauseOnHover: false, // Keep sliding when hovered
                        perMove: 1,          // Move one slide at a time
                        // Gap between slides (adjust as needed)
                        breakpoints: {
                            1200: {
                                perPage: 4, // 2 slides per view on large screens
                            },
                            990: {
                                perPage: 3, // 1 slide per view on medium screens (tablet)
                            },
                            780: {
                                perPage: 2, // 1 slide per view on medium screens (tablet)
                            },
                            500: {
                                perPage: 1, // 1 slide per view on medium screens (tablet)
                            },
                        },
                    }}
                >
                    {project_list.map((item, idx) => (
                        <Fragment key={idx}>
                            <SplideSlide >
                                <div className="project_post style_nine">
                                    <div className="image">
                                        <img loading="lazy" width="999" height="665" src={`/home3/images/project/${item.image}`} className="img-fluid" alt="img" />
                                        <div className="image_zoom_box ">
                                            <a href={`/home3/images/project/${item.image}`} data-fancybox="gallery"><span className="fa fa-plus zoom_icon"></span></a>
                                        </div>
                                    </div>
                                    <div className="project_caro_content">
                                        <p>{item.tag}</p>
                                        <h2 className="title_pro">
                                            <a href="#" rel="bookmark">{item.headline}</a></h2>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Fragment>
                    ))}
                </Splide>
            </div>
        </section>
    )
}

export default Projects