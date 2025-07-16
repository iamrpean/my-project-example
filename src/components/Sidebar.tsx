'use client';

import React, { useEffect, useRef } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import NavigationItemComponent from './NavigationItem';
import SidebarPromo from './SidebarPromo';
import { SidebarProps } from '@/types/navigation';
import { defaultNavigationItems, menuCategories } from '@/constants/navigation';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC<SidebarProps> = ({
  navigationItems = defaultNavigationItems,
  className = "",
  isCollapsed = false,
  onItemClick
}) => {
  const pathname = usePathname();
  const scrollableNodeRef = useRef<any>(null);
  
  // Group navigation items by categories
  const groupedItems = menuCategories.map(category => ({
    ...category,
    items: navigationItems.filter(item => category.items.includes(item.id))
  }));

  // Auto-scroll to active menu item (similar to initMenuItemScroll in app.js)
  useEffect(() => {
    const timer = setTimeout(() => {
      const sidebarMenu = document.getElementById("side-menu");
      if (sidebarMenu && scrollableNodeRef.current) {
        const activeMenu = sidebarMenu.querySelector(".mm-active .active") as HTMLElement;
        const offset = activeMenu ? activeMenu.offsetTop : 0;
        
        if (offset > 300) {
          const scrollElement = scrollableNodeRef.current.getScrollElement();
          if (scrollElement) {
            setTimeout(() => {
              const scrollTop = offset === 330 ? offset + 85 : offset;
              scrollElement.scrollTop = scrollTop;
            }, 0);
          }
        }
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`fixed bottom-0 z-10 h-screen ltr:border-r rtl:border-l vertical-menu sidebar-animate rtl:right-0 ltr:left-0 top-[70px] bg-[#1E293B] border-gray-50 print:hidden dark:bg-zinc-800 dark:border-neutral-700 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[70px]' : 'w-64'} ${className}`}>
      <SimpleBar 
        ref={scrollableNodeRef}
        className="h-full sidebar-menu-scroll"
        autoHide={false}
        style={{ 
          height: '100%',
          maxHeight: 'calc(100vh - 70px)'
        }}
      >
        {/* Sidemenu */}
        <div className="metismenu pb-10 pt-2.5" id="sidebar-menu">
          {/* Left Menu Start */}
          <ul id="side-menu">
            {groupedItems.map((category, categoryIndex) => (
              <React.Fragment key={category.id}>
                {/* Category Label */}
                <li className={`px-5 py-3 text-xs font-medium text-gray-500 cursor-default leading-[18px] transition-all duration-300 ease-in-out ${isCollapsed ? 'opacity-0 transform -translate-x-2' : 'opacity-100 transform translate-x-0'} group-data-[sidebar-size=sm]:opacity-0 group-data-[sidebar-size=sm]:transform group-data-[sidebar-size=sm]:-translate-x-2 ${categoryIndex > 0 ? 'mt-2' : ''}`} data-key={`t-${category.id}`}>
                  {category.label}
                </li>
                
                {/* Category Items */}
                {category.items.map((item) => (
                  <NavigationItemComponent
                    key={item.id}
                    item={item}
                    onItemClick={onItemClick}
                  />
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
        {/* Sidebar */}
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
