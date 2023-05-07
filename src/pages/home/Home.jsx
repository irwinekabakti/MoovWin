import { Fragment } from 'react'
import './Home.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <Fragment>
      <Header />
        <div className='homePage'>
          <HeroBanner />
        </div>
      <Footer />
    </Fragment>
  )
}

export default Home