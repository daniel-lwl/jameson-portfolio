import React, { useState } from 'react';
import IntroCard from '../components/IntroCard';
import PhotoCard from '../components/PhotoCard';
import YoutubeCard from '../components/YoutubeCard';
import SocialMediaCard from '../components/SocialMediaCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Import assets
import youtubeIcon from "../assets/icons/youtube-icon.svg";
import threadsIcon from "../assets/icons/threads-icon.svg";
import mtFuji from "../assets/gallery/japan/mtFuji-1.jpg";
import bmw from "../assets/gallery/cars/bmw.jpg";
import ytThumbnail1 from "../assets/jameson-yt-thumbnail-3.jpg";
import ytThumbnail2 from "../assets/jameson-yt-thumbnail-2.jpg";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Function to determine if an element should be visible based on the active filter
  const isVisible = (elementType) => {
    // If on Home page, show everything
    if (activeFilter === 'all') {
      return true;
    }
    
    // If on Highlights page, show only photos and videos
    if (activeFilter === 'highlights') {
      return ['photo', 'youtube'].includes(elementType);
    }
    
    // If on Contact page, show only footer
    if (activeFilter === 'contact') {
      return elementType === 'footer';
    }
    
    return false;
  };

  return (
    // Improved responsive padding
    <main className="w-full px-10 sm:px-10 md:px-12 lg:px-18 xl:px-20 py-6 sm:py-8 lg:py-10">
      
      {/* FilterNav Component */}
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      
      {/* Consistent 2x2 grid layout across all screen sizes,
          expanding to 4 columns on larger screens */}
          
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mt-4 md:mt-6">
        {/* Intro Card - only visible on Home */}
        {isVisible('intro') && (
          <IntroCard className="col-span-2 row-span-1 md:row-span-1" />
        )}
        
        {/* Tokyo Video Card - visible on Home and Highlights */}
        {isVisible('youtube') && (
          <YoutubeCard 
            url="https://www.youtube.com/watch?v=l6WkY48htb4"
            thumbnail={ytThumbnail1}
            alt="Jameson & Tracy youtube thumbnail for Tokyo trip"
            className="col-span-1 row-span-1 md:row-span-1"
            aspectRatio="aspect-square md:aspect-[2]"
            dimAmount="bg-black/40"
          />
        )}
        
        {/* YouTube Channel Card - visible on Home */}
        {isVisible('social') && (
          <SocialMediaCard 
            href="https://youtube.com/@jamesonandtracy"
            icon={youtubeIcon}
            alt="YouTube Channel"
            className="col-span-1 row-span-1 md:row-span-1"
          />
        )}
        
        {/* Mt Fuji Photo Card - visible on Home and Highlights */}
        {isVisible('photo') && (
          <PhotoCard 
            to="/gallery/japan"
            image={mtFuji}
            alt="A nice shot of Mount Fuji"
            className="col-span-1 row-span-1 md:row-span-2"
            aspectRatio="aspect-square md:aspect-[2/3]"
            dimAmount="bg-black/40"
          />
        )}
        
        {/* Threads Card - visible on Home */}
        {isVisible('social') && (
          <SocialMediaCard 
            href="https://threads.net/@kingjamesonn"
            icon={threadsIcon}
            alt="Threads Profile"
            className="col-span-1 row-span-1 md:row-span-2"
          />
        )}
        
        {/* BMW Photo - visible on Home and Highlights */}
        {isVisible('photo') && (
          <PhotoCard 
            to="/gallery/cars"
            image={bmw}
            alt="A nice shot of BMW"
            className="col-span-2 row-span-1 md:col-span-2 md:row-span-4"
            aspectRatio="aspect-square md:aspect-[2/3]"
            dimAmount="bg-black/40"
          />
        )}
        
        {/* Seoul Video Card - visible on Home and Highlights */}
        {isVisible('youtube') && (
          <YoutubeCard 
            url="https://www.youtube.com/watch?v=7SuUzyOUvck&t=1s"
            thumbnail={ytThumbnail2}
            alt="Jameson & Tracy youtube thumbnail for Seoul trip" 
            className="col-span-2 row-span-1 md:col-span-2 md:row-span-2"
            aspectRatio="aspect-video"
            dimAmount="bg-black/40"
          />
        )}
        
        {/* Footer - visible on all pages */}
        <div className="col-span-2 md:col-span-4">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;