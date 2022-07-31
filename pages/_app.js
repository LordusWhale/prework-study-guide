
import '../styles/globals.css'
import {AuthProvider} from "../components/Auth.js";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
