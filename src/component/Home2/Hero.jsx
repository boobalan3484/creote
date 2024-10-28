import React from 'react'
import WelcomeSlider from './Hero/WelcomeSlider'
// import BottomContainer from './Reusable/BottomContainer'

const Hero = () => {
  return (
    <section className='position-relative overflow-hidden'>
      <WelcomeSlider />
      {/* <BottomContainer position='curve_shape_bottom_1'/> */}
    </section>
  )
}

export default Hero