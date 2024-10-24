import React from 'react'
import '@/style/LatestBlog.css'
import ArticleCard from './LatestBlogs/ArticleCard'
import TitleSection from './Reusable/TitleSection'

const LatestBlogs = () => {

    const article_list = [
        {
            img: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/social-media-influencer-giveaway-1536x1024.jpg',
            badge_label: 'tips',
            title: 'Influencer engagement: everything you need to know ',
            description: 'Arcu quisque hac ex accumsan placerat euismod. Lacus porta mauris potenti justo cras natoque efficitur pharetra est. Vulputate nam volutpat taciti est ac. Justo viverra',
            date: 'March 31, 2024',
            comments: 'No comments'
        },
        {
            img: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/03/shopaholic-man-for-black-friday-sale-campaign-1536x1024.jpg',
            badge_label: 'campaign',
            title: ' 7 types of influencer marketing campaigns you should try',
            description: 'Arcu quisque hac ex accumsan placerat euismod. Lacus porta mauris potenti justo cras natoque efficitur pharetra est. Vulputate nam volutpat taciti est ac. Justo viverra',
            date: 'March 31, 2024',
            comments: 'No comments'
        },
        {
            img: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/03/digital-marketing-strategy-1536x1024.jpg',
            badge_label: 'marketing',
            title: 'Establishing a content marketing strategy in a niche market',
            description: 'Arcu quisque hac ex accumsan placerat euismod. Lacus porta mauris potenti justo cras natoque efficitur pharetra est. Vulputate nam volutpat taciti est ac. Justo viverra',
            date: 'March 31, 2024',
            comments: 'No comments'
        },
        // {
        //     img: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/03/food-delivery-service-review-modern-meal-for-home-or-office-great-offer-and-ad-1536x985.jpg',
        //     badge_label: 'advertising',
        //     title: 'How do consumers actually perceive sponsored ads?',
        //     description: 'Arcu quisque hac ex accumsan placerat euismod. Lacus porta mauris potenti justo cras natoque efficitur pharetra est. Vulputate nam volutpat taciti est ac. Justo viverra',
        //     date: 'March 31, 2024',
        //     comments: 'No comments'
        // },
    ]

    return (
        <section className='blog-bg'>
            <div className='blog-overlay'></div>
            <div className='container position-relative'>
                <div className="row gap-4">
                    <div className="col-lg-8 m-auto text-center">
                        <div className='d-flex text-white align-items-center justify-content-center text-center'>
                            {/* <Heading head='Latest Blogs & Articles' className='fw-bold fs-1' dataAos='fade-left' dataAosDelay='100'/>
                            <LinkButton label='View More' dataAos='zoom-in' dataAosDelay='400'/> */}
                            <TitleSection
                                title='NEWS & UPDATES'
                                headline='Featured News and Updates'
                                description="We work with your company to identify position requirements, implement recruitment programs, and initiate employee assessments that maximize recruitment efforts"
                                desc_color='text-dark'
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                            {article_list.map((item, idx) => (
                                <div className="col d-flex" key={idx} data-aos='fade-up' data-aos-delay={idx * 200}>
                                    <ArticleCard
                                        img={item.img}
                                        title={item.title}
                                        description={item.description}
                                        date={item.date}
                                        comments={item.comments}
                                        badge={item.badge_label}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestBlogs