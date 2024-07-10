import Footer from '../components/Footer'
import AlertStack from '../components/AlertStack'
import BlockOne from '../components/BlockOne'
import BlockTwo from '../components/BlockTwo'
import BlockThree from '../components/BlockThree'
import '../styles/main.scss'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='layout'>
        <Header />
        <main>
          <h1>Nagłówek H1</h1>
          <div className='block-grid'>
            <BlockOne />
            <BlockTwo />
            <BlockThree />
          </div>
        </main>
        <Footer />
        <AlertStack />
    </div>
  )
}

export default Home
