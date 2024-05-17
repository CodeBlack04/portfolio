import Image from 'next/image';
import React from 'react'
import { FaServer, FaGithub } from 'react-icons/fa';

interface Props {
    src: string;
    title: string;
    description: string;
    serverLink?: string;
    githubLink?: string;
}

const ProjectCard = ({src, title, description, serverLink, githubLink}: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
        />

        <div className='absolute p-3 top-5 right-5 flex flex-row gap-5 rounded-xl text-white bg-black/20 custom-blur'>
          <a target='_blank' href={serverLink} className={`scale-125 transition ${serverLink ? 'hover:scale-150' : 'pointer-events-none text-gray-400'}`}><FaServer /></a>
          <a target='_blank' href={githubLink} className={`scale-125 transition ${githubLink ? 'hover:scale-150' : 'pointer-events-none text-gray-400'}`}><FaGithub /></a>
        </div>

        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-200'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard