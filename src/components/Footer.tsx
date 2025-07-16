'use client';

import React from 'react';

interface FooterProps {
  className?: string;
  companyName?: string;
  designedBy?: string;
  designedByUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  className = "",
  companyName = "EURASTROY",
  designedBy = "Themesbrand",
  designedByUrl = "#"
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`absolute bottom-0 left-0 right-0 px-5 py-5 bg-white border-t footer border-gray-50 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-200 ${className}`}>
      <div className="grid grid-cols-2 text-gray-500 dark:text-zinc-100">
        <div className="grow">
          &copy; {currentYear} {companyName}
        </div>
        {/* <div className="hidden md:inline-block text-end">
          Design & Develop by{' '}
          <a href={designedByUrl} className="underline text-violet-500">
            {designedBy}
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
