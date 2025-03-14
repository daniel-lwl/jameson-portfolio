import React from 'react';
import { ExternalLinkCard } from './Card';

const YoutubeCard = ({ url, thumbnail, alt, className, aspectRatio = "aspect-square", dimAmount = "bg-black/30" }) => (
  <ExternalLinkCard href={url} className={`border-2 border-gray-700 ${className}`}>
    <div className={`relative ${aspectRatio} w-full h-full group`}>
      <img 
        src={thumbnail}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for dimming the image */}
      <div className={`absolute inset-0 ${dimAmount} transition-opacity duration-300 group-hover:opacity-0`}></div>
      
      {/* Custom YouTube play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-red-600/80 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  </ExternalLinkCard>
);

export default YoutubeCard;