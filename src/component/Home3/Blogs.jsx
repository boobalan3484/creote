import React from 'react'
import '@/style/Home3/Blogs.css'
import TitleSection from '../Home2/Reusable/TitleSection'

const Blogs = () => {

    const blog_list = [
        {
            image:'blog-image-11',
            category:'Coaching',
            title:'Workplace problems in your business?'
        },
        {
            image:'blog-image-3',
            category:'Employee Relations',
            title:'Workforce Challenges & Opportunities'
        },
        {
            image:'blog-image-9',
            category:'Coaching',
            title:'Why Should Business Payroll Outsourcing?'
        },
    ]
    return (
        <section className=" py-5">
            <div className='container'>
                <div className='col-lg-10 text-center m-auto'>
                    <TitleSection
                        className='d-flex flex-column justify-content-center align-items-center'
                        title='Find Out Our'
                        headline='Insights & Intelligence'
                    />
                </div>
                <div className="col-lg-10 m-auto home3-blog">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 content-parent">
                        {blog_list.map((item,idx) => (
                            <div className="col" key={idx}>
                            <div className="news_box style_nine">
                                <div className="content_box">
                                    <div className="date">
                                        <span className="date_in_number">08</span>
                                        <span className="date_in_month">Oct</span>
                                    </div>
                                    <div className="content_bx_in">
                                        <div className="category">
                                            <a href="#" className="categories"><i className="icon-folder"></i>{item.category}</a>
                                        </div>
                                        <h2 className="title"><a href="" rel="bookmark">
                                            {item.title}
                                            </a></h2>
                                    </div>
                                </div>
                                <div className="image_box ">
                                    <img width="750" height="420" src={`/home3/images/blogs/${item.image}.jpg`} className="img-fluid" alt="img" loading="lazy" />
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs