import React from 'react';

const Navbar = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'Home' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="flex justify-center py-2 sm:py-4">
      <div className="flex gap-1 sm:gap-2 md:gap-4 bg-opacity-50 bg-background-component rounded-lg border border-custom px-2 sm:px-4 md:px-8 py-1">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`text-secondary hover:text-gray-300 hover:bg-border-custom px-2 sm:px-3 py-1 rounded transition-colors duration-200 text-xs sm:text-sm md:text-base ${
              activeFilter === filter.id 
                ? 'bg-gray-700 text-primary' 
                : ''
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;