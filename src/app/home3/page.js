import DynamicHeaderComponent from '@/component/DynamicHeader'
import Footer from '@/component/Home3/Footer'
import LayoutHome3 from '@/layout/LayoutHome3'
import React from 'react'

export default function Home() {
    return (
        <>
            <DynamicHeaderComponent />
            <LayoutHome3 />
            <Footer />
        </>
    )
}
