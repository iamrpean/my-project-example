'use client';

import React from 'react';
import Link from 'next/link';
import * as FeatherIcons from 'react-feather';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs = [],
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-1 pb-6 ${className}`}>
      <div className="px-[2px]">
        <h4 className="text-[18px] font-medium text-gray-800 mb-sm-0 grow dark:text-gray-100 mb-2">
          {title}
        </h4>
        
        {breadcrumbs.length > 0 && (
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 ltr:md:space-x-3 rtl:md:space-x-0">
              {breadcrumbs.map((item, index) => (
                <li key={index} className={index === 0 ? "inline-flex items-center" : ""}>
                  {index === 0 ? (
                    <Link 
                      href={item.href || '#'} 
                      className="inline-flex items-center text-sm text-gray-400 hover:text-gray-500 dark:text-zinc-400 dark:hover:text-zinc-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="flex items-center rtl:mr-2">
                      <FeatherIcons.ChevronRight className="font-semibold text-gray-400 align-middle text-13 rtl:rotate-180 dark:text-zinc-400 w-3 h-3" />
                      {item.active ? (
                        <span className="text-sm font-medium text-gray-400 ltr:ml-2 rtl:mr-2 ltr:md:ml-2 rtl:md:mr-2 dark:text-gray-400">
                          {item.label}
                        </span>
                      ) : (
                        <Link 
                          href={item.href || '#'} 
                          className="text-sm font-medium text-gray-400 ltr:ml-2 rtl:mr-2 hover:text-gray-500 ltr:md:ml-2 rtl:md:mr-2 dark:text-gray-400 dark:hover:text-zinc-300"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
