import React from 'react'
import { Link } from 'react-router-dom';
import { getMovie, imgAndSearchUrl } from '../../api'
import { SwiperSlide } from 'swiper/react';
import { SliderImg } from '../Slider/SliderImg';
import styles from './RowLoop.module.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const RowLoop = ({ cateInfo }) => {
   const [data, setData] = React.useState([]);

   const settings = {
      spaceBetween: 40,
      slidesPerView: data.length <= 5 ? data.length : 5,
      navigation: true,
   };

   React.useEffect(() => {
      const getMovieCategory = async (path) => {
         const response = await getMovie(path);
         setData(response.data.results);
      }

      getMovieCategory(cateInfo.path);
   }, [cateInfo]);

   return (
      <section className={styles.container}>
         <SliderImg settings={settings}>
            {data.length > 0 && data.map((cate, index) => (
               <SwiperSlide key={index} className={styles.swiper}>
                  <Link to={`/Details/${cate.id}`}>
                     <img src={cate?.backdrop_path !== null ? imgAndSearchUrl.ulrImg + cate?.backdrop_path : ''} alt={cate.title} className={styles.movie} />
                  </Link>
               </SwiperSlide>
            ))}
         </SliderImg>
      </section>

   )
}
