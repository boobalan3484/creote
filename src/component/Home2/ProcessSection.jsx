import React from 'react'
import LinkButton from './Reusable/LinkButton'
import '@/style/Home2/ProcessSelection.css'

const ProcessSection = () => {

    const process_list = [
        {
            image: 'service-ico-n-1',
            title: 'Identifiying the Needs',
            link: '',
            parent_className: 'rounded-top-5 rounded-end-0',
            parent_style: { background: 'var(--primary-color-one)' },
            text_color: 'text-white',
            link_color:'theme-btn two color_white'
        },
        {
            image: 'process-icon-im-1',
            title: 'Preparing a Job Description',
            link: '',
            parent_style: { background: 'var(--primary-color-three)' },
            text_color: 'text-dark',
            link_color:'theme-btn two'
        },
        {
            image: 'service-ico-n-2',
            title: 'Find a Talented Candidate',
            link: '',
            parent_className: 'rounded-bottom-5 rounded-start-0',
            parent_style: { background: 'var(--primary-color-two)' },
            text_color: 'text-white',
            link_color:'theme-btn two'
        },
    ]
    return (
        <section className="process-section">
            <div className="container">
                <div className="row px-3">
                    {process_list.map((item, idx) => (
                        <div className={`col-lg-4 col-md-6 col-sm-12 p-5 border border-1 text-white ${item.parent_className}`} style={item.parent_style} key={idx}>
                            <div className='position-relative h-100 d-flex flex-column justify-content-between gap-3 '>
                                <div className='d-flex align-items-center gap-3'>
                                    <div className="icon" >
                                        <img src={`/home2/icons/${item.image}.png`} alt="" style={{
                                            fontSize: '47px',
                                            lineHeight: '47px',
                                            width: '47px',
                                            color: 'var(--primary-color-one)'
                                        }
                                        } />
                                    </div>
                                    <h2>
                                        <a href="" className={item.text_color} style={{
                                            display: 'block',
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            lineHeight: '28px'
                                        }}>
                                            {item.title}
                                        </a>
                                    </h2>
                                </div>
                                <p className={item.text_color}>
                                    Certain circumstances seds owing to the claims duty ourighteous indignation and so beguiled.
                                </p>

                                <LinkButton
                                    label='Read more'
                                    a_ClassName={item.link_color}
                                />
                            </div>
                        </div>
                    ))}

                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessSection