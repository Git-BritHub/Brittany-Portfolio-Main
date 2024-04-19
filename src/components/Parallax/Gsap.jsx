import gsap from 'gsap';
import { Observer } from "gsap/all";
import './style.css';

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

export default gsapInit;