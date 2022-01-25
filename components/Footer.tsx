import React from 'react'
import { socialLinks } from '../constants/socialLinks'



const Footer = () => {
  return (
    <footer className='bg-gray-200 dark:bg-gray-700 py-3 px-6'>
      <div className='flex flex-row items-center justify-between'>
        <p>&copy; Kan Fu. All rights reserved.</p>
        <div className='flex flex-row space-x-3'>
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
      </div>
    </footer>
  )
}

export default Footer
