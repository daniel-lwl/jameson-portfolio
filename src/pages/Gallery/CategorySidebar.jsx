// CategorySidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategorySidebar = ({ activeCategory }) => {
  const categories = [
    { 
      id: 'japan', 
      label: 'Japan',
      subheading: 'Subheading talking about his japan trip or something'
    },
    { 
      id: 'korea', 
      label: 'Korea',
      subheading: 'Adventures in Seoul and beyond'
    },
    { 
      id: 'cars', 
      label: 'Cars',
      subheading: 'Automotive photography collection'
    }
  ];

  return (
    <div className="w-72 min-h-full bg-[#09121b] rounded-4xl border-2 border-gray-700 shrink-0">
      <nav className="p-6 h-full flex flex-col">
        <ul className="space-y-0">
          {categories.map((category, index) => (
            <li key={category.id}>
              <Link 
                to={`/gallery/${category.id}`}
                className="block py-5 transition-colors duration-200"
              >
                <h2 className={`text-2xl font-bold ${
                  activeCategory === category.id 
                    ? 'text-white' 
                    : 'text-[#EFEBEB]'
                }`}>
                  {category.label}
                </h2>
                
                {/* Show subheading only for active category */}
                <div 
                  className={`transition-all duration-700 ease-in-out ${
                    activeCategory === category.id 
                      ? 'h-auto opacity-100 mt-2' 
                      : 'h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm text-gray-400">{category.subheading}</p>
                </div>
              </Link>
              
              {/* Add divider except for last item */}
              {index < categories.length - 1 && (
                <div className="border-t border-gray-700 my-1"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategorySidebar;