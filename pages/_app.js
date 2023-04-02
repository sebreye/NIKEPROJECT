import MainLayout from '@component/src/component/layout/MainLayout'
import '@component/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </>
    
    
  ) 
}
