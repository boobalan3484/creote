import React from 'react'
import '@/style/Default/Projects.css'
import BottomContainer from './Reusable/BottomContainer'
import TitleSection from './Reusable/TitleSection'
import LinkButton from './Reusable/LinkButton'

const Projects = () => {

    const work_list = [
        {
            image: 'project-6',
            title: 'Shared Time Human Resources Management',
            tag1: 'Human Resources',
            tag2: 'Recruiting',
            link: '/'
        },
        {
            image: 'project-5',
            title: 'Six Essential Steps To Writing Successful Job',
            tag1: 'Coaching',
            tag2: 'Values',
            link: '/'
        },
        {
            image: 'project-4',
            title: 'Time HR Prepares Plastic ContractManufacturer',
            tag1: 'Leadership',
            tag2: 'Pre sale',
            link: '/'
        },
        {
            image: 'project-3',
            title: 'Essential Steps to Writing Job Description',
            tag1: 'Human Resources',
            tag2: 'Recruiting',
            link: '/'
        },
        {
            image: 'project-2',
            title: 'Complex Dismissal for a Small Company',
            tag1: 'Coaching',
            tag2: 'Values',
            link: '/'
        },
        {
            image: 'project-1',
            title: 'Company Values & The Relationship',
            tag1: 'Leadership',
            tag2: 'Pre sale',
            link: '/'
        },
    ]

    return (
        <section className='projects-section py-5'>
            <BottomContainer position='curve_shape_top_1' />
            <div className='container py-5'>
                <div className='row gap-4'>
                    <div className="col-12 text-start">
                        <div className='d-flex text-white align-items-center justify-content-between'>
                            <TitleSection className=''
                                title='Our Projects'
                                headline=' A Glance of Our Work '
                            />
                            <LinkButton
                                div_ClassName='theme_btn_all'
                                a_ClassName='theme_btn one'
                                label='View More' dataAos='zoom-in' dataAosDelay='400' />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                            {work_list.map((item, idx) => (
                                <div className="col p-3 my-0" key={idx}>
                                    <div className='projects-item-anime'
                                    // data-aos='fade-up' data-aos-delay={idx * 200}
                                    >
                                        <div className="project_box type_one">
                                            <div className="image_box">
                                                <img src={`/images/project/${item.image}.jpg`} className="img-fluid" alt="img" />
                                                <div className="overlay"></div>
                                            </div>
                                            <div className="content_box">
                                                <div className="content_box_inner">
                                                    <h2 className="entry_title">
                                                        <a href={item.link}>
                                                            {item.title}
                                                        </a>
                                                    </h2>
                                                    <p>
                                                        <a href=""> {item.tag1} </a> | <a href=""> {item.tag2} </a>
                                                    </p>
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
            <BottomContainer position='curve_shape_bottom_1' />
        </section>
    )
}

export default Projects