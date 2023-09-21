import Header from '@/components/Header'
import Svg from '@/components/Svg'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <>
      <Svg />
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}
