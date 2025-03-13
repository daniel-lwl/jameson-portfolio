import React from 'react';
import { Card } from './Card';
import jamesonDP from "../assets/jameson-dp.jpg";

const IntroCard = ({ className }) => (
  <Card className={`col-span-2 row-span-2 p-6 flex flex-col justify-center border ${className}`}>
    <div className="mb-4 w-16 h-16 rounded-full overflow-hidden bg-yellow-100">
      <img
        src={jamesonDP}
        alt="Jameson's handsome face" 
        className="w-full h-full flex items-center justify-center"
      />
    </div>
    <h1 className="text-2xl text-[#EFEBEB]">Hello I'm <span className="text-white">Jameson</span>, I see the world through my lens, and each photo is a piece of my journey.</h1>
  </Card>
);

export default IntroCard;