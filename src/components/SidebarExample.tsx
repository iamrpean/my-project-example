'use client';

import React from 'react';
import { Sidebar } from '@/components';
import type { NavigationItem } from '@/types/navigation';

export default function ExamplePage() {
  // Custom navigation items example
  const customNavigationItems: NavigationItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'home',
      href: '/'
    },
    {
      id: 'users',
      label: 'Users',
      icon: 'users',
      children: [
        {
          id: 'user-list',
          label: 'User List',
          href: '/users'
        },
        {
          id: 'user-create',
          label: 'Create User',
          href: '/users/create'
        }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      href: '/settings'
    }
  ];

  const handleItemClick = (item: NavigationItem) => {
    console.log('Navigation item clicked:', item);
  };

  return (
    <div className="flex">
      {/* Sidebar with default navigation */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 ml-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Example Page with Sidebar</h1>
        <p className="text-gray-600">
          This is an example page showing how to use the reusable Sidebar component.
        </p>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Usage Examples:</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">1. Default Sidebar</h3>
              <pre className="text-sm text-gray-700">
{`<Sidebar />`}
              </pre>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">2. Custom Navigation Items</h3>
              <pre className="text-sm text-gray-700">
{`<Sidebar 
  navigationItems={customNavigationItems}
  onItemClick={handleItemClick}
/>`}
              </pre>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">3. With Custom Classes</h3>
              <pre className="text-sm text-gray-700">
{`<Sidebar 
  className="custom-sidebar"
  isCollapsed={false}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
