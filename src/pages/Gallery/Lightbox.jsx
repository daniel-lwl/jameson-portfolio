// Lightbox.jsx
import React, { useEffect } from 'react';

const Lightbox = ({ photo, onClose, onNext, onPrevious, isLastPhoto, isFirstPhoto }) => {
  // Close lightbox when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && !isLastPhoto) {
        onNext();
      } else if (e.key === 'ArrowLeft' && !isFirstPhoto) {
        onPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent scrolling on body when lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrevious, isLastPhoto, isFirstPhoto]);

  if (!photo) return null;

  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop (not the image or controls)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800"
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Previous button */}
      <button 
        onClick={onPrevious} 
        disabled={isFirstPhoto}
        className={`absolute left-4 text-white p-2 rounded-full hover:bg-gray-800 ${isFirstPhoto ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'}`}
        aria-label="Previous photo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Next button */}
      <button 
        onClick={onNext} 
        disabled={isLastPhoto}
        className={`absolute right-4 text-white p-2 rounded-full hover:bg-gray-800 ${isLastPhoto ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'}`}
        aria-label="Next photo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Main image container */}
      <div className="max-w-7xl mx-auto max-h-screen p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
        <img 
          src={photo.src} 
          alt={photo.alt} 
          className="max-h-[85vh] max-w-full object-contain"
        />
        
        {/* Caption */}
        <div className="mt-2 text-white text-center">
          <h3 className="text-lg font-medium">{photo.alt}</h3>
          {photo.description && (
            <p className="text-gray-300 text-sm mt-1">{photo.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;