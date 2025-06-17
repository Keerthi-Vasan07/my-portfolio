// AboutMe.jsx
import React, { useRef, useEffect } from "react";
import { Element, Link } from "react-scroll";
import ShinyText from "../../assets/ShinyText/ShinyText.jsx";
import ProfileCard from "./ProfileCard/ProfileCard.jsx";
import gsap from "gsap";
import SplitType from "split-type";
import "./AboutMe.css";
import Aurora from "../../assets/Aurora/Aurora.jsx";
import TextPressure from "./TextPressure.jsx";

function SplitTextAuto() {
  const textRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    const result = new SplitType(textRef.current, { types: "chars" });
    charsRef.current = result.chars;

    gsap.from(charsRef.current, {
      x: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.04,
    });

    return () => result.revert();
  }, []);

  return (
    <div className="split-text">
      <h1 ref={textRef}>
        I'm Keerthi Vasan — a frontend developer specializing in React.js, with a strong passion for emerging technologies including Artificial Intelligence, Machine Learning, Computer Vision, and the Internet of Things.
      </h1>
    </div>
  );
}

function Text() {
  return (
    <div className="text">
      <TextPressure
        text="Hello!"
        height="100%"
        flex={true}
        alpha={false}
        stroke={false}
        width={false}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={300} // Increased for visibility
      />
    </div>
  );
}

const AboutMe = () => {
  return (
    <>
      <Aurora />

      <div className="aboutme-link">
        <Link to="aboutme" smooth={true} duration={500} spy={true} offset={-80}>
          <ShinyText text="About Me" disabled={false} speed={3} />
        </Link>
      </div>

      <Element name="aboutme" className="aboutme-section">
        <div className="scroll-message">Scroll Down</div>
        <div className="aboutme-container">
          <div className="aboutme-left">
            <Text />
            <SplitTextAuto />
          </div>

          <div className="aboutme-right">
            <ProfileCard
              avatarUrl="https://i.pravatar.cc/150?img=3"
              miniAvatarUrl="https://i.pravatar.cc/50?img=3"
              name="Keerthi Vasan"
              title="Frontend Developer"
              handle="keerthicodes"
              status="Online"
            />
          </div>
        </div>
      </Element>
    </>
  );
};

export default AboutMe;
