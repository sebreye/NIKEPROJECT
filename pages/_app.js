import MainLayout from '@component/src/component/layout/MainLayout'
import '@component/styles/globals.css'
import { Store } from '@component/redux/store'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }) {
  return(
    <>
    <Provider store={Store}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </Provider>

    </>
    
    
  ) 
}
