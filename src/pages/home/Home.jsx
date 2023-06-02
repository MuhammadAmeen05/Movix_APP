//import React from 'react'
import HeroSection from '../../component/heroSection/HeroSection'
import TopRated from './TopRated/TopRated'
import Popular from './popular/Popular'
import './style.scss'
import Trending from './trending/Trending'
const Home = () => {
  return (
    <div className='homePage'>
      <HeroSection/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
