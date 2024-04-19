import gsap from 'gsap';
import { Observer } from "gsap/all";
import { useGSAP } from '@gsap/react';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';

import './style.css'

function Parallax() {
    const gsapInit = () => {
        gsap.registerPlugin(Observer);
      
        let sections = document.querySelectorAll("section"),
          images = document.querySelectorAll(".parallaxBg"),
          outerWrappers = gsap.utils.toArray(".parallaxOuter"),
          innerWrappers = gsap.utils.toArray(".parallaxInner"),
          // Start with the first section
          currentIndex = 0, 
          // Custom wrap function for looping
          wrap = (index) => { 
            // Wrap to first section if index is negative
            if (index < 0) return 0; 
            // Wrap to first section if index exceeds the number of sections
            if (index + 1 >= sections.length) return 0; 
            // Return the index if no wrapping is needed
            return index; 
          },
          animating = false;
      
        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });
      
        const gotoSection = (index, direction) => {
          // Ensure the index wraps around for looping
          index = wrap(index); 
          if (!outerWrappers[index] || !innerWrappers[index] || !images[index]) {
            console.warn('Element not found for index: ', index);
            // Exit the function early if any element is missing
            return; 
          }
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

    useGSAP(() => {
        gsap.registerPlugin(useGSAP);
        gsapInit();
    }, []);

    const sections = [
        { title: "", text: "", image: "" },
        { title: "Hardworking", text: "Highly Self Motivated", image: img1 },
        { title: "Innovative", text: "There's Always a Solution", image: img2 },
        { title: "Curious", text: "Love of Learning", image: img3 },
        { title: "Excellent Team player", text: "Plays Well With Others", image: img4 },
        { title: "Nerd", text: "I am nerd", image: img5 },
    ];
    return (
        sections.map((section, index) => (
            <div key={index} className="parallaxBody">
              <section className="parallaxSection">
                <div className="parallaxOuter">
                  <div className="parallaxInner">
                    <div
                      className="parallaxBg"
                      style={{ backgroundImage: `url(${section.image})` }}
                    >
                    <div className="parallaxTitle">
                      <h2>{section.title}</h2>
                      <p>{section.text}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            ))
    );
}

export default Parallax;