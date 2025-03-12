import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center py-4">
      <div className="flex gap-4 bg-opacity-50 bg-[#0D1117] rounded-lg border border-gray-700 px-8 py-1">
        <Link to="/" 
        className="text-[#EFEBEB] hover:text-gray-300 hover:bg-gray-700 px-3 py-1 rounded transition-colors duration-200"
        >Home</Link>

        <Link to="/" 
        className="text-[#EFEBEB] hover:text-gray-300 hover:bg-gray-700 px-3 py-1 rounded transition-colors duration-200"
        >Highlights</Link>

        <Link to="/" 
        className="text-[#EFEBEB] hover:text-gray-300 hover:bg-gray-700 px-3 py-1 rounded transition-colors duration-200"
        >Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;