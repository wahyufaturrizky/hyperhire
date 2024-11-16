'use client';
import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  position?: 'bottom-center' | 'bottom-right' | 'bottom-left' | 'top-center' | 'top-right' | 'top-left';
  delay?: number;
  children: React.ReactNode;
  marginClass?: string;
  layOutClassName?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'bottom-center',
  delay = 300,
  children,
  marginClass,
  layOutClassName,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className={`relative inline-block ${layOutClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        className={`w-max absolute z-10 p-2 text-gray-800 bg-white border rounded-lg transform transition-opacity duration-200 text-sky-400 font-bold opacity-0 ${
          showTooltip ? 'opacity-100' : 'opacity-0'
        } ${getPositionClasses(position, marginClass)}`}>
        {content}
        <div className={`absolute w-3 h-3 bg-white transform rotate-45 ${getArrowPositionClasses(position)}`} />
      </div>

      {children}
    </div>
  );
};

function getPositionClasses(position: string, marginClass?: string) {
  switch (position) {
    case 'top-right':
      return 'bottom-full right-0 mb-2';
    case 'top-left':
      return 'bottom-full left-0 mb-2';
    case 'top-center':
      return `bottom-full left-1/2 transform -translate-x-1/2 ${marginClass ? marginClass : 'mb-2'}`;
    case 'bottom-right':
      return 'top-full left-0 mt-2';
    case 'bottom-left':
      return 'top-full right-0 mt-2';
    case 'bottom-center':
    default:
      return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
  }
}

function getArrowPositionClasses(position: string) {
  switch (position) {
    case 'top-right':
      return '-bottom-1 right-3';
    case 'top-left':
      return '-bottom-1 left-3';
    case 'top-center':
      return '-bottom-1 left-1/2 transform -translate-x-1/2';
    case 'bottom-right':
      return '-top-1 left-3';
    case 'bottom-left':
      return '-top-1 right-3';
    case 'bottom-center':
    default:
      return '-top-1 left-1/2 transform -translate-x-1/2';
  }
}

export default Tooltip;
