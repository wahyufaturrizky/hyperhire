import React from 'react';
import heroStyles from '../../styles/home/hero.module.css';
interface OverlayProps {
  isVisible?: boolean; // Controls the visibility of the overlay
  className?: string; // Optional custom class names for styling
}

const Overlay: React.FC<OverlayProps> = ({ isVisible = true, className = '' }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full my-gradient ${heroStyles.heroOverLay} z-10 ${isVisible ? 'block' : 'hidden'} ${className}`}
      aria-hidden={!isVisible}
    />
  );
};

export default Overlay;
