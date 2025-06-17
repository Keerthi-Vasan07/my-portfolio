import React, { useEffect, useRef } from "react";
import { Element, Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "../../assets/ShinyText/ShinyText.jsx";
import "./certificates.css";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const certRefs = useRef([]);

  useEffect(() => {
    certRefs.current.forEach((cert, index) => {
      gsap.from(cert, {
        opacity: 0,
        y: 100,
        duration: 3,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cert,
          start: "top 80%",
          toggleActions: "restart none none restart",
        },
      });
    });
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0.2vh",
          left: "30vw",
          width: "20vw",
          height: "5vh",
          padding: "1vw",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <Link to="skills" smooth={true} duration={500} spy={true} offset={-80}>
          <ShinyText text="skills" disabled={false} speed={3} className="custom-class" />
        </Link>
      </div>

      <Element
        name="skills"
        className="skills-section"
        style={{ height: "100vh", padding: "4vw" }}
      >
        <h2 className="skills-title">📜 My Certificates</h2>

        <div className="skills-box">
          {["cert1.jpg", "cert2.jpg", "cert3.jpg"].map((img, index) => (
            <img
              key={index}
              ref={(el) => (certRefs.current[index] = el)}
              src={`/certificates/${img}`}
              alt={`Certificate ${index + 1}`}
              className="certificate"
            />
          ))}
        </div>
      </Element>
    </>
  );
};

export default Certificates;
