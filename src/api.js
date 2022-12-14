import axios from "axios";

const API_KEY = "83e7f7d3481fe2350a3e5698d335544b";

export const imgAndSearchUrl =  {
   ulrImg: 'https://image.tmdb.org/t/p/original/', 
   urlSearch: 'https://api.themoviedb.org/3/search/movie/'
}

export const trending = [
   {
      name: 'trending',
      title: 'Em alta',
      path: `/trending/all/week?api_key=${API_KEY}&languege=pt-BR`,
   }
]

export const category = [
   {
      name: 'netflixOriginals',
      title: 'Originais da NetFlix',
      path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   },
   {
      name: 'topRated',
      title: 'Populares',
      path: `/movie/top_rated?api_key=${API_KEY}&languege=pt-BR`,
   },
   {
      name: 'Comedy',
      title: 'Comédia',
      path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
   },
/*    {
      name: 'romances',
      title: 'Romancess',
      path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`,
   }, */
   {
      name: 'documentary',
      title: 'Documentarios',
      path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
   },
]

export const getMovie = async (path) => {
   let baseURL = `https://api.themoviedb.org/3/${path}`
   let response;
   try {
      response = await axios.get(baseURL);
      return response ;
   } catch (err) {
      console.log("error getMovie: ", err)
   }
}


export default category;
