import React from 'react';
import { motion } from 'framer-motion';
import "./ProjectDetial.css"; // Ensure this file contains any additional CSS you need
import { github, googleplay } from "../assets"; // Import your assets here

const Nav = ({ title, isVisible, source_code_link, playstore }) => {
  return (
    <motion.header
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-transform duration-300 ${
        isVisible ? 'bg-black bg-opacity-60 backdrop-blur-md' : '-translate-y-full bg-transparent'
      }`}
      style={{ height: "auto", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} // Use flexbox to align items
    >
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-white"
        initial={{ scale: 1 }}
        animate={{ scale: isVisible ? 0.7 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {title}
      </motion.h1>
      <div className="flex justify-end items-center space-x-2">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering parent onClick
            window.open(source_code_link, "_blank");
          }}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github}
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </motion.div>
        {playstore && ( // Render playstore button if playstore link exists
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering parent onClick
              window.open(playstore, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={googleplay}
              alt="play store"
              className="w-1/2 h-1/2 object-contain"
            />
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Nav;
