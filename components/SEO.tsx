import React from 'react'
import Head from 'next/head'

const SEO = () => {
  const meta = {
    name: 'Kan Fu',
    title: 'Kan Fu - Portfolio',
    description: 'This is my personal website. Connect with me to know more.',
    image: '/avatar.jpg',
    type: 'website',
    link: 'https://kan-fu.github.io',
  }
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={meta.description} />
      <meta property='og:url' content={meta.link} />
      <link rel='canonical' href={meta.link} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.name} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
    </Head>
  )
}

export default SEO
