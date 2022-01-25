/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { FaSun, FaMoon, FaAlignJustify, FaWindowClose } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { Link } from 'react-scroll'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const menus = ['About', 'Experience', 'Projects', 'Contact']

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <nav className='bg-gray-200 dark:bg-gray-700 fixed w-full z-20 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-12 md:h-16'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex-shrink-0 flex-grow flex'>
              <Link
                      to='hero'
                      smooth={true}
                      duration={500}
                      className='cursor-pointer hover:opacity-70'>
              <img
                className='h-8 w-8'
                width={32}
                height={32}
                src='/favicon.ico'
                alt='logo'
              /></Link>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {/* Desktop mode has no experience menu item */}
                {menus
                  .filter((menu) => menu !== 'Experience')
                  .map((menu, index) => (
                    <Link
                      to={menu.toLowerCase()}
                      key={index}
                      smooth={true}
                      duration={500}
                      className='cursor-pointer hover:bg-gray-100 text-black dark:text-white dark:hover:bg-gray-600 px-3 py-2 rounded-md text-lg font-medium'
                    >
                      {menu}
                    </Link>
                  ))}
              </div>
            </div>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='text-amber-500 px-4 hover:text-amber-400'
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='p-2 rounded-md text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600  focus:outline-none'
            >
              {!isOpen ? <FaAlignJustify /> : <FaWindowClose />}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter='transition ease-out duration-200 transform'
        enterFrom='opacity-0 scale-85'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-175 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-85'
      >
        <div
          className='md:hidden bg-gray-100 dark:bg-gray-800 shadow-sm absolute border-2 border-gray-200 dark:border-gray-700 w-full'
          id='mobile-menu'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {menus.map((menu, index) => (
              <Link
                to={menu.toLowerCase()}
                key={index}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className='cursor-pointer block hover:bg-gray-100 text-black dark:text-white dark:hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium'
              >
                {menu}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  )
}
