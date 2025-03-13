import React from 'react';
import IntroCard from '../components/IntroCard';
import PhotoCard from '../components/PhotoCard';
import YoutubeCard from '../components/YoutubeCard';
import SocialMediaCard from '../components/SocialMediaCard';
import Footer from '../components/Footer';

// Import assets
import youtubeIcon from "../assets/youtube-icon.svg";
import threadsIcon from "../assets/threads-icon.svg";
import mtFuji from "../assets/mtFuji.jpg";
import bmw from "../assets/bmw.jpg";
import ytThumbnail1 from "../assets/jameson-yt-thumbnail-3.jpg";
import ytThumbnail2 from "../assets/jameson-yt-thumbnail-2.jpg";

const Home = () => {
  return (
    <main className="container mx-auto px-28 py-16 bg-[#090c10]">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {/* Intro Card */}
        <IntroCard />
        
        {/* Tokyo Video Card */}
        <YoutubeCard 
          url="https://www.youtube.com/watch?v=l6WkY48htb4"
          thumbnail={ytThumbnail1}
          alt="Jameson & Tracy youtube thumbnail for Tokyo trip"
          className="col-span-1 row-span-2"
          dimAmount="bg-black/40"
        />
        
        {/* YouTube Channel Card */}
        <SocialMediaCard 
          href="https://youtube.com/@jamesonandtracy"
          icon={youtubeIcon}
          alt="YouTube Channel"
          className="col-span-1 row-span-2"
        />
        
        {/* Mt Fuji Photo Card */}
        <PhotoCard 
          to="/highlights/japan"
          image={mtFuji}
          alt="A nice shot of Mount Fuji"
          className="col-span-1 row-span-2"
          aspectRatio="aspect-[2/3]"
          dimAmount="bg-black/40"
        />
        
        {/* Threads Card */}
        <SocialMediaCard 
          href="https://threads.net/yourprofile"
          icon={threadsIcon}
          alt="Threads Profile"
          className="col-span-1 row-span-2"
        />
        
        {/* BMW Photo - Larger card */}
        <PhotoCard 
          to="/highlights/japan"
          image={bmw}
          alt="A nice shot of BMW"
          className="col-span-2 row-span-4"
          aspectRatio="aspect-[2/3]"
          dimAmount="bg-black/40"
        />
        
        {/* Seoul Video Card */}
        <YoutubeCard 
          url="https://www.youtube.com/watch?v=7SuUzyOUvck&t=1s"
          thumbnail={ytThumbnail2}
          alt="Jameson & Tracy youtube thumbnail for Seoul trip" 
          className="col-span-2 row-span-2"
          aspectRatio="aspect-[3]"
          dimAmount="bg-black/40"
        />
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;