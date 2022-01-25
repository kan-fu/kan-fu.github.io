import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='bg-gray-100 dark:bg-gray-800'>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
