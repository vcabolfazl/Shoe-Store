import Header from '@/components/Header'
import Svg from '@/components/Svg'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Svg />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
