// CategorySidebar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../services/api';

const CategorySidebar = ({ activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        
        // Transform Strapi data structure to match what we need
        const formattedCategories = data.map(item => ({
          id: item.id,
          slug: item.Slug,
          label: item.Name,
          subheading: item.Subheading || 'Explore amazing photos'
        }));
        
        setCategories(formattedCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to load categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="w-72 min-h-full bg-[#09121b] rounded-4xl border-2 border-gray-700 shrink-0 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-700 rounded w-1/2"></div>
          <div className="h-8 bg-gray-700 rounded w-1/2"></div>
          <div className="h-8 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-72 min-h-full bg-[#09121b] rounded-4xl border-2 border-gray-700 shrink-0 p-6">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  // Fallback to static content if no categories are found
  if (categories.length === 0) {
    const fallbackCategories = [
      { id: 'japan', slug: 'japan', label: 'Japan', subheading: 'Subheading talking about his japan trip or something' },
      { id: 'korea', slug: 'korea', label: 'Korea', subheading: 'Adventures in Seoul and beyond' },
      { id: 'cars', slug: 'cars', label: 'Cars', subheading: 'Automotive photography collection' }
    ];
    
    return (
      <div className="w-72 min-h-full bg-[#09121b] rounded-4xl border-2 border-gray-700 shrink-0">
        <nav className="p-6 h-full flex flex-col">
          <p className="text-yellow-400 mb-4">Using fallback categories</p>
          <ul className="space-y-0">
            {fallbackCategories.map((category, index) => (
              <li key={category.id}>
                <Link 
                  to={`/gallery/${category.slug}`}
                  className="block py-5 transition-colors duration-200"
                >
                  <h2 className={`text-2xl font-bold ${
                    activeCategory === category.slug 
                      ? 'text-white' 
                      : 'text-[#EFEBEB]'
                  }`}>
                    {category.label}
                  </h2>
                  
                  <div 
                    className={`transition-all duration-700 ease-in-out ${
                      activeCategory === category.slug 
                        ? 'h-auto opacity-100 mt-2' 
                        : 'h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-sm text-gray-400">{category.subheading}</p>
                  </div>
                </Link>
                
                {index < fallbackCategories.length - 1 && (
                  <div className="border-t border-gray-700 my-1"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div className="w-72 min-h-full bg-[#09121b] rounded-4xl border-2 border-gray-700 shrink-0">
      <nav className="p-6 h-full flex flex-col">
        <ul className="space-y-0">
          {categories.map((category, index) => (
            <li key={category.id}>
              <Link 
                to={`/gallery/${category.slug}`}
                className="block py-5 transition-colors duration-200"
              >
                <h2 className={`text-2xl font-bold ${
                  activeCategory === category.slug 
                    ? 'text-white' 
                    : 'text-[#EFEBEB]'
                }`}>
                  {category.label}
                </h2>
                
                <div 
                  className={`transition-all duration-700 ease-in-out ${
                    activeCategory === category.slug 
                      ? 'h-auto opacity-100 mt-2' 
                      : 'h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm text-gray-400">{category.subheading}</p>
                </div>
              </Link>
              
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