'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as FeatherIcons from 'react-feather';
import { NavigationItem } from '@/types/navigation';

interface NavigationItemProps {
  item: NavigationItem;
  level?: number;
  isActive?: boolean;
  onItemClick?: (item: NavigationItem) => void;
}

const NavigationItemComponent: React.FC<NavigationItemProps> = ({
  item,
  level = 0,
  onItemClick
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  
  const hasChildren = item.children && item.children.length > 0;
  const isCurrentPath = pathname === item.href;
  
  // Get the appropriate icon component with proper typing
  const IconComponent = item.icon ? (FeatherIcons as Record<string, React.ComponentType<{ className?: string; fill?: string }>>)[item.icon] : null;
  
  // Calculate padding based on level
  const getPaddingClass = () => {
    if (level === 0) return 'py-2.5 px-6';
    if (level === 1) return 'pl-[52.8px] pr-6 py-[6.4px]';
    return 'pl-14 pr-4 py-2';
  };
  
  const getFontSizeClass = () => {
    if (level === 0) return 'text-sm';
    if (level === 1) return 'text-[13.5px]';
    return 'text-[13px]';
  };

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
    
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const linkContent = (
    <>
      {IconComponent && level === 0 && (
        <IconComponent className="inline-block w-4 h-4 mr-2 transition-transform duration-300 ease-in-out group-data-[sidebar-size=sm]:scale-110" fill="#545a6d33" />
      )}
      <span 
        data-key={`t-${item.id}`}
        className="transition-all duration-300 ease-in-out group-data-[sidebar-size=sm]:opacity-0 group-data-[sidebar-size=sm]:transform group-data-[sidebar-size=sm]:-translate-x-2"
      >
        {item.label}
      </span>
      {item.badge && (
        <span className={`${item.badge.className} badge text-end transition-all duration-300 ease-in-out group-data-[sidebar-size=sm]:opacity-0 group-data-[sidebar-size=sm]:scale-50`}>
          {item.badge.text}
        </span>
      )}
    </>
  );

  const linkClasses = `
    relative block ${getPaddingClass()} ${getFontSizeClass()} font-medium text-gray-950 
    transition-all duration-150 ease-linear hover:text-violet-500 hover:transform hover:translate-x-1
    dark:text-gray-300 dark:active:text-white dark:hover:text-white
    ${hasChildren ? 'nav-menu' : ''}
    ${isCurrentPath ? 'text-violet-500 active' : ''}
    ${level > 0 && hasChildren ? 'flex items-center justify-between' : ''}
    overflow-hidden
  `;

  return (
    <li>
      {hasChildren ? (
        <a
          href="javascript:void(0);"
          className={linkClasses}
          onClick={handleClick}
          aria-expanded={isExpanded}
        >
          {linkContent}
        </a>
      ) : (
        <Link href={item.href || '#'} className={linkClasses} onClick={handleClick}>
          {linkContent}
        </Link>
      )}
      
      {hasChildren && (
        <ul className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          {item.children?.map((child) => (
            <NavigationItemComponent
              key={child.id}
              item={child}
              level={level + 1}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavigationItemComponent;
