'use client';

import React, { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: string | React.ReactNode;
}

interface TabsInPillsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
}

export const TabsInPills: React.FC<TabsInPillsProps> = ({ 
  tabs, 
  defaultActiveTab 
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="nav-tabs tab-pill">
      {/* Pills Navigation */}
      <ul className="flex flex-wrap w-full text-sm font-medium text-center text-gray-500 nav">
        {tabs.map((tab) => (
          <li key={tab.id} className="mr-2">
            <button
              onClick={() => handleTabClick(tab.id)}
              className={`inline-block px-4 py-3 rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-violet-500 text-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="mt-5 tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {typeof tab.content === 'string' ? (
              <p className="mb-0 dark:text-gray-300 text-gray-700">
                {tab.content}
              </p>
            ) : (
              <div className="mb-0 dark:text-gray-300 text-gray-700">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
