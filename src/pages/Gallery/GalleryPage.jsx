// GalleryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategorySidebar from './CategorySidebar';
import PhotoGrid from './PhotoGrid';
import BackButton from './BackButton';
import { getPhotosByCategory } from '../../services/api';

const GalleryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    // Set loading when category changes
    setLoading(true);
    setError(null);
    
    const fetchPhotos = async () => {
      try {
        if (category) {
          const photoData = await getPhotosByCategory(category);
          setPhotos(photoData);
        } else {
          setPhotos([]);
        }
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError('Failed to load photos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    // Add a slight delay for better transition feel
    const timer = setTimeout(() => {
      fetchPhotos();
    }, 400);
    
    return () => clearTimeout(timer);
  }, [category]);

  // Set page as visible when component mounts
  useEffect(() => {
    setPageVisible(true);
    return () => setPageVisible(false);
  }, []);

  const handleBackClick = () => {
    // Fade out before navigating
    setPageVisible(false);
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  return (
    <div className={`min-h-screen bg-[#090c10] text-[#EFEBEB] transition-opacity duration-300 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen">
        <div className="mb-6">
          <BackButton onClick={handleBackClick} />
        </div>
        
        <div className="flex flex-1 flex-col md:flex-row gap-6">
          <CategorySidebar activeCategory={category} />
          <div className="flex-1">
            {error ? (
              <div className="p-6 bg-red-900/20 rounded-4xl border-2 border-red-900/50 text-red-200">
                <p>{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-red-900/40 hover:bg-red-900/60 rounded-xl text-sm"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <PhotoGrid 
                photos={photos} 
                loading={loading} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;