import BlockOne from '../components/BlockOne'
import BlockTwo from '../components/BlockTwo'
import BlockThree from '../components/BlockThree'
import '../styles/main.scss'

const Home = () => {
  return (
    <>
      <h1>Nagłówek H1</h1>
      <div className='block-grid'>
        <BlockOne />
        <BlockTwo />
        <BlockThree />
      </div>
    </>
  )
}

export default Home
