import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Pagination, Navigation, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

const ProjectCarousel = ({ projects }) => {
    return (
        <>
          <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            direction={'horizontal'}
            slidesPerView={'auto'}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            pagination={true}
            // navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
          >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            // className='swiperSlide'
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
