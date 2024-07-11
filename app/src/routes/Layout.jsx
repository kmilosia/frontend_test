import Footer from '../components/Footer'
import AlertStack from '../components/AlertStack'
import '../styles/main.scss'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <AlertStack />
    </div>
  )
}

export default Layout
