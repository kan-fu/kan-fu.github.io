/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { socialLinks } from '../constants/socialLinks'

const Hero = () => {
  return (
    <section id='hero' className='h-screen flex justify-center items-center'>
      <div className='flex flex-col md:flex-row justify-between items-center space-y-2 p-4'>
        <article className='w-full md:w-2/3 text-center md:text-left space-y-3 md:tracking-widest'>
          <h1 className='text-5xl font-black '>Hi, I&apos;m Kan</h1>
          <h2 className='text-2xl md:text-3xl font-bold'>Full Stack Web Developer</h2>
          <h3 className='text-xl'>based in Victoria, Canada</h3>
          <div className='flex flex-row space-x-2 justify-center md:justify-start'>
            {socialLinks.map((socialLink, index) => (
              <a
                href={socialLink.url}
                key={index}
                className='text-2xl hover:-translate-y-1 transition-transform	'
              >
                {socialLink.icon}
              </a>
            ))}
          </div>
        </article>
        <div className='w-2/3 md:w-1/3 mx-auto p-4'>
          <img
            src='/avatar.jpg'
            alt='avatar'
            className='rounded-full'
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
