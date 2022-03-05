/* eslint-disable @next/next/no-img-element */
import React from 'react'
import projects from '../constants/projects'

const Projects = () => {
  return (
    <section id='projects'>
      <div className='h-12 md:h-16'></div>
      <h1 className='text-5xl w-full text-center p-4'>Projects</h1>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  )
}

interface Icon {
  name: string
  component: React.ReactNode
  link: string
}

interface ProjectProps {
  name: string
  link: any
  description: string
  keywords: string[]
  icons: Icon[]
}

const Project = ({ project }: { project: ProjectProps }) => {
  const { name, link, description, keywords, icons } = project

  return (
    <article className='max-w-screen-lg w-4/5 lg:w-full rounded overflow-hidden mx-auto flex flex-col lg:flex-row m-8  shadow-lg justify-center items-stretch'>
      {/* Card Image */}
      <div className='w-full lg:w-2/3 text-[0px]'>
        <a
          href={icons.find((icon) => icon.name === 'Github')?.link}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={link}
            alt={name}
            width={960}
            height={468}
            className='mx-auto transform hover:scale-110 opacity-80 hover:opacity-100 transition duration-1000 ease-out object-cover'
          />
        </a>
      </div>
      {/* Card Content */}
      <div className='bg-gray-200 dark:bg-gray-700 w-full max-w-[960px] lg:w-1/3 p-6 flex flex-col justify-between gap-2 lg:gap-4 z-10'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p>{description}</p>
        {/* Tech stack */}
        <div className='flex flex-row gap-2 flex-wrap'>
          {keywords.map((item) => (
            <span
              key={item}
              className='px-4 py-1 rounded-full border border-gray-600 dark:border-gray-300 cursor-default font-semibold text-xs flex align-center w-max'
            >
              {item}
            </span>
          ))}
        </div>
        {/* Icons with External Links */}
        <div className='text-2xl flex gap-4 mt-2'>
          {icons.map((icon) => (
            <a
              key={icon.name}
              href={icon.link}
              target='_blank'
              rel='noreferrer'
              className='hover:-translate-y-1 transition-transform'
            >
              {icon.component}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Projects
