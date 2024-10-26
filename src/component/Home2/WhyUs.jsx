import React from 'react'
import '@/style/Home2/WhyUs.css'
import TitleSection from './Reusable/TitleSection'
import { FaArrowRight } from "react-icons/fa6";
import BottomContainer from './Reusable/BottomContainer';
import NavsTab from './WhyUs/NavsTab';


const WhyUs = () => {

    // const featured_list = [
    //     {
    //         id: 1,
    //         logo: '24-hours-support',
    //         title: '24/7 support',
    //         description: 'Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.',
    //         label: 'Read More',
    //         link: '/'
    //     },
    //     {
    //         id: 2,
    //         logo: 'email-marketing',
    //         title: 'Quick Response',
    //         description: 'Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.',
    //         label: 'Read More',
    //         link: '/'
    //     },
    //     {
    //         id: 3,
    //         logo: 'team-management',
    //         title: 'Experience Team',
    //         description: 'Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.',
    //         label: 'Read More',
    //         link: '/'
    //     },
    //     {
    //         id: 4,
    //         logo: 'solution-1',
    //         title: 'Smart solutions',
    //         description: 'Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.',
    //         label: 'Read More',
    //         link: '/'
    //     }
    // ]

    return (
        <section className='py-5'>
            <div className='container px-4'>
                <div className='row'>
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <TitleSection className=''
                            title='For Your Business'
                            headline='The Growing Trend of Outsourcing HR Services'
                            description="Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure."
                        />
                        <div className="progress_bar style_two">
                            <div className="progress_new">
                                <div className="ProgressBar ProgressBar--animateText" data-progress="70">
                                    <svg className="ProgressBar-contentCircle" height="170" width="170">
                                        <circle className="ProgressBar-background" cx="85" cy="85" r="75"></circle>
                                        <circle transform="rotate(-90, 85, 85)" className="ProgressBar-circle" cx="85" cy="85" r="75" style={{ strokeDasharray: '471px', strokeDashoffset: '141.3px' }}></circle>
                                    </svg>
                                </div>
                                <div className="progress-value">
                                    <div>
                                        <h6>Year of 2020 </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="content_box">
                                <h2>70%</h2>
                                <h3>Consultion </h3>
                                <p>Certain circumstances seds owing to the claims duty righteous indignation and so
                                    beguiled.</p>
                            </div>
                        </div>
                        <NavsTab />
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="simple_image_boxes style_two bg_op_1" style={{ backgroundImage: ' url(assets/images/banner-bgs-10-1.png)' }}>
                            <div className="parallax_cover">
                                <img src="home2/images/whyUs/about-12.jpg" className="img-fluid" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs