import React from "react";

const Dialog = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-lg w-full">
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
      </div>
    </div>
  );
};

export default Dialog;
