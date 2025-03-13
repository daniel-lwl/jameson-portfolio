// components/Footer.jsx
import React from 'react';
import { Card } from './Card'; // You'll need to import Card component

// Import social media icons
import youtubeIcon from "../assets/youtube-icon.svg";
import threadsIcon from "../assets/threads-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import whatsappIcon from "../assets/whatsapp-icon.svg";
import emailIcon from "../assets/email-icon.svg";

const Footer = () => {
  const socialLinks = [
    { name: 'YouTube', href: 'https://youtube.com/@jamesonandtracy', icon: youtubeIcon },
    { name: 'Instagram', href: 'https://instagram.com/yourusername', icon: instagramIcon },
    { name: 'Threads', href: 'https://threads.net/yourusername', icon: threadsIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: linkedinIcon },
    { name: 'WhatsApp', href: 'https://wa.me/yournumber', icon: whatsappIcon },
    { name: 'Email', href: 'mailto:your@email.com', icon: emailIcon }
  ];

  return (
    <Card className="col-span-4 p-8 flex flex-col items-center justify-center space-y-2 border-2 border-gray-700">
      <h2 className="text-2xl font-medium text-white">Jameson Teh</h2>
      <p className="text-sm text-gray-400">@ Jameson Teh 2025. All rights reserved.</p>
      <div className="flex space-x-4 mt-4">
        {socialLinks.map((social, i) => (
          <a 
            key={i} 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full  flex items-center justify-center p-1 m-4 hover:bg-white transition-colors duration-200"
            aria-label={social.name}
          >
            <img 
              src={social.icon} 
              alt={`${social.name} icon`} 
              className="w-full h-full"
            />
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Footer;