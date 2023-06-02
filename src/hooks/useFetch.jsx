//import React from 'react'
import {useEffect,useState } from 'react'
 import {fetchDataFromApi} from '../utils/api'
// import { useDispatch,useSelector } from 'react-redux'
// import { getApiConfiguration} from './store/homeSlice'
const useFetch = (url) => {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(null)
  const [error,setError]=useState(null)
  useEffect(()=>{
    setLoading("Loading....")
    setData(null)
    setError(null)
    fetchDataFromApi(url)
    .then((res)=>{
       setLoading(false)
        setData(res)
    })
    .catch((err)=>{
       setLoading(false)
       console.log(err)
       setError("Something Went Wrong")
    })
  },[url])
  return {data,loading,error}
}

export default useFetch
