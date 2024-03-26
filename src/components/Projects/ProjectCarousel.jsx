import ProjectModal from "./ProjectModal";
import React, { useState } from "react";
import { FaEllipsis } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './style.css';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import { EffectCoverflow, FreeMode, Mousewheel } from 'swiper/modules';

const ProjectCarousel = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => {
    setSelectedProject(project);
  }
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
        <SwiperSlide key={index} style={{width:'400px', height:'400px'}}>
          <div className="slide-content-wrapper">
            <LazyLoadImage
              src={project.screenshot}
              alt={project.title}
              effect="opacity"
            />
            <button className="open-modal-btn" onClick={() => openModal(project)}>
              <FaEllipsis />
            </button>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      {selectedProject && <ProjectModal project={selectedProject} closeModal={() => setSelectedProject(null)} />}
    </>
  );
};
  
export default ProjectCarousel;
