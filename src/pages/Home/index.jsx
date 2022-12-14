import React, { useEffect, useState } from 'react';
import { RowLoop } from '../../components/RowLoop';
import { category, getMovie, imgAndSearchUrl, trending } from '../../api';
import { SliderImg } from '../../components/Slider/SliderImg';
import { SwiperSlide } from 'swiper/react';


import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { Emphasis } from '../../components/Emphasis';
import { Navbar } from '../../components/NavBar';

export const Home = () => {
  const [treading, setTreaading] = useState([]);
  useEffect(() => {
    async function getTreding(path) {
      try {
        const response = await getMovie(path);
        setTreaading(response?.data.results)
      } catch(err){
        console.log("aldo deu errado: ", err)
      }
    }

    getTreding(trending[0].path);
  }, []);

  const settings = {
    spaceBetween: 40,
    slidesPerView: 4,
    navigation: true,
  }

  return (

    <main className={styles.container}>
      
      <section className={styles.container_emphasis_and_NavBar}>
        <Navbar />
        <Emphasis />
      </section>

      <section className={styles.treading_container}>
        <h1>{trending[0].title}</h1>
        <SliderImg settings={settings}>
          {treading.length > 0 && treading.map(treading => (
            <SwiperSlide key={treading.id}>
              <Link to={`/Details/${treading.id}`}>
                <img src={imgAndSearchUrl.ulrImg + treading?.poster_path} width="300px" alt={treading.name} />
              </Link>
            </SwiperSlide>
          ))}
        </SliderImg>


      {category.map((cate, index) => (
        <section key={index} className={styles.categorys_container}>
          <h1>{cate.title}</h1>
          <RowLoop cateInfo={cate} />
        </section>
      ))}
      </section>

    </main>
  )
}
