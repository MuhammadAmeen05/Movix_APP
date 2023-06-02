//import React from 'react'
import { useEffect } from 'react'
import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchDataFromApi } from '../../utils/api'
import ContentWrapper from '../../component/contentWrapper/ContentWrapper'
import noResult from '../../assets/no-results.png'
import './style.scss'
import Img from '../../component/lazyLoadImg/Img'
import Spinner from '../../component/spinner/Spinner'
import MovieCard from '../../component/MovieCard/MovieCard'
const SearchResult = () => {
  const [data,setData]=useState(null)
  const [pageNum,setPageNum]=useState(1)
  const [loading,setLoading]=useState(false)
  const {query}=useParams()
  //console.log(query);
  const fetchInitialData=()=>{
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
    .then((res)=>{
     setData(res)
    // console.log(res)
    console.log(data)
     setPageNum((prev)=>prev+1)
     setLoading(false)
    })
  }
  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
        (res) => {
            if (data?.results) {
                setData({
                    ...data,
                    results: [...data?.results, ...res?.results],
                });
            } else {
                setData(res);
            }
            setPageNum((prev) => prev + 1);
        }
    );
};
  useEffect(()=>{
    setPageNum(1)
    fetchInitialData()
    //fetchNextPageData()
  },[query])
  return <div className='searchResultsPage'>
      {loading && <Spinner initial={true}/>}
      {!loading && <ContentWrapper>
        {data?.results?.length > 0 ? (
           <>
           <div className="pageTitle">
            {`Search ${data?.total_results>1?"results":"result"} Of ${query}`}
           </div>
           <InfiniteScroll 
           className='content'
           dataLength={data?.results?.length}
           next={fetchNextPageData}
           hasMore={pageNum <= data?.total_pages}
           loader={<Spinner/>}
           >
             {data?.results.map((item,index)=>{
              if(item.media_type === "person") return;
              return (
                <MovieCard key={index} data={item} fromSearch={true}/>
              )
             })}
           </InfiniteScroll>
           </>
        ):(
           <span className="resultNotFound">
            Sorry,Result Not Found!
                <Img src={noResult}/>
           </span>
        )}
        </ContentWrapper>}
    </div>
}

export default SearchResult
