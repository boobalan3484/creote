import React from 'react'
import '@/style/Default/ChoosePlans.css'
import TitleSection from './Reusable/TitleSection'
import { FaArrowRight, FaRegCircleCheck } from "react-icons/fa6";

const ChoosePlans = () => {

    const article_list = [
        {
            badge_label: 'Recommended',
            title: 'Basic Pack',
            price: '22',
            description: 'Power of choice is untrammelled and do what we like best.',
            ul: [
                {
                    list: '4-5 Weeks from to finish',
                },
                {
                    list: 'Organisational Strategy',
                },
                {
                    list: '20 Days of support',
                },
                {
                    list: 'Data sprint Results revision',
                },
                {
                    list: 'Data sprint Results revision',
                },
            ]
        },
        {
            badge_label: 'Most Recommended',
            title: 'Standard Pack',
            price: '59',
            description: 'Matters to principle of selection our pleasures to secure.',
            ul: [
                {
                    list: '4-5 Weeks from to finish',
                },
                {
                    list: 'Organisational Strategy',
                },
                {
                    list: '20 Days of support',
                },
                {
                    list: 'Data sprint Results revision',
                },
                {
                    list: 'Data sprint Results revision',
                },
            ]
        },
        {
            badge_label: 'Popular Pack',
            title: 'Advanced Pack',
            price: '99',
            description: 'These cases are perfectly simple & easy to distinguish.',
            ul: [
                {
                    list: '4-5 Weeks from to finish',
                },
                {
                    list: 'Organisational Strategy',
                },
                {
                    list: '20 Days of support',
                },
                {
                    list: 'Data sprint Results revision',
                },
                {
                    list: 'Data sprint Results revision',
                },
            ]
        }
    ]

    return (
        <section className='pricing_section py-5'>
            {/* <div className='blog-overlay'></div> */}
            <div className='container position-relative px-2 px-lg-5'>
                <div className="row px-2 px-lg-5">
                    <div className="col-12 m-auto text-start">
                        <div className='row text-white'>
                            <TitleSection className='col-12 col-lg-6 d-flex align-items-center'
                                title='CHOOSE YOUR PLAN'
                                headline='Adaptable Pricing'
                            />
                            <p className='text-dark col-12 col-lg-6 d-flex align-items-center'>
                                Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                            </p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
                            {article_list.map((item, idx) => (
                                <div className="col p-2 px-3 px-lg-4 d-flex"
                                    key={idx}
                                >
                                    <div className='pricing-item-anime h-100 d-flex'
                                    >
                                        <div className='pricing_plan_box type_one d-flex'>
                                            <div className="tags">{item.badge_label}</div>

                                            <div className="pricing_plan_box_inner">
                                                {/* <div className="text_box d-flex flex-column justify-content-between gap-2 h-100"> */}
                                                <div className="upper_content">
                                                    <div className="title">
                                                        <h2>{item.title}</h2>
                                                    </div>
                                                    <div className="price_rs">
                                                        <h6><small>{item.price}$</small> / <span>Year</span></h6>
                                                    </div>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="lower_content">
                                                    <ul>
                                                        {item.ul.map((list, idx) => (
                                                            <li key={idx}>
                                                                <span>
                                                                    <FaRegCircleCheck />
                                                                </span>
                                                                {list.list}
                                                            </li>
                                                        ))}

                                                        {/* <li>
                                                            <span>
                                                                <FaRegCircleCheck />
                                                            </span>
                                                            4-5 Weeks from to finish
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <FaRegCircleCheck />
                                                            </span>
                                                            Organisational Strategy
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <FaRegCircleCheck />
                                                            </span>
                                                            20 Days of support
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <FaRegCircleCheck />
                                                            </span>
                                                            Data sprint Results revision
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <FaRegCircleCheck />
                                                            </span>
                                                            Data sprint Results revision
                                                        </li> */}
                                                    </ul>
                                                </div>
                                                <div className="get_start_button theme_btn_all">
                                                    <a href="#" target="_blank" rel="nofollow" className="theme-btn one">Get Started
                                                        <span> <FaArrowRight /> </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}
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

export default ChoosePlans