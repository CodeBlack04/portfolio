import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Projects</h1>

        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>

            <ProjectCard
            src="/shopmart1.png"
            title="ShopMart - E-commerce Website"
            description="A website for online shopping that features real-time chat, a payment option (Stripe), and advanced filtering options."
            githubLink='https://github.com/CodeBlack04/ShopMart'
            serverLink='http://165.232.179.107/'
            />

            <ProjectCard
            src="/bookmyhotel1.png"
            title="BookMyHotel - Hotel Management Website"
            description="A website for hotel administration that includes live booking updates, chat help, staff management, and a rating system."
            githubLink='https://github.com/CodeBlack04/BookMyHotel'
            />

            <ProjectCard
            src="/expensetracker1.png"
            title="ExpenseTracker App"
            description="A system for tracking expenses that provides analysis and keeps record of all transactions."
            githubLink='https://github.com/CodeBlack04/ExpenseTracker'
            serverLink='http://68.183.84.43/'
            />

        </div>
    </div>
  )
}

export default Projects