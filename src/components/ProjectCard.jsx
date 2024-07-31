import React from "react";
import { motion } from "framer-motion";
import { github, googleplay } from "../assets";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import "./ProjectDetial.css"; // Import the CSS file

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  id,
  source_code_link,
  onClick, // Receive onClick as a prop
  playstore,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent navigation if the click is on a button inside the card
    if (e.target.closest('.card-img_hover')) {
      e.preventDefault();
      return;
    }
    // Navigate to project details page
    navigate(`/project/${name}`, { state: { project: id } });
  };

  return (
    <div
      className="project-card relative"
      onClick={handleCardClick} // Attach click handler to div
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

           

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 blur-effect">
              <span className="text-white text-xl font-bold slide-text">View Project</span>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                &#8226; {tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
