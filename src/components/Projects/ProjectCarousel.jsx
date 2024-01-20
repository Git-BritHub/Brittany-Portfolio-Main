import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import { EffectCoverflow, FreeMode, Mousewheel } from 'swiper/modules';

const ProjectCarousel = ({ projects }) => {
    return (
        <>
          <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            direction={'horizontal'}
            slidesPerView={'auto'}
            freeMode={{
                enabled: true,
                momentum: true,
                momentumBounceRatio: 3,
                momentumRatio: 1, 
                momentumVelocityRatio: 1,
                sticky: true
            }}
            mousewheel={{
                forceToAxis: true
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            initialSlide={1}
            loop={true}
            modules={[EffectCoverflow, FreeMode, Mousewheel]}
            className="mySwiper"
          >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className='swiperSlide'
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
