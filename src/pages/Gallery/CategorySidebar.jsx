// CategorySidebar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../services/api';

const CategorySidebar = ({ activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Handle menu toggle for mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle category selection on mobile (close menu after selecting)
  const handleCategoryClick = () => {
    if (window.innerWidth < 768) {
      setMobileMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full md:w-72 min-h-full bg-background-sidebar rounded-4xl border-2 border-custom shrink-0 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 border-custom rounded w-1/2"></div>
          <div className="h-8 border-custom rounded w-1/2"></div>
          <div className="h-8 border-custom rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full md:w-72 min-h-full bg-background-sidebar rounded-4xl border-2 border-custom shrink-0 p-6">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  // Fallback to static content if no categories are found
  const displayCategories = categories.length === 0 
    ? [
        { id: 'japan', slug: 'japan', label: 'Japan', subheading: 'Subheading talking about his japan trip or something' },
        { id: 'korea', slug: 'korea', label: 'Korea', subheading: 'Adventures in Seoul and beyond' },
        { id: 'cars', slug: 'cars', label: 'Cars', subheading: 'Automotive photography collection' },
        { id: 'fireworks', slug: 'fireworks', label: 'Fireworks', subheading: 'Beautiful fireworks displays' }
      ]
    : categories;

  // Render mobile hamburger menu and desktop sidebar
  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden w-full bg-background-sidebar rounded-4xl border-2 border-custom mb-4">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Categories</h2>
          <button 
            onClick={toggleMobileMenu}
            className="text-primary p-2 rounded-md hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            {!mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile menu dropdown */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="px-4 pb-4">
            <ul className="space-y-0">
              {displayCategories.map((category, index) => (
                <li key={category.id}>
                  <Link 
                    to={`/gallery/${category.slug}`}
                    className="block py-3 transition-colors duration-200"
                    onClick={handleCategoryClick}
                  >
                    <h2 className={`text-lg font-bold ${
                      activeCategory === category.slug 
                        ? 'text-primary' 
                        : 'text-secondary'
                    }`}>
                      {category.label}
                    </h2>
                    
                    {activeCategory === category.slug && (
                      <p className="text-sm text-subheading mt-1">{category.subheading}</p>
                    )}
                  </Link>
                  
                  {index < displayCategories.length - 1 && (
                    <div className="border-t border-custom my-1"></div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden md:block w-72 min-h-full bg-background-sidebar rounded-4xl border-2 border-custom shrink-0">
        <nav className="p-6 h-full flex flex-col">
          <ul className="space-y-0">
            {displayCategories.map((category, index) => (
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
                    <p className="text-sm text-subheading">{category.subheading}</p>
                  </div>
                </Link>
                
                {index < displayCategories.length - 1 && (
                  <div className="border-t border-custom my-1"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default CategorySidebar;