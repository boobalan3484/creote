import React from 'react'
import '@/style/Client.css'
import AutoScrollCarousel from './Client/Carousel'

const Client = () => {
    return (
        <section className='client-section py-4'>
            <div className="container">
                <div className="row">
                    <AutoScrollCarousel />
                </div>
            </div>
        </section>
    )
}

export default Client