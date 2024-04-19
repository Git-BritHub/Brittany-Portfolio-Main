import React, { Suspense, lazy } from 'react';
import profilePic from '../../assets/images/profile_pic.png'
// import Parallax from '../../components/Parallax/Parallax';
import './style.css';

const Parallax = lazy(() => import('../../components/Parallax/Parallax'));

function AboutMe() {
  return (
    <>
      <div className='container aboutMe'>
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 text-center">
          <img src={profilePic} alt='Brittany Brimley - Full Stack Web Developer' className='profilePic fade-in-up' />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h1 className="fade-in-left">FULL STACK WEB DEVELOPER</h1>
            <h2 className="fade-in-right">
            JavaScript | TypeScript | MERN Stack | HTML | CSS | NodeJS | JSON | JQuery | ExpressJS | Handlebars | JWT | MySQL | MongoDB | GraphQL | Apollo | React | NextJS | DaisyUI | Tailwind CSS | Bootstrap | Bulma | Figma | Netlify | SwiperJS | GSAP | Google Cloud
            </h2>
          </div>
        </div>
      </div>
      <Suspense>
        <Parallax />
      </Suspense>
    </>
  )
}

export default AboutMe;