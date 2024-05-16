'use client'

import React, { useState } from 'react'
import useContactModal from '@/hooks/useContactModal'
import {motion} from 'framer-motion'
import { SlideInFromLeft, SlideInFromRight, SlideInFromTop } from '@/utils/motion'
import CustomButton from '../forms/CustomButton'
import { FaDownload } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";

const Bio = () => {
    const contactModal = useContactModal()
    const [showFullBio, setShowFullBio] = useState(false)

    const toggleBio = () => {
        setShowFullBio(!showFullBio)
    }



  return (
    <div className='h-full w-full flex flex-col order-2 gap-5 justify-center m-auto text-start'>

                <motion.div
                variants={SlideInFromRight(0.5)}
                className='flex flex-col gap-6 mt-6 whitespace-nowrap text-3xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>Md. Tauhidur Rahman</span>
                    <span className='text-transparent bg-clip-text text-2xl md:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500'> Fullstack Developer </span>
                </motion.div>

                <motion.p
                variants={SlideInFromRight(0.8)}
                className={`text-md md:text-lg text-gray-400 mt-5 max-w-[600px] transition ${showFullBio ? 'h-auto' : 'h-36 overflow-hidden'}`}
                >
                    <>
                        I'm a passionate and results-oriented full-stack developer with a strong foundation in Python and frameworks like Django, Node.js and Next.js. I have experience in crafting robust REST APIs, secure authentication systems, real-time applications (WebSocket) that enhance user experience and more.
                        <br />
                        <br />
                        When I'm not coding, you'll find me tinkering with computers, gadgets and operating systems – my love for machines extends beyond software! As a lifelong learner, I'm fascinated by the mysteries of interstellar objects and the ever-evolving world of cars (The reason I finished my bachelor's degree in Mechanical Engineering!). Recently, I've been learning a lot about the complicated past of political violence.
                    </>
                    
                </motion.p>

                <motion.div
                variants={SlideInFromRight(0.8)}
                className="text-blue-500 text-start"
                >
                    <button onClick={toggleBio}>{showFullBio ? 'Read Less' : 'Read More'}</button>
                </motion.div>
                
                <motion.div
                variants={SlideInFromRight(1)}
                className='flex flex-row flex-start gap-5'
                >
                    <CustomButton 
                    label='Contact'
                    icon={<RiContactsBook3Fill />}
                    onClick={() => {
                        console.log('clicked!')

                        contactModal.open()
                    }}
                    className='button-primary'
                    />

                    <CustomButton 
                    label='CV'
                    icon={<FaDownload />}
                    onClick={() => {
                        console.log('clicked!')
                        
                        const link = document.createElement("a");
                        link.href = "/tauhidur_rahman_CV.pdf";
                        // link.target = "_blank";
                        link.click()
                    }}
                    className='button-primary'
                    />


                </motion.div>

            </div>
  )
}

export default Bio