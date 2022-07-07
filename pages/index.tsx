import App from '../components'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/header'
export default function Main() {
  return (
    <>
      <Header></Header>
      <App></App>
    </>
  )
}