// GalleryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategorySidebar from './CategorySidebar';
import PhotoGrid from './PhotoGrid';
import BackButton from './BackButton';

// Sample images - replace with your actual imports
import mtFuji from "../../assets/mtFuji.jpg";
import bmw from "../../assets/bmw.jpg";
// Add more imports as needed

const GalleryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageVisible, setPageVisible] = useState(false);

  // Sample data structure - replace with Strapi API call in the future
  const photoData = {
    japan: [
      { id: 1, src: mtFuji, alt: 'Mount Fuji at sunset', aspectRatio: 'aspect-square' },
      { id: 2, src: mtFuji, alt: 'Tokyo street view', aspectRatio: 'aspect-square' },
      { id: 3, src: mtFuji, alt: 'Kyoto temple', aspectRatio: 'aspect-square' },
      { id: 4, src: mtFuji, alt: 'Cherry blossoms', aspectRatio: 'aspect-square' },
      { id: 5, src: mtFuji, alt: 'Japanese garden', aspectRatio: 'aspect-square' },
    ],
    korea: [
      { id: 1, src: mtFuji, alt: 'Seoul skyline', aspectRatio: 'aspect-square' },
      { id: 2, src: mtFuji, alt: 'Korean temple', aspectRatio: 'aspect-square' },
      { id: 3, src: mtFuji, alt: 'Street food market', aspectRatio: 'aspect-square' },
    ],
    cars: [
      { id: 1, src: bmw, alt: 'BMW sports car', aspectRatio: 'aspect-square' },
      { id: 2, src: bmw, alt: 'Classic vintage car', aspectRatio: 'aspect-square' },
      { id: 3, src: bmw, alt: 'Car detail shot', aspectRatio: 'aspect-square' },
    ]
  };

  useEffect(() => {
    // Set loading when category changes
    setLoading(true);
    
    // Simulating API fetch with delay for transition effect
    const timer = setTimeout(() => {
      setPhotos(category && photoData[category] ? photoData[category] : []);
      setLoading(false);
    }, 400); // Slightly longer delay for better transition feel
    
    return () => clearTimeout(timer);
  }, [category]);

  const handleBackClick = () => {
    // Fade out before navigating
    setPageVisible(false);
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  return (
    <div className={`min-h-screen bg-[#090c10] text-[#EFEBEB]`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen">
        <div className="mb-6">
          <BackButton onClick={handleBackClick} />
        </div>
        
        <div className="flex flex-1 flex-col md:flex-row gap-6">
          <CategorySidebar activeCategory={category} />
          <div className="flex-1">
            <PhotoGrid photos={photos} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;