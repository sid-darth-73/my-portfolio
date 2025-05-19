import React from 'react'
import vue from '/Users/siddharthraj/Desktop/my-portfolio/public/vue.png'
import react from '/Users/siddharthraj/Desktop/my-portfolio/public/icon_react.png'
import leetcode from '/Users/siddharthraj/Desktop/my-portfolio/public/leetcode.png'
import tailwind from '/Users/siddharthraj/Desktop/my-portfolio/public/tailwindcss.png'


const skillData = [
    {id: 1, image:vue, title: 'Vue', description: 'lorem ipsum this is some randome etxt because lorem did not work'},
    {id: 2, image:leetcode, title: 'Problem Solving', description: 'lorem ipsum this is some randome etxt because lorem did not work'},
    {id: 3, image:react, title: 'React', description: 'lorem ipsum this is some randome etxt because lorem did not work'},
    {id: 4, image:tailwind, title: 'Frontend', description: 'lorem ipsum this is some randome etxt because lorem did not work'}
]


const skillBox=({image, title, description})=> {
    <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
        <figure className='flex justify-center mb-4'>
            <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20'/>
        </figure>
        <header>
            <h3 className='text-lg sm:text-xl font-semibold mb-2'> {title} </h3>
        </header>
        <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
    </article>
}

function Skills() {
  return (
    <div>Skills</div>
  )
}

export default Skills