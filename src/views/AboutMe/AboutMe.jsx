// import React, { useRef } from 'react';
// import Parallax from '../../components/Parallax/Parallax';
import profilePic from '../../assets/images/profile_pic.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './style.css';

function AboutMe() {
    const imagePath = profilePic;
    return (
        <>
        <div className='aboutMe justify-content-center align-items-center mt-5'>
            <LazyLoadImage
                src={imagePath} 
                alt='profile picture' 
                className='profilePic justify-content-center align-items-center mt-5 mb-5'
                effect="opacity"
            />
            <div className="">
            <h1>FULL STACK WEB DEVELOPER</h1>
            <h2>
                JavaScript | TypeScript | MERN Stack | HTML | CSS | NodeJS | JSON | JQuery | ExpressJS | Handlebars | JWT | MySQL | MongoDB | GraphQL | Apollo | React | NextJS | DaisyUI | Tailwind CSS | Bootstrap | Bulma | Figma | Netlify | SwiperJS
            </h2>

            <p>
                Diligent software developer with a keen artistic eye, committed to delivering exceptional work with meticulous attention to detail. Highly self-motivated, driven by curiosity, and possess a deep passion for continuous learning in our dynamic and ever-evolving field. Proactively seeking opportunities to elevate my skills and efficiency. Excellent problem-solver with an innovative and strategic mindset. Excels in fostering positive and communicative team environments, contributing effectively. Simultaneously thrives in independent work settings and is committed to realizing a company's objectives with a focus on delivering impactful results.
            </p>
            </div>
        </div>
        {/* TODO: uncomment once issue of parallax triggering on page load is resolved */}
        {/* <Parallax /> */}
        </>
    )
}

export default AboutMe;