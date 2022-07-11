import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/main.css'
import '../styles/responsive.css'
import Header from '../components/header'
import { useState, createContext, useCallback } from 'react'
export const ThemeContext = createContext(['', () => { }])


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('')
  const handleTheme = useCallback(() => {
    setTheme(theme === "" ? "dark" : "")
  }, [theme])
  return (
    <ThemeContext.Provider value={[theme, handleTheme]}>
      <div className={theme}>
        <Header></Header>
        <Component {...pageProps} />
      </div >
    </ThemeContext.Provider>
  )
}

export default MyApp

