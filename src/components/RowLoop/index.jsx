import React from 'react'
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { getMovie, imgAndSearchUrl } from '../../api'
import { SliderImg } from '../Slider/SliderImg';
import styles from './RowLoop.module.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const RowLoop = ({ cateInfo }) => {
   const [data, setData] = React.useState([]);

   const settings = {
      spaceBetween: 0,
      slidesPerView: 4,
      navigation: true,
   }

   React.useEffect(() => {
      const getMovieCategory = async (path) => {
         const response = await getMovie(path);
         setData(response.data.results);
      }
      getMovieCategory(cateInfo.path);
   }, []);


   return (
         <SliderImg settings={settings} className={styles.slide_container}>
            {data && data.map((cate, index) => (
               <SwiperSlide key={index} className={styles.swiper}>
                     <img src={imgAndSearchUrl.ulrImg + cate.backdrop_path} alt="" className={styles.movie} />
               </SwiperSlide>
            ))}
         </SliderImg>

   )
}
