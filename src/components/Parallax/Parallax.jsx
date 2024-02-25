import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Observer } from "gsap/all";
import "./style.css";

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';

export default function Parallax () {
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
    { title: "Hardworking. Highly Self Motivated", image: img1 },
    { title: "Innovative. There's Always a Solution.", image: img2 },
    { title: "Curious. Great Love of Finding and Learning New Things.", image: img3 },
    { title: "Excellent Team player. Plays Well With Others.", image: img4 },
    { title: "Nerd. I am nerd.", image: img5 },
  ];

  useGSAP(() => {
    gsapInit();
    gsap.to(box.current, {x:360});
  }, [endx]);

  return sections.map((section, index) => (
    <div key={index} className="parallaxBody">
      <section className="parallaxSection">
        <div className="parallaxOuter">
          <div className="parallaxInner">
            <div
              className="parallaxBg one"
              style={{ backgroundImage: `url(${section.image})` }}
            >
              <h2 className="parallaxTitle">{section.title}</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  ));
}
