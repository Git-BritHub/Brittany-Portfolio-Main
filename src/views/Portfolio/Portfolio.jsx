// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import { EffectCoverflow } from "swiper";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import './style.css'
import Project from '../../components/Projects/Project';
import masterBuilder from '../../assets/images/masterBuilderScreenshot.png';
import theWeb from '../../assets/images/theWeb.png';
import concertGroupie from '../../assets/images/concertGroupie.png';
import novelPursuit from '../../assets/images/novelPursuit.png';
import scribeMaster from '../../assets/images/scribeMaster.png';
import weatherDashboard from '../../assets/images/weatherDashboard.png';

const projects = [
    {
        // TODO: Add four more Project titles and all Screenshots and URLs for project websites
        title: 'masterBuilder',
        screenshot: masterBuilder,
        url: 'https://master-builder-production-40c9.up.railway.app/',
    },
    {
        title: 'theWeb',
        screenshot: theWeb,
        url: 'https://theweb-production.up.railway.app/',
    },
    {
        title: 'Concert Groupie',
        screenshot: concertGroupie,
        url: 'https://shindekokoro.github.io/concert-groupie/',
    },
    {
        title: 'Novel Pursuit',
        screenshot: novelPursuit,
        url: 'https://novel-pursuit-production.up.railway.app/',
    },
    {
        title: 'Scribe Master 3000',
        screenshot: scribeMaster,
        url: 'https://scribe-master-3000-production.up.railway.app/',
    },
    {
        title: 'Destination Weather Dashboard',
        screenshot: weatherDashboard,
        url: 'https://git-brithub.github.io/Destination-Weather-Dashboard/',
    },
];

function Portfolio () {
    return (
        <div className='mt-5 pt-3'>
        <h2>PROJECTS</h2>
        <div className='image-grid'>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
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