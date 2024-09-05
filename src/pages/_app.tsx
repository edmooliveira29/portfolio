import React from "react"
import "@/styles/globals.css"
import "./courses/alura-course-css-flexbox-and-responsive-layouts/css/reset.css"
import "./courses/alura-course-css-flexbox-and-responsive-layouts/css/estilos.css"
import "./courses/alura-course-css-flexbox-and-responsive-layouts/css/flexbox.css"

import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App