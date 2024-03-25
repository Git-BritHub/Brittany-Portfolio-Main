// import React, { useRef } from 'react';
// import Parallax from '../../components/Parallax/Parallax';
import profilePic from '../../assets/images/profile_pic.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './style.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Observer } from "gsap/all";

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';

function AboutMe() {
    const imagePath = profilePic;

const gsapInit = () => {
  gsap.registerPlugin(Observer);

  let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".parallaxBg"),
    outerWrappers = gsap.utils.toArray(".parallaxOuter"),
    innerWrappers = gsap.utils.toArray(".parallaxInner"),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length),
    animating;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  const gotoSection = (index, direction) => {
    index = wrap(index);
    animating = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });
    if (currentIndex >= 0) {
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
      { yPercent: 0 },
      0
    ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);
    
    currentIndex = index;
  };

  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  gotoSection(0, 1);
};

const sections = [
    // { profileImage: profilePic, h1: "FULL STACK WEB DEVELOPER", title: "", text:"JavaScript | TypeScript | MERN Stack | HTML | CSS | NodeJS | JSON | JQuery | ExpressJS | Handlebars | JWT | MySQL | MongoDB | GraphQL | Apollo | React | NextJS | DaisyUI | Tailwind CSS | Bootstrap | Bulma | Figma | Netlify | SwiperJS | Google Cloud"},
    {title: "", text: "", image: ""},
    { title: "Hardworking", text: "Highly Self Motivated", image: img1 },
    { title: "Innovative", text: "There's Always a Solution", image: img2 },
    { title: "Curious", text: "Love of Learning", image: img3 },
    { title: "Excellent Team player", text: "Plays Well With Others", image: img4 },
    { title: "Nerd", text: "I am nerd", image: img5 },
  ];

  
  useGSAP(() => {
    gsap.registerPlugin(useGSAP);
    gsapInit();
  }, []);
    return (
      <>
        <div className='aboutMe justify-content-center align-items-center mt-5'>
            <LazyLoadImage
                src={imagePath} 
                alt='profile picture' 
                className='profilePic justify-content-center align-items-center mt-5 mb-5'
                effect="opacity"
            />
            <>
            <h1>FULL STACK WEB DEVELOPER</h1>
            <h2>
                JavaScript | TypeScript | MERN Stack | HTML | CSS | NodeJS | JSON | JQuery | ExpressJS | Handlebars | JWT | MySQL | MongoDB | GraphQL | Apollo | React | NextJS | DaisyUI | Tailwind CSS | Bootstrap | Bulma | Figma | Netlify | SwiperJS | Google Cloud
            </h2>
            <p>
                Diligent software developer with a keen artistic eye, committed to delivering exceptional work with meticulous attention to detail. Highly self-motivated, driven by curiosity, and possess a deep passion for continuous learning in our dynamic and ever-evolving field. Proactively seeking opportunities to elevate my skills and efficiency. Excellent problem-solver with an innovative and strategic mindset. Excels in fostering positive and communicative team environments, contributing effectively. Simultaneously thrives in independent work settings and is committed to realizing a company's objectives with a focus on delivering impactful results.
            </p>
            </>
        </div>
        {sections.map((section, index) => (
        <div key={index} className="parallaxBody">
          <section className="parallaxSection">
            <div className="parallaxOuter">
              <div className="parallaxInner">
                <div
                  className="parallaxBg"
                  style={{ backgroundImage: `url(${section.image})` }}
                >
                <div className="parallaxTitle">
                  <h1>{section.h1}</h1>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
      </>
    )
}

export default AboutMe;