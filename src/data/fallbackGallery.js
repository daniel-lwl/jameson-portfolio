// src/data/galleryFallback.js
// Import Japan images
import mtFuji1 from '../assets/gallery/japan/mtFuji-1.jpg';
import mtFuji2 from '../assets/gallery/japan/mtFuji-2.jpg';

// Import Korea images
import everLand1 from '../assets/gallery/korea/Everland-1.jpg';

// Import Car images
import bmw from '../assets/gallery/cars/bmw.jpg';

// Import Firework images
import fireworks1 from '../assets/gallery/firework/Fireworks-1.jpg';
import fireworks2 from '../assets/gallery/firework/Fireworks-2.jpg';


// Fallback categories when Strapi is unavailable
export const fallbackCategories = [
    {
      id: 1,
      Slug: "japan",
      Name: "Japan",
      Subheading: "Capturing the beauty of Japan, from tranquil temples to bustling city streets."
    },
    {
      id: 2,
      Slug: "korea",
      Name: "Korea",
      Subheading: "Adventures in Seoul and beyond, showcasing Korea's vibrant culture and landscapes."
    },
    {
      id: 3,
      Slug: "cars",
      Name: "Cars",
      Subheading: "Automotive photography featuring elegant designs and powerful machines."
    },
    {
      id: 4,
      Slug: "fireworks",
      Name: "Fireworks",
      Subheading: "Spectacular displays of light and color illuminating the night sky."
    }
  ];
  
  // Fallback photos per category when Strapi is unavailable
  export const fallbackPhotos = {
    "japan": [
      {
        id: "japan-1",
        alt: "Mount Fuji",
        description: "Mt. Fuji in its full glory",
        src: mtFuji1
      },
      {
        id: "japan-2",
        alt: "Mount Fuji from Chureito Pagoda",
        description: "Mt. Fuji in its full glory",
        src: mtFuji2
      },
    ],
    "korea": [
      {
        id: "korea-1",
        alt: "Everland, Korea",
        description: "Everland, Korea",
        src: everLand1
      },
      
    ],
    "cars": [
      {
        id: "cars-1",
        alt: "BMW G20",
        description: "BMW G20",
        src: bmw
      },
    ],
    "fireworks": [
      {
        id: "fireworks-1",
        alt: "New Year's Celebration",
        description: "Chinese New Year fireworks",
        src: fireworks1
      },
      {
        id: "fireworks-2",
        alt: "New Year's Celebration",
        description: "Chinese New Year fireworks",
        src: fireworks2
      },
    ]
  };