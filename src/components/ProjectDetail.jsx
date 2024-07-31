import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  github,
  googleplay,
  khelGallery,
  khelHome,
  khelPhone,
  khelPlayer,
  khelProfile,
  khelRegister,
  khelSports,
  Project1,
  silverlogo,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  ProjectDark1,
  ProjectDark2,
  ProjectDark3,
  ProjectDark4,
  ProjectDark5,
  ProjectDark6,
  kickoff,
  coding,
  finalPhase,
  finalTest,
  ongoing,
  Onechat1,
  Onechat2,
  Onechat3,
  Onechat4,
  Onechat5,
  Onechat6,
} from "../assets";
import Nav from "./Nav";
import "./ProjectDetial.css";
import { motion } from "framer-motion";
import { StarsCanvas } from "./canvas";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const projectData = {
  3: {
    title: "Khel Sathi",
    description:
      "Khel Sathi is a comprehensive sports management mobile app developed for the Government of Uttar Pradesh. This project was a collaborative team effort aimed at streamlining sports management and providing multilingual support to cater to diverse user groups. Built with Kotlin, Android Studio, and Firebase, the app ensures efficiency, scalability, and a seamless user experience.",
    timeline: [
      {
        date: "Feb 2023",
        event: "Project Kickoff",
        description:
          "Initiated the project with thorough research and planning sessions.",
        icon: "https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-47-323_512.gif",
        iconBg: "#000000",
        points: [
          "Conducted initial research",
          "Gathered comprehensive requirements",
          "Defined project scope and objectives",
        ],
      },
      {
        date: "March 2023",
        event: "Development Phase",
        description:
          "Implemented core features, focusing on the edit profile and dashboard functionalities.",
        icon: "https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-30-905_512.gif",
        iconBg: "#2196f3",
        points: [
          "Developed the edit profile section using Kotlin",
          "Built the dashboard for comprehensive user insights",
          "Integrated multilingual support",
          "Ensured robust API calling and efficient backend communication",
        ],
      },
      {
        date: "May 2023",
        event: "Final Testing and Launch",
        description:
          "Conducted extensive testing and successfully launched the app.",
        icon: finalTest,
        iconBg: "#9c27b0",
        points: [
          "Performed final testing and quality assurance",
          "Deployed the app on the Google Play Store",
          "Gathered user feedback for continuous improvement",
        ],
      },
    ],
    source_code_link: "https://github.com/Sagar0169/KhelSathi",
    playstore:
      "https://play.google.com/store/search?q=khel%20sathi&c=apps&hl=en",
    photos: [
      khelPhone,
      khelRegister,
      khelHome,
      khelPlayer,
      khelSports,
      khelProfile,
      khelGallery,
    ],
    platform: "Android",
  },

  2: {
    title: "Project Management Tool",
    description:
      "Developed an inter-office project management tool to streamline task assignment, project tracking, and status monitoring, utilizing React Native, JavaScript, Redux, and Firebase. The tool features employee check-in/check-out with location tracking and a mode switch between light and dark themes.",
    timeline: [
      {
        date: "Nov 2023",
        event: "Kickoff",
        description:
          "Project started with comprehensive research and planning.",
        icon: "https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-47-323_512.gif",
        iconBg: "#ff5722",
        points: [
          "Initial research",
          "Requirement gathering",
          "Project scope definition",
        ],
      },
      {
        date: "Jan 2024",
        event: "Development",
        description: "Implemented core features with cutting-edge technology.",
        icon: "https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-30-905_512.gif",
        iconBg: "#2196f3",
        points: [
          "Developed employee check-in/check-out functionality with location tracking",
          "Integrated mode switch between light and dark themes",
          "Implemented task assignment and project tracking",
          "Utilized React Native, JavaScript, Redux, and Firebase for development",
        ],
      },
      {
        date: "Ongoing",
        event: "In Progress",
        description: "Current status is in development with ongoing feature additions and testing.",
        icon: ongoing,
        iconBg: "#FFFFFF",
        points: [
          "Continued development",
          "Testing and debugging",
          "Feature refinement",
        ],
      },
    ],
    source_code_link: "https://github.com/Sagar0169/Project-Management",
    playstore: "",
    photos: [
      Project1,
      Project2,
      Project3,
      Project4,
      Project5,
      Project6,
      Project7,
      ProjectDark6,
      ProjectDark1,
      ProjectDark2,
      ProjectDark3,
      ProjectDark4,
      ProjectDark5,
    ],
    platform: "React Native",
  },
  1: {
    title: "One-To-One Chat App",
    description:
     "Developed a solo One-To-One Chat App with advanced features such as end-to-end encryption to ensure secure messaging. Built using Kotlin and Android Studio, with Firebase integration for real-time communication and scalability.",
    timeline: [
      {
        date: "July 2023",
        event: "Kickoff",
        description:
          "Project started with comprehensive research and planning.",
        icon: "https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-47-323_512.gif",
        iconBg: "#ff5722",
        points: [
          "Initial research",
          "Requirement gathering",
          "Project scope definition",
        ],
      },
      {
        date: "Aug 2023",
        event: "Development",
        description: "Implemented core features with cutting-edge technology.",
        icon: "https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-30-905_512.gif",
        iconBg: "#2196f3",
        points: [
          "Front-end development",
          "Backend integration",
          "End-to-end encryption implementation",
        ],
      },
      {
        date: "April 2023",
        event: "Launch",
        description: "Launched the project with a successful rollout.",
        icon: finalTest,
        iconBg: "#9c27b0",
        points: ["Fcm Notification Feature","User Testing","Photo Upload On Firebase"],
      },
    ],
    source_code_link: "https://github.com/Sagar0169/KhelSathi",
    playstore:
      "",
    photos: [
      Onechat1,
      Onechat2,
      Onechat3,
      Onechat4,
      Onechat5,
      Onechat6
    ],
    platform: "Android Studio",
  },
  // Add more projects as needed
};

const ProjectDetail = () => {
  const location = useLocation();
  const { state } = location; // Access state passed from the Link component

  const projectName = state.project;

  // Retrieve project data based on projectName
  const project = projectData[projectName] || {
    title: "Default Project Title",
    description: "Default description.",
    timeline: [],
    photos: [],
  };

  const [scrollY, setScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setHeaderVisible(window.scrollY > 100); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const titleSize = 40 - Math.min(scrollY / 10, 40); // Adjust the shrinking effect
  const titleOpacity = Math.max(1 - scrollY / 300, 0); // Adjust the fading effect
  const titlePositionX = Math.min(scrollY / 5, 50); // Adjust the sliding effect

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const CustomDot = ({ onClick, active }) => {
    const dotStyle = {
      backgroundColor: active ? "#FFFFFF" : "#000000", // Active dot color
      borderRadius: "80%",
      width: "10px",
      height: "10px",
      margin: "0 5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      marginBottom: "20px",
    };

    return <div onClick={onClick} style={dotStyle}></div>;
  };

  return (
    <div className="bg-gradient-to-r from-black-900 via-white-800 to-white-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <Nav
        title={project.title}
        isVisible={headerVisible}
        source_code_link={project.source_code_link}
        playstore={project.playstore}
      />

      <div className="flex flex-1">
        {/* Left Column */}
        <div className="fixed top-0 left-0 w-1/4 h-screen flex items-center justify-center">
          <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            itemClass="carousel-item-padding-40-px"
            className="w-full h-full"
            customDot={<CustomDot />} // Use custom dot component
          >
            {selectedImage ? (
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="rounded-3xl shadow-2xl object-contain"
                  style={{ maxHeight: "90%", aspectRatio: "9 / 16" }}
                />
              </div>
            ) : (
              project.photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-full h-full"
                >
                  <img
                    src={photo}
                    alt={`Project photo ${index + 1}`}
                    className="rounded-3xl shadow-2xl object-contain"
                    style={{ maxHeight: "90%", aspectRatio: "9 / 16" }}
                  />
                </div>
              ))
            )}
          </Carousel>
        </div>

        {/* Right Column */}
        <div className="right-section ml-auto">
          <div className="title-container">
            <motion.h1
              initial={{ x: 0, scale: 1, opacity: 1 }}
              animate={{
                x: titlePositionX,
                scale: headerVisible ? 0.5 : 1,
                opacity: titleOpacity,
              }}
              transition={{ duration: 0.3 }}
              className="nav-link download-button"
              style={{ fontSize: `${titleSize}px` }}
            >
              {project.title}
            </motion.h1>
            <div className="platform">Platform: {project.platform}</div>{" "}
            {/* Replace with actual platform */}
          </div>

          <div className="description-container">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="description"
            >
              {project.description}
            </motion.p>
          </div>

          <div className="timeline mb-12">
            <VerticalTimeline>
              {project.timeline.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={item.date}
                  contentStyle={{ background: "#23324F", color: "#f9fafb" }}
                  contentArrowStyle={{ borderRight: "7px solid #1a202c" }}
                  iconStyle={{ background: item.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={item.icon}
                        alt={item.event}
                        className="w-[100%] h-[100%] object-contain"
                      />
                    </div>
                  }
                >
                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      {item.event}
                    </h3>
                    <p
                      className="text-gray-300 text-lg font-semibold"
                      style={{ margin: 0 }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    {item.points.map((point, index) => (
                      <li
                        key={`point-${index}`}
                        className="text-gray-200 text-sm pl-1 tracking-wider"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>

          {/* Grid View */}
          <div className="grid grid-cols-3 gap-4">
            {project.photos.map((photo, index) => (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg image-container"
                onClick={() => handleImageClick(photo)}
              >
                <img
                  src={photo}
                  alt={`Project thumbnail ${index + 1}`}
                  className="image"
                  style={{ height: "500px" }} // Adjust height as needed
                />
                <div className="overlay">View Image</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stars background */}
      <StarsCanvas />
    </div>
  );
};

export default ProjectDetail;
