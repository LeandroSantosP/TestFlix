import React, { useEffect, useState } from 'react'
import { getMovie, imgAndSearchUrl, trending } from '../../api'

import styles from './Emphasis.module.css'

export const Emphasis = () => {
   const [randomMovie, setRandomMovie] = useState({})

   const getRandomMovie = async (path) => {
      try {
         const reponse = await getMovie(path);
         const ramdolIndex = Math.floor(Math.random() * reponse?.data.results.length);
         setRandomMovie(reponse?.data.results[ramdolIndex]);
      } catch (err) {
         console.log('algo deu errado com pegar um filme aleatorio ' + err)
      }
   };

   useEffect(() => {
      const urlPath = trending.find(trending => trending.name === "trending");
      getRandomMovie(urlPath.path);
   }, []);


   return (
      <header style={{
         backgroundSize: "cover",
         backgroundImage: `url(${imgAndSearchUrl?.ulrImg}${randomMovie?.backdrop_path})`,
         roundPosition: "center-center"
         
      }}>
      </header>
   )
}
