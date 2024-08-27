import React from "react"
import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="en">
      <Head >
        <title>Portfólio - Edmo</title>
        <link rel="icon"
          href="/favicon.ico" />
        <script async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z7CWHFHRLE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Z7CWHFHRLE');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
