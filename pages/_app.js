import Head from 'next/head'
import { Fragment } from 'react'
import PlausibleProvider from 'next-plausible'

// lib
import 'nextra-theme-blog/style.css'

// styles
import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <PlausibleProvider domain="leonardogalante.com">
        <Component {...pageProps} />
      </PlausibleProvider>
    </Fragment>
  )
}
