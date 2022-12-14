import { Swiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import './Slider.css'

export function SliderImg({ settings, children }) {
      return <Swiper {...settings} modules={[Navigation, Pagination, A11y]}>
                  {children}
            </Swiper>
}