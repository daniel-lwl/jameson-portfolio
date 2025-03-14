import React from 'react';
import { ExternalLinkCard } from './Card';

const SocialMediaCard = ({ href, icon, alt, className }) => (
  <ExternalLinkCard href={href} className={`col-span-1 row-span-1 border-2 border-gray-700 ${className}`}>
    <div className="aspect-square w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4">
      {/* Optimized icon size for the 2-column layout */}
      <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
        <img 
          src={icon}
          alt={alt}
          className="w-full h-full"
        />
      </div>
    </div>
  </ExternalLinkCard>
);

export default SocialMediaCard;