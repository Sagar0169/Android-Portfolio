import React from "react";
import { motion, useInView } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-30 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <motion.p
            variants={nameVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ marginTop: "10px", color: "#fff", textAlign: "center", marginBottom: "20px" }}
          >
            {technology.name}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
