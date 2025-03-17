// PhotoGrid.jsx
import React from 'react';
import { Card } from '../../components/Card';

// Define the GalleryPhoto component in the same file
const GalleryPhoto = ({ photo }) => {
  return (
    <Card className="border-2 border-gray-700 overflow-hidden">
      <div className={`relative ${photo.aspectRatio} w-full h-full group`}>
        <img 
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Hover overlay with photo info */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p className="text-white text-sm">{photo.alt}</p>
        </div>
      </div>
    </Card>
  );
};

const PhotoGrid = ({ photos, loading }) => {
  if (loading) {
    return (
      <Card className="w-full p-6 flex items-center justify-center h-60 border-2 border-gray-700">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
          <p className="text-[#EFEBEB]">Loading photos...</p>
        </div>
      </Card>
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
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;