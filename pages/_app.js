
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/NavbarComp'
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
import Head from 'next/head'
import Sidenav from '../components/Sidenav'
import '../styles/globals.css'

const noAuthRequired = [ '/login', '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AuthContextProvider>
      <Head><link rel="manifest" href="/manifest.json"/></Head>
      {/* <Navbar /> */}
      <Sidenav />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp