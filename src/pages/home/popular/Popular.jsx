import { useState } from 'react'
import ContentWrapper from '../../../component/contentWrapper/contentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../component/carousel/Carousel'
const Popular = () => {
    const [endpoint,setendPoint]=useState('movie')
    const {data,loading}=useFetch(`/${endpoint}/popular`)
    const onTabChange=(tab)=>{
      setendPoint(tab ==='Movies' ?'movie':'tv');
    }
   // console.log(data)
    
  return <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">{`What 's`} Popular </span>
        <SwitchTabs data={['Movies','TV Shows']} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
  </div>
}

export default Popular
