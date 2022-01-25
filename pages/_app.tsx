import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import SEO from '../components/SEO'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <SEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
