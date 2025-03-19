// PhotoGrid.jsx
import React, { useState } from 'react';
import { Card } from '../../components/Card';
import Lightbox from './Lightbox';

// Define the GalleryPhoto component in the same file
const GalleryPhoto = ({ photo, onClick }) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="rounded-4xl overflow-hidden bg-[#0D1117] border-2 border-gray-700 cursor-pointer" onClick={() => onClick(photo)}>
      <div className="relative aspect-square w-full h-full group">
        {imageError ? (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-800">
            <p className="text-gray-400 text-sm px-4 text-center">Image unavailable</p>
          </div>
        ) : (
          <>
            {/* Loading placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-800 animate-pulse">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            
            {/* Actual image with lazy loading */}
            <img 
              src={photo.src}
              alt={photo.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
            />
          </>
        )}
        
        {/* Hover overlay with photo info */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-medium mb-1">{photo.alt}</h3>
          {photo.description && (
            <p className="text-gray-300 text-sm">{photo.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const PhotoGrid = ({ photos, loading }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openLightbox = (photo) => {
    const index = photos.findIndex(p => p.id === photo.id);
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex < photos.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  if (loading) {
    // Loading skeleton
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <Card key={i} className="border-2 border-gray-700 overflow-hidden animate-pulse">
              <div className="aspect-square w-full bg-gray-800"></div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <Card className="w-full p-6 flex items-center justify-center h-60 border-2 border-gray-700">
        <p className="text-[#EFEBEB]">No photos found in this category.</p>
      </Card>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {photos.map(photo => (
          <GalleryPhoto 
            key={photo.id} 
            photo={photo}
            onClick={openLightbox}
          />
        ))}
      </div>

      {/* Lightbox component */}
      {lightboxOpen && (
        <Lightbox
          photo={photos[currentPhotoIndex]}
          onClose={closeLightbox}
          onNext={goToNextPhoto}
          onPrevious={goToPreviousPhoto}
          isLastPhoto={currentPhotoIndex === photos.length - 1}
          isFirstPhoto={currentPhotoIndex === 0}
        />
      )}
    </div>
  );
};

export default PhotoGrid;