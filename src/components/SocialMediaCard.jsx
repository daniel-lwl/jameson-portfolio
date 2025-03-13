import React from 'react';
import { ExternalLinkCard } from './Card';

const SocialMediaCard = ({ href, icon, alt, className }) => (
  <ExternalLinkCard href={href} className={`col-span-1 row-span-2 border-2 border-gray-700 ${className}`}>
    <div className="aspect-square w-full h-full flex items-center justify-center p-4">
      <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32">
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