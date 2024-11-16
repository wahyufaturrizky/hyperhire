import React from 'react';

const HemMenu: React.FC = () => {
  return (
    <div className="block md:hidden">
      <span className={`block w-full w-6 h-1 my-1 bg-white transition-transform duration-300 `} />
      <span className={`block w-full w-6 h-1 my-1 bg-white transition-opacity duration-300  `} />
      <span className={`block w-full w-6 h-1 my-1 bg-white transition-transform duration-300  `} />
    </div>
  );
};

export default HemMenu;
