'use client';

import React, { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: string;
}

interface BarWithUnderlineProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className?: string;
}

const BarWithUnderline: React.FC<BarWithUnderlineProps> = ({
  tabs,
  defaultActiveTab,
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={`nav-tabs bar-tabs ${className}`}>
      <ul className="w-full overflow-hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow nav dark:divide-gray-900 sm:flex">
        {tabs.map((tab, index) => (
          <li key={tab.id} className="w-full">
            <button
              onClick={() => handleTabClick(tab.id)}
              className={`inline-block w-full p-4 transition-colors duration-200 ${
                index === 0 
                  ? 'ltr:rounded-l-lg rtl:rounded-r-lg' 
                  : index === tabs.length - 1 
                    ? 'ltr:rounded-r-lg rtl:rounded-l-lg' 
                    : 'border-x border-gray-50 dark:border-gray-700'
              } ${
                activeTab === tab.id
                  ? 'active bg-violet-500 text-white border-b-2 border-violet-500'
                  : 'hover:text-gray-700 hover:bg-gray-50/50 dark:hover:text-gray-200 dark:hover:bg-gray-700/50'
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5 tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            <p className="mb-0 dark:text-gray-300 text-gray-700">
              {tab.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarWithUnderline;
