'use client';

import React from 'react';
import { Layout, PageHeader } from '@/components';

export default function StarterPage() {
  const breadcrumbs = [
    { label: 'Pages', href: '#' },
    { label: 'Starter Page', active: true }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Starter Page" 
        breadcrumbs={breadcrumbs}
      />
      
      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6">
        <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
          <h5 className="mb-4 text-16 font-medium text-gray-700 dark:text-gray-100">
            Welcome to the Starter Page
          </h5>
          <p className="text-gray-600 dark:text-gray-300">
            This is a starter page template. You can use this as a base for creating new pages in your admin dashboard.
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="p-4 border rounded-lg border-gray-200 dark:border-zinc-600">
              <h6 className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                Getting Started
              </h6>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Replace this content with your own components and functionality.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg border-gray-200 dark:border-zinc-600">
              <h6 className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                Components Available
              </h6>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                <li>Sidebar with navigation</li>
                <li>Top navigation bar</li>
                <li>Page header with breadcrumbs</li>
                <li>Footer component</li>
                <li>Layout wrapper</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg border-gray-200 dark:border-zinc-600">
              <h6 className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                Features
              </h6>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                <li>Dark mode support</li>
                <li>RTL support</li>
                <li>Responsive design</li>
                <li>TypeScript support</li>
                <li>Tailwind CSS styling</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 text-white bg-violet-500 rounded hover:bg-violet-600 transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors dark:bg-zinc-600 dark:text-gray-200 dark:hover:bg-zinc-500">
              Secondary Button
            </button>
          </div>
        </div>
        
        {/* Additional Content Card */}
        <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
          <h5 className="mb-4 text-16 font-medium text-gray-700 dark:text-gray-100">
            Additional Content
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded dark:bg-zinc-700">
              <h6 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                Card 1
              </h6>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Sample card content for demonstration.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded dark:bg-zinc-700">
              <h6 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                Card 2
              </h6>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Another sample card with placeholder content.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded dark:bg-zinc-700">
              <h6 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                Card 3
              </h6>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Third card to complete the grid layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
