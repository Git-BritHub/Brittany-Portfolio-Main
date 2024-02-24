import gsapInit from "./gsapInit";
import { useEffect } from "react";
import "./style.css";

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';

const sections = [
    { title: "Hardworking. Highly Self Motivated", image: img1 },
    { title: "Innovative. There's Always a Solution.", image: img2 },
    { title: "Curious. Great Love of Finding and Learning New Things.", image: img3 },
    { title: "Excellent Team player. Plays Well With Others.", image: img4 },
    { title: "Nerd. I am nerd.", image: img5 },
  ];

  export default function Parallax () {
  useEffect(() => {
    gsapInit();
  }, []);

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
