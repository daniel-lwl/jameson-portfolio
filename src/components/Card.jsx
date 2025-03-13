import React from 'react';
import { Link } from 'react-router-dom';

// Base Card component
export const Card = ({ children, className }) => (
  <div className={`rounded-4xl overflow-hidden bg-[#0D1117] ${className}`}>
    {children}
  </div>
);

// Link Card component (for internal routing)
export const LinkCard = ({ to, children, className }) => (
  <Link to={to} className={`block rounded-4xl overflow-hidden bg-[#0D1117] ${className}`}>
    {children}
  </Link>
);

// External Link Card component (for external sites)
export const ExternalLinkCard = ({ href, children, className }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`block rounded-4xl overflow-hidden bg-[#0D1117] ${className}`}
  >
    {children}
  </a>
);