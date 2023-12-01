// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import { EffectCoverflow } from "swiper";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import './style.css'
import Project from '../../components/Projects/Project';

const projects = [
    {
        // TODO: Add four more Project titles and all Screenshots and URLs for project websites
        title: 'masterBuilder',
        screenshot: '',
        url: 'https://master-builder-production-40c9.up.railway.app/',
    },
    {
        title: 'Concert Groupie',
        screenshot: '',
        url: 'https://shindekokoro.github.io/concert-groupie/',
    },
    {
        title: 'Novel Pursuit',
        screenshot: '',
        url: 'https://novel-pursuit-production.up.railway.app/',
    },
    {
        title: 'Scribe Master 3000',
        screenshot: '',
        url: 'https://scribe-master-3000-production.up.railway.app/',
    },
    {
        title: 'Micromanager Deluxe',
        screenshot: '',
        url: 'https://github.com/Git-BritHub/Micromanager-Deluxe.git',
    },
    {
        title: 'Destination Weather Dashboard',
        screenshot: '',
        url: 'https://git-brithub.github.io/Destination-Weather-Dashboard/',
    },
];

function Portfolio () {
    return (
        <div>
        <h1>Projects</h1>
        {projects.map((project, index) => (
            <Project key={index} {...project} />
        ))}
    </div>
        // <Swiper
        //     grabCursor
        //     centeredSlides
        //     slidesPerView='auto'
        //     effect='coverflow'
        //     loop
        //     coverflowEffect={{
        //         rotate: 50,
        //         stretch: 0,
        //         depth: 100,
        //         modifier: 1,
        //         slideShadows: true,
        //     }}
        //     modules={[EffectCoverflow]}
        // >
        // <div className='swiper-wrapper'>
        //     <h2>PROJECTS</h2>
        //     {slides.map((slide, index) => (
        //         <SwiperSlide key={slide} style={{
        //             backgroundImage: `url(${slide})`,
        //             }}
        //         />,
        //         <Project key={index} {...slide} />
        //     ))}
        // </div>
        // <div className='swiper-pagination'></div>
        // </Swiper>
    );
};

export default Portfolio