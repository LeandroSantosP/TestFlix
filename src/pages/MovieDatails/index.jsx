import axios from 'axios';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../api';
import { Navbar } from '../../components/NavBar'

import styles from './MovieDatails.module.css'
import { CunstomInput } from '../../components/CustomInput/input';

export const MovieDatails = () => {
   const [datails, setDetails] = useState([]);
   const [loading, setLoading] = useState(false);
   const [urlTrailer, setUrlTrailer] = useState('');

   const { id } = useParams();
   
   const getDetails = async (path) => {
      try {
         setLoading(true);
         const response = await axios.get(path);
         setDetails(response?.data);
      } catch (err) {
         console.log("algo deu errado: " + err);
      } finally {
         setLoading(false);
      }
   }

   const getMovieTrailer = async (id) => {
      try {
         setLoading(true);
         const response = await movieTrailer( null, { tmdbId: id });
         if(response != null && response != undefined) setUrlTrailer(response);
         return;
      } catch (err) {
         console.log("algo deu errado: " + err);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      const url = `
      https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}
      `
      getMovieTrailer(id);
      getDetails(url);
   }, [id]);

   if(loading) return <p>Loading..</p>
   return (
      <section className={styles.container}>
         <Navbar showBackButton={true}
         />
         <div className={styles.trailer_container}>
            <div className={styles.trailer}>
               <ReactPlayer width="940px" height="460px" controls={true} className={styles.video} url={urlTrailer != null || undefined ? urlTrailer : ''} 
            />
            </div>
            <div className={styles.movie_infos_container}>
               <h1>{datails.title}</h1>
               <div className={styles.infos}>
               <p>
                  {datails.overview}
               </p>
               </div>
            </div>
         </div>
      </section>
   )
}
