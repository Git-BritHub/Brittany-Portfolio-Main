import gsapInit from './Gsap';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';

import './style.css'

function Parallax() {
    <gsapInit />
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