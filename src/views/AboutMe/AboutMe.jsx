import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import profilePic from '../../assets/images/profile_pic.jpg'
import './style.css';

const Parallax = lazy(() => import('../../components/Parallax/Parallax'));

function AboutMe() {
  return (
    <>
      <Helmet>
        <title>Brittany Brimley - Full Stack Web Developer</title>
        <meta name="description" content="Discover Brittany Brimley's projects and skills as a Full Stack Web Developer. Explore my work with JavaScript, React, NextJS, NodeJS, MERN Stack and more." />
      </Helmet>
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