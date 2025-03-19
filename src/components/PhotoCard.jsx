import React from 'react';
import { LinkCard } from './Card';

const PhotoCard = ({ to, image, alt, className, aspectRatio = "aspect-square", dimAmount = "bg-black/30" }) => (
  <LinkCard to={to} className={`border-2 border-custom ${className}`}>
    <div className={`relative ${aspectRatio} w-full h-full group`}>
      <img 
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for dimming the image */}
      <div className={`absolute inset-0 ${dimAmount} transition-opacity duration-300 group-hover:opacity-0`}></div>
    </div>
  </LinkCard>
);

export default PhotoCard;