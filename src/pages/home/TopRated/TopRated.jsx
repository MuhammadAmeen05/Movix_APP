import { useState } from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../component/carousel/Carousel'
const TopRated = () => {
    const [endpoint,setendPoint]=useState('movie')
    const {data,loading}=useFetch(`/${endpoint}/top_rated`)
    const onTabChange=(tab)=>{
      setendPoint(tab ==='Movies' ?'movie':'tv');
    }
   // console.log(data)
    
  return <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={['Movies','TV Shows']} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
  </div>
}

export default TopRated
