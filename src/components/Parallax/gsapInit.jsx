// import gsap from "gsap";
// import { Observer } from "gsap/all";

// export default function gsapInit () {
//     gsap.registerPlugin(Observer);
  
//     let sections = document.querySelectorAll("section"),
//       images = document.querySelectorAll(".parallaxBg"),
//       outerWrappers = gsap.utils.toArray(".parallaxOuter"),
//       innerWrappers = gsap.utils.toArray(".parallaxInner"),
//       currentIndex = -1,
//       wrap = gsap.utils.wrap(0, sections.length),
//       animating;
  
//     gsap.set(outerWrappers, { yPercent: 100 });
//     gsap.set(innerWrappers, { yPercent: -100 });
  
//     const gotoSection = (index, direction) => {
//         index = wrap(index);
//         if (animating || index === currentIndex) return; // Prevent re-animation of the current section
//         animating = true;
//         let fromTop = direction === -1,
//             dFactor = fromTop ? -1 : 1,
//             tl = gsap.timeline({
//               defaults: { duration: 1.50, ease: "power1.inOut" },
//               onComplete: () => (animating = false),
//             });
      
//         // Ensure the next section is visible before starting the animation
//         gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      
//         if (currentIndex >= 0) {
//           tl.to(images[currentIndex], { yPercent: -15 * dFactor, immediateRender: false })
//             .set(sections[currentIndex], { autoAlpha: 0 });
//         }
      
//         tl.fromTo([outerWrappers[index], innerWrappers[index]],
//           { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
//           { yPercent: 0, immediateRender: false }, 0)
//           .fromTo(images[index], { yPercent: 15 * dFactor, immediateRender: false }, { yPercent: 0 }, 0);
      
//         currentIndex = index;
//       };
  
//     Observer.create({
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//       onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//       tolerance: 10,
//       preventDefault: true,
//     });
  
//     gotoSection(0, 1);
//   };