import React from 'react'
import project1 from '/cubey1.png'
import project2 from '/cmpf2.png'

const projects = [
  {
    id: 1,
    image: project1,
    title: 'Cubey',
    description: 'A full-stack applicaton that is useful for speedcubers who wish to store their memorable solves and train some algorithms',
    link: 'https://github.com/sid-darth-73/cubey',
    demoLink: 'https://cubey-nine.vercel.app/'
  },
  {
    id: 2,
    image: project2,
    title: 'Compareforces',
    description: 'A comparison tool useful for competetive programmers who wish to compare their codeforces profiles to their peers and get some AI based insights on improvement tips',
    link: 'https://github.com/sid-darth-73/compareforces',
    demoLink: 'https://compare-forces.vercel.app/'
  },
]

const ProjectCard = ({ image, title, description, link, demoLink }) => (
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg hover:bg-purple-800 transition-all duration-300'>
    <figure className='mb-4'>
      <img src={image} alt={title} className='w-full h-58 object-cover rounded-md' />
    </figure>
    <header className='mb-2'>
      <h3 className='text-lg sm:text-xl font-semibold'>{title}</h3>
    </header>
    <p className='text-gray-400 text-sm sm:text-base mb-4'>{description}</p>
    
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-white border-2 py-1 px-4 mx-1 rounded-full hover:bg-white hover:text-purple-900 transition"
    >
      Github
    </a>
    <a
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-white border-2 py-1 px-4 mx-1 rounded-full hover:bg-white hover:text-purple-900 transition"
    >
      Demo
    </a>

  </article>
)

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 left-1/2 transform -translate-x-1/2"></div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            A few of the applications and tools I've built recently.
          </p>
        </header>

        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-3 justify-center"
        >
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      </div>
    </section>
  )
}
