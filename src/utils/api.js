import axios from 'axios'
const BASE_URL="https://api.themoviedb.org/3"
const TMDB_token = import.meta.env.VITE_MOVIX_APP_API_TOKEN;
const headers={
    Authorization:"bearer " + TMDB_token,
};
//console.log(headers)
 export const  fetchDataFromApi= async (url,params)=>{
  try {
    const {data} = await axios.get(BASE_URL+ url,{
        headers,
        params
    })
    return data
  } catch (error) {
    console.log(error)
    return error
  }
 } 
