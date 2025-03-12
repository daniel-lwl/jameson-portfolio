import React from 'react';
import { Link } from 'react-router-dom';
import jamesonDP from "../assets/jameson-dp.jpg"
import youtubeIcon from "../assets/youtube-icon.svg"
import mtFuji from "../assets/mtFuji.jpg"
import ytThumbnail1 from "../assets/jameson-yt-thumbnail-3.jpg";

// Basic card components without context
const Card = ({ children, className }) => (
  <div className={`rounded-lg overflow-hidden bg-[#0D1117] ${className}`}>
    {children}
  </div>
);

const LinkCard = ({ to, children, className }) => (
  <Link to={to} className={`block rounded-lg overflow-hidden bg-[#0D1117] ${className}`}>
    {children}
  </Link>
);

const ExternalLinkCard = ({ href, children, className }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`block rounded-lg overflow-hidden bg-[#0D1117] ${className}`}
  >
    {children}
  </a>
);

const Home = () => {
  return (
    <main className="container mx-auto px-28 py-16">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-11 gap-8">

        {/* Intro Card */}
        <Card className="col-span-2 row-span-2 p-6 flex flex-col justify-center">
          <div className="mb-4 w-16 h-16 rounded-full overflow-hidden bg-yellow-100">
            {/* Placeholder for profile pic */}
            <img
                src={jamesonDP}
                alt="Jameson's handsome face" 
                className="w-full h-full flex items-center justify-center"
            />
          </div>
          <h1 className="text-2xl text-[#EFEBEB]">Hello I'm <span className="text-white">Jameson</span>, I see the world through my lens, and each photo is a piece of my journey.</h1>
        </Card>

        {/* Tokyo Card */}
        <LinkCard to="https://www.youtube.com/watch?v=l6WkY48htb4" className="col-span-1 row-span-2 border relative">
          <div className="aspect-square bg-gray-700 flex items-center justify-center">
            <img 
                src={ytThumbnail1}
                alt='Jameson & Tracy youtube thumbnail for tokyo trip'
                className="w-full h-full object-cover"
            />
          </div>
        </LinkCard>

        <ExternalLinkCard href="https://youtube.com/@jamesonandtracy" className="col-span-1 row-span-2 aspect-square flex items-center justify-center border p-4">
            <div className="aspect-square flex items-center justify-center">
                <img 
                    src={youtubeIcon}
                    alt='Jameson & Tracy youtube thumbnail for tokyo trip'   
                />
            </div>
        </ExternalLinkCard>

        {/* Mt Fuji Card */}
        <LinkCard to="https://www.youtube.com/watch?v=l6WkY48htb4" className="col-span-1 row-span-3 border relative">
          <div className=" bg-gray-700 flex items-center justify-center">
            <img 
                src={mtFuji}
                alt='A nice shot of Mount Fuji'
                className="w-full h-full object-cover"
            />
          </div>
        </LinkCard>

      </div>
    </main>
  );
};

export default Home;