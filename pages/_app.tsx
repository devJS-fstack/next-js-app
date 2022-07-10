import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/main.css'
import Header from '../components/header'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
