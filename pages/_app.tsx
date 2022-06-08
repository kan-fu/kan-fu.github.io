import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import SEO from '../components/SEO'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-YZP7KDFHMP`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YZP7KDFHMP');
        `}
      </Script>
      <SEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
