import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ProjectDetial.css'

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const skills = [
  {
    title: "React",
    description:
      "I have the most as well as recent experience in React compared to other technologies in my list. I have created and architected web projects from scratch as well as jumped on ongoing projects.",
    projects: [
      { name: "Snapteam/Bijli", tech: "React | Electron | Laravel" },
      { name: "Nykaa", tech: "React" },
      { name: "Wakency", tech: "React" },
    ],
  },
  // Add more skills as needed
];

const SkillShowcase = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Left Column */}
      <div className="md:w-1/4 p-4 flex flex-col items-center bg-gray-800">
        <img src="react-logo.png" alt="React" className="w-32 h-32 mb-4" />
        <div className="text-center">
          <h2 className="text-3xl font-bold">React</h2>
          <p className="mt-4 text-gray-400">
            I have the most as well as recent experience in React compared to other technology in my list. I have created and architected web projects from scratch as well as jumped on ongoing projects. I am familiar with recent techniques and libraries used in react like code-splitting, Hooks, React-Router, Final-Form, Redux, Redux-api-middleware, css in js, etc.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-3/4 p-8 bg-gray-700 flex items-center justify-center">
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          itemClass="carousel-item-padding-40-px"
          dotListClass="custom-dot-list-style"
        >
          {skills[0].projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center m-4">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700">{project.tech}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SkillShowcase;
