import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const ProjectCarousel = ({ projects }) => {
    return (
        <>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            pagination={true}
            navication={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${project.screenshot})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '400px',
              height: '400px',
            }}
          />
        ))}
      </Swiper>
      </>
    );
  };
  
  export default ProjectCarousel;
