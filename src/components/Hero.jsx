import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./Hero.css"; // Import the CSS file where your custom cursor class is defined

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF]">
              <TypeAnimation
                sequence={[
                  "Sagar", // Types 'Sagar'
                  2000, // Waits 2s
                  "Android Developer", // Deletes 'Sagar' and types 'Android Developer'
                  2000, // Waits 2s
                ]}
                wrapper="span"
                cursor={false} // Disable the default cursor
                repeat={Infinity}
                style={{
                  display: "inline-block",
                  color: "inherit",
                }}
              />
              <span className="custom-cursor" /> {/* Custom cursor element */}
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>
            I develop intuitive Android applications,{" "}
            <br className="sm:block hidden" />
            ensuring seamless user experiences
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
