'use client';

import React from 'react';
import Image from 'next/image';

interface SidebarPromoProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  className?: string;
}

const SidebarPromo: React.FC<SidebarPromoProps> = ({
  title = "Unlimited Access",
  description = "Upgrade your plan from a Free trial, to select 'Business Plan'.",
  buttonText = "Upgrade Now",
  buttonLink = "#!",
  imageUrl = "data:image/png;base64,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",
  className = ""
}) => {
  return (
    <div className={`mx-6 my-12 text-center sidebar-alert transition-all duration-300 ease-in-out group-data-[sidebar-size=sm]:opacity-0 group-data-[sidebar-size=sm]:scale-75 group-data-[sidebar-size=sm]:pointer-events-none ${className}`}>
      <div className="rounded card-body bg-primary bg-violet-50/50 dark:bg-zinc-700/60">
        <Image 
          src={imageUrl} 
          alt="Promo image" 
          width={94}
          height={65}
          className="block mx-auto"
        />
        <div className="mt-4">
          <h5 className="mb-3 text-16 font-medium text-violet-500">
            {title}
          </h5>
          <p className="text-slate-600 text-13 dark:text-gray-50">
            {description}
          </p>
          <a 
            href={buttonLink} 
            className="mt-6 text-white border-transparent btn bg-violet-500"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarPromo;
