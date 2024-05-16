'use client'

import React from 'react'

import {motion} from 'framer-motion'
import { SlideInFromLeft, SlideInFromRight, SlideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import Bio from './Bio'

const HeroContent = () => {
  return (
        <motion.div 
        initial='hidden' 
        animate='visible' 
        className='flex flex-col flex-end lg:flex-row justify-center items-center px-20 mt-20 md:mt-5 lg:mt-40 w-full z-[20]'
        >
            
            <Bio />

            <motion.div
            variants={SlideInFromLeft(0.8)}
            className='w-full h-full flex justify-center items-center'
            >
                <Image 
                className='rounded-full scale-75 lg:scale-100 shadow-lg border border-[#2A0E61]'
                src='/profile-pic1.png'
                alt= 'work icons'
                height={500}
                width={500}
                />

            </motion.div>
        </motion.div>
        
        
  )
}

export default HeroContent