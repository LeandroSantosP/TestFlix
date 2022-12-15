import React, { useEffect, useState } from 'react'
import { getMovie, imgAndSearchUrl, trending } from '../../api'
import { Button } from '../CustomInput/Button';
import { CunstomInput } from '../CustomInput/input'

import styles from './Emphasis.module.css'

export const Emphasis = () => {
   const [randomMovie, setRandomMovie] = useState({});
   const [loading, setLoadind] = useState(false);

   const getRandomMovie = async (path) => {
      try {
         setLoadind(true)
         const reponse = await getMovie(path);
         const ramdolIndex = Math.floor(Math.random() * reponse?.data.results.length);
         setRandomMovie(reponse.data?.results[ramdolIndex]);
      } catch (err) {
         console.log('algo deu errado com pegar um filme aleatorio ' + err)
      } finally {
         setLoadind(false);
      }
   };

   useEffect(() => {
      const urlPath = trending.find(trending => trending.name === "trending");
      getRandomMovie(urlPath.path);
   }, []);

   function truction(str, n) {
      return str?.length > 0 ? str.subtr(0, n - 1) + "..." : str;
   }

   
   if(loading === true) return <p>Loading...</p>
   return (
      <header style={{
         backgroundSize: "cover",
         backgroundImage: `url(${imgAndSearchUrl?.ulrImg}${randomMovie?.backdrop_path})`,
         roundPosition: "center-center",
      }}>
         <div className={styles.featured_vertical}>
            <div className={styles.featured_horizontal}>

            </div>
         </div>
         <CunstomInput label="dsadbisabkjsab" placeholder="Pesquise Por um Filme..." />
         <div className={styles.container_infos}>
            <h1>{randomMovie?.title || randomMovie?.name}</h1>
               <p>
                  {randomMovie?.overview}
               </p>
            <div className={styles.button_container}>
               <Button text="Play" />
               <Button text="My List" />
            </div>
         </div>
      </header>
   )
}
