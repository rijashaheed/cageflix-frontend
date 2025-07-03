import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-8 mt-10 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Cageflix. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition duration-200">Privacy</a>
          <a href="#" className="hover:text-white transition duration-200">Terms</a>
          <a href="#" className="hover:text-white transition duration-200">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
