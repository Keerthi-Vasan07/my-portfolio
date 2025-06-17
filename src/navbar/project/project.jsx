import React, { useRef, useState } from "react";
import { Element, Link } from "react-scroll";
import ShinyText from "../../assets/ShinyText/ShinyText";
import "./Project.css";

const projects = [
  {
    title: "Talon Copters",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1610390358581-617112aef0fa",
    description: "A helicopter booking app with real-time scenic maps and AI pricing.",
    link: "https://example.com/talon",
  },
  {
    title: "Elmington",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    description: "Luxury real estate listings with VR and 360° walkthroughs.",
    link: "https://example.com/elmington",
  },
  {
    title: "Gym X",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1584467735871-b744d3efba70",
    description: "A fitness and diet tracking app with community features.",
    link: "https://example.com/gymx",
  },
  {
    title: "Gym X",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1584467735871-b744d3efba70",
    description: "A fitness and diet tracking app with community features.",
    link: "https://example.com/gymx",
  },
  {
    title: "Gym X",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1584467735871-b744d3efba70",
    description: "A fitness and diet tracking app with community features.",
    link: "https://example.com/gymx",
  },
];

const Project = () => {
  const scrollRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") current.scrollLeft -= 350;
    else current.scrollLeft += 350;
  };

  return (
    <>
      <div
        className="project-link"
        style={{
          position: "fixed",
          top: "0.2vh",
          left: "55vw",
          width: "15vw",
          height: "5vh",
          padding: "1vw",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <Link to="project" smooth={true} duration={500} offset={-50}>
          <ShinyText text="Project" disabled={false} speed={3} />
        </Link>
      </div>

      <Element name="project" className="project-section">
        <h2 className="project-heading">🚀 My Works</h2>
        <div className="project-slider-wrapper">
          <button className="nav-btn left" onClick={() => scroll("left")}>
            ←
          </button>
          <div
            className="project-slider"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div
                className={`project-card-container ${
                  flippedIndex === index ? "flipped" : ""
                }`}
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <div className="project-card">
                  <div className="card-front">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-info">
                      <span className="project-category">
                        {project.category}
                      </span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                  </div>
                  <div className="card-back">
                    <p className="project-description">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-btn right" onClick={() => scroll("right")}>
            →
          </button>
        </div>
      </Element>
    </>
  );
};

export default Project;
