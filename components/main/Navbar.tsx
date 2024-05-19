import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Socials } from '@/constants'

const Navbar = () => {
  return (

        <div className='fixed top-3 left-1/2 transform -translate-x-1/2 w-11/12 h-[65px] rounded-full shadow-lg shadow-[#2A0E61]/50 bg-black/20 custom-blur z-50 px-10'>
            <div className='w-full h-full grid grid-cols-8 m-auto px-[10px]'>
                <Link
                href='#about-me'
                className="h-auto w-auto col-span-2 flex flex-row items-center"
                >
                    <Image 
                    src='/logo.png'
                    alt='logo'
                    width={40}
                    height={40}
                    />

                </Link>

                <div className='w-full h-full col-span-4 hidden md:flex flex-row items-center justify-center'>
                    <div className='max-w-[600px] hidden md:flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className='cursor-pointer hover:scale-110 transition'>About me</a>
                        <a href="#skills" className='cursor-pointer hover:scale-110 transition'>Skills</a>
                        <a href="#projects" className='cursor-pointer hover:scale-110 transition'>Projects</a>
                    </div>
                </div>

                <div className='flex flex-col col-span-6 md:col-span-2 justify-center items-center'>
                    <div className='w-full h-max flex flex-row gap-5 justify-end items-center'>
                        {Socials.map((social) => (
                            <a key={social.name} target='_blank' href={social.href} className='transition hover:scale-110'>
                                <Image 
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                                className=''
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Navbar