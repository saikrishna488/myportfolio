import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-6 md:p-10">
      <a 
        href="#contact" 
        className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-gray-800 transition-all active:scale-95"
      >
        Contact
      </a>
    </nav>
  );
};

export default Header;