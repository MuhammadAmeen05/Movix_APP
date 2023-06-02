//import React from 'react'
import { useState } from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../component/carousel/Carousel'
const Trending = () => {
    const [endpoint,setendPoint]=useState('day')
    const {data,loading}=useFetch(`/trending/movie/${endpoint}`)
    const onTabChange=(tab)=>{
      setendPoint(tab ==='Day' ?'day':'week');
    }
   // console.log(data)
    
  return <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={['Day','Weeks']} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading}/>
  </div>
}

export default Trending
