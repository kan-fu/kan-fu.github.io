import React from 'react'
import experiences from '../constants/experiences'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section id='about' className='min-h-screen'>
      <div className='h-12 md:h-16'></div>
      <h1 className='text-5xl w-full text-center p-4'>About</h1>
      <div className='flex m-4 flex-col md:flex-row justify-center items-start'>
        <article
          id='description'
          className='w-full md:w-1/2 mx-auto space-y-6 min-h-screen'
        >
          <p className='text-xl px-4 md:px-8 leading-loose'>
            Before I decided to make the career transition into web development,
            I was a certified environmental engineer with some co-authored
            publications, a math lover who got the first prize in national high
            school mathematics league in China, and a coder who likes to write
            python scripts to solve everyday problems.
          </p>
          <p className='text-xl px-4 md:px-8 leading-loose'>
            Now I am a self-taught full stack developer.
            I am passionate about learning new things and improving my skills.
          </p>
          <p className='text-xl px-4 md:px-8 leading-loose'>
            Discover my{' '}
            <Link to='projects' smooth duration={500}>
              <button
                type='button'
                className='italic text-blue-600 dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-500'
              >
                projects
              </button>
            </Link>{' '}
            and{' '}
            <Link to='contact' smooth duration={500}>
              <button
                type='button'
                className='italic text-blue-600 dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-500'
              >
                contact
              </button>
            </Link>{' '}
            me if you want to know more.
          </p>
        </article>
        <article
          id='experience'
          className='w-full md:w-1/2 flex flex-col justify-start items-center md:border-l-2  min-h-screen md:min-h-min'
        >
          <div className='h-12 md:h-16 md:hidden'></div>
          <h1 className='text-5xl text-center p-8 md:hidden'>Experience</h1>
          {/* <div className='flex flex-1 flex-col items-center justify-center'> */}
          {experiences.map((experience, index) => (
            <div key={index}>
              <div className='py-2 px-4 mx-2 max-w-md rounded overflow-hidden cursor-default shadow-md hover:shadow-lg bg-gray-200 dark:bg-gray-700'>
                <h2 className='font-bold text-xl'>{experience.title}</h2>
                <p>{experience.year}</p>
                <p>{experience.company}</p>
                <p className='text-gray-700 dark:text-gray-200 text-sm'>
                  {experience.desc}
                </p>
              </div>

              {index !== experiences.length - 1 && (
                <div className='divider-container flex flex-col items-center -mt-2'>
                  <div className='w-4 h-4 bg-green-500 rounded-full relative z-10'>
                    <div className='w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping'></div>
                  </div>
                  <div className='w-1 h-10 md:h-18  bg-gray-200 dark:bg-gray-500 rounded-full -mt-2'></div>
                </div>
              )}
            </div>
          ))}
          {/* </div> */}
        </article>
      </div>
    </section>
  )
}

export default About
