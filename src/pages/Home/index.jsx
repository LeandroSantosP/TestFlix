import React, { useEffect, useState } from 'react';
import { RowLoop } from '../../components/RowLoop';
import { category, getMovie, imgAndSearchUrl, trending } from '../../api';
import { SliderImg } from '../../components/Slider/SliderImg';
import { SwiperSlide } from 'swiper/react';


import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [treading, setTreaading] = useState([]);
  useEffect(() => {
    async function getTreding(path) {
      const response = await getMovie(path);
      setTreaading(response.data.results)
    }
    getTreding(trending[0].path);
  }, []);

  const settings = {
    spaceBetween: 40,
    slidesPerView: 3,
    navigation: true,
  }

  return (

    <main className={styles.container}>


      <section className={styles.treading_container}>
        <h1>{trending[0].title}</h1>
        <SliderImg settings={settings}>
          {treading.map(treading => (
            <SwiperSlide key={treading.id}>
              <Link to={`/Details/${treading.id}`}>
              <img src={imgAndSearchUrl.ulrImg + treading.poster_path} alt={treading.name} />
              </Link>
              {console.log(treading)}
            </SwiperSlide>
          ))}
        </SliderImg>
      </section>


      {category.map((cate, index) => (
        <div key={index}>
          <div className={styles.treding}>
            { }
          </div>
          <h1>{cate.title}</h1>
          <RowLoop cateInfo={cate} />
        </div>
      ))}

    </main>
  )
}
