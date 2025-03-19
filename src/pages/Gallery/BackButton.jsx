// BackButton.jsx
import React from 'react';

const BackButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 text-secondary hover:bg-gray-700 px-2 sm:px-3 py-1 rounded transition-colors duration-200 text-xs sm:text-sm md:text-base`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
      Back to Home
    </button>
  );
};

export default BackButton;