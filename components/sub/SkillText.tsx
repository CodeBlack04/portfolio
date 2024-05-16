"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { SlideInFromLeft, SlideInFromRight, SlideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <motion.div 
    initial='hidden'
    animate='visible'
    className='w-full h-auto flex flex-col gap-5 items-center justify-center'
    >

        <motion.div
          variants={SlideInFromTop(1)}
          className="Welcome-box py-[8px] px-5 border border-[#7042f88b] opacity-[0.9]"
        >

          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          
          <h1 className="Welcome-text text-[20px]">Let's shape your next idea with cutting-edge tools!</h1>
        
        </motion.div>

        <motion.p
        variants={SlideInFromLeft(1)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Making apps with modern technologies
        
        </motion.p>
        
        <motion.p
        variants={SlideInFromRight(1)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >

            Never miss a task, deadline or idea
        
        </motion.p>

    </motion.div>
  )
}

export default SkillText