import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Dialog = ({ project, onClose }) => {
  const dialogRef = useRef();

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={dialogVariants}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <motion.div
        ref={dialogRef}
        className="bg-white p-5 rounded-lg max-w-lg w-full"
      >
        <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-4">{project.name}</h2>
        <p className="mt-2 text-gray-600">{project.description}</p>
        <div className="mt-4 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
          <button
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Details
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dialog;
