import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div id='about-me' className='relative flex flex-col h-full w-full'>
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-0 z-[-30] w-full h-full object-cover'
        src="/blackhole.webm">

        </video>
        <HeroContent />
    </div>
  )
}

export default Hero