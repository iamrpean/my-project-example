'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import * as FeatherIcons from 'react-feather';
import { useLayoutState } from '@/hooks/useLayoutState';

interface TopNavProps {
  onMenuToggle?: () => void;
  className?: string;
}

const TopNav: React.FC<TopNavProps> = ({ 
  onMenuToggle,
  className = ""
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { toggleMode } = useLayoutState();

  const languages = [
    { code: 'en', name: 'English', flag: '/images/flags/us.jpg' },
    { code: 'id', name: 'Indonesia', flag: '/images/flags/indonesia.jpg' },
    { code: 'ru', name: 'Русский', flag: '/images/flags/russia.jpg' }
  ];

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    setIsLanguageOpen(false);
  };

  const handleProfileAction = (action: string) => {
    setIsProfileOpen(false);
    if (action === 'profile') {
      // Navigate to profile page or open profile modal
      console.log('Navigate to profile');
    } else if (action === 'settings') {
      // Navigate to settings page
      console.log('Navigate to settings');
    } else if (action === 'signout') {
      // Handle sign out logic
      console.log('Sign out user');
      // You can add actual sign out logic here, like:
      // - Clear user session
      // - Redirect to login page
      // - Show confirmation dialog
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 flex items-center bg-white dark:bg-zinc-800 print:hidden dark:border-zinc-700 ltr:pr-6 rtl:pl-6 ${className}`}>
      <div className="flex justify-between w-full">
        {/* Logo and Menu Toggle */}
        <div className="flex items-center topbar-brand">
          <div className="hidden lg:flex navbar-brand items-center justify-between shrink px-6 h-[70px] ltr:border-r rtl:border-l bg-[#fbfaff] border-gray-50 dark:border-zinc-700 dark:bg-zinc-800 shadow-none">
            <Link href="/" className="flex items-center text-lg flex-shrink-0 font-bold dark:text-white leading-[69px]">
              <span className="hidden font-bold text-gray-700 align-middle xl:block dark:text-gray-100 leading-[69px]">
                EURASTROY V1
              </span>
            </Link>
          </div>
          
          <button 
            type="button" 
            className="group-data-[sidebar-size=sm]:border-b border-b border-[#e9e9ef] dark:border-zinc-600 dark:lg:border-transparent lg:border-transparent group-data-[sidebar-size=sm]:border-[#e9e9ef] group-data-[sidebar-size=sm]:dark:border-zinc-600 text-gray-800 dark:text-white h-[70px] px-4 ltr:-ml-[52px] rtl:-mr-14 py-1 vertical-menu-btn text-16"
            onClick={onMenuToggle}
            id="vertical-menu-btn"
          >
            <FeatherIcons.Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-between w-full border-b border-[#e9e9ef] dark:border-zinc-600 ltr:pl-6 rtl:pr-6">
          {/* Logo */}
          <div className="flex items-center mr-4">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <form className="hidden app-search xl:block">
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full h-9 pl-4 pr-12 border border-gray-200 dark:border-zinc-600 rounded-md bg-[#f8f9fa] dark:bg-zinc-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-sm placeholder:text-sm dark:placeholder:text-gray-400 dark:text-gray-100 transition-colors" 
                  placeholder="Search..."
                />
                <button 
                  className="absolute right-1 top-1 w-7 h-7 flex items-center justify-center text-white bg-violet-500 rounded shadow hover:bg-violet-600 transition-colors" 
                  type="submit"
                >
                  <FeatherIcons.Search className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-1">
            {/* Mobile Search */}
            <div className="relative xl:hidden">
              <button 
                type="button" 
                className="flex items-center justify-center w-12 h-[70px] text-gray-600 dark:text-gray-100 hover:text-violet-500 transition-colors"
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setIsLanguageOpen(false);
                  setIsProfileOpen(false);
                }}
              >
                <FeatherIcons.Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute top-full right-0 z-50 mt-1 w-80 bg-white border rounded-lg shadow-lg border-gray-200 dark:bg-zinc-800 dark:border-zinc-600">
                  <form className="p-4">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        className="flex-1 h-9 px-3 border border-gray-200 dark:border-zinc-600 rounded-md bg-gray-50 dark:bg-zinc-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-sm dark:text-zinc-100 placeholder:text-gray-500 dark:placeholder:text-gray-400" 
                        placeholder="Search..." 
                        autoFocus
                      />
                      <button 
                        className="w-9 h-9 flex items-center justify-center text-white bg-violet-500 rounded-md hover:bg-violet-600 transition-colors" 
                        type="submit"
                      >
                        <FeatherIcons.Search className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Overlay to close search when clicking outside */}
              {isSearchOpen && (
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsSearchOpen(false)}
                />
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative hidden sm:block">
              <button 
                className="flex items-center justify-center w-12 h-[70px] hover:text-violet-500 transition-colors" 
                type="button"
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsSearchOpen(false);
                  setIsProfileOpen(false);
                }}
              >
                <img 
                  src={currentLanguage.flag} 
                  alt={currentLanguage.name} 
                  className="w-5 h-4 rounded shadow-sm" 
                />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 z-50 mt-1 w-48 bg-white border rounded-lg shadow-lg border-gray-200 dark:bg-zinc-800 dark:border-zinc-600">
                  <div className="py-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`w-full flex items-center px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors ${
                          selectedLanguage === language.code 
                            ? 'bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400' 
                            : 'text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        <img 
                          src={language.flag} 
                          alt={language.name}
                          className="w-5 h-4 rounded mr-3 shadow-sm" 
                        />
                        <span className="font-medium">{language.name}</span>
                        {selectedLanguage === language.code && (
                          <FeatherIcons.Check className="w-4 h-4 ml-auto text-violet-600 dark:text-violet-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Overlay to close dropdown when clicking outside */}
              {isLanguageOpen && (
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsLanguageOpen(false)}
                />
              )}
            </div>

            {/* Dark Mode Toggle */}
            <div className="hidden sm:block">
              <button 
                type="button" 
                className="flex items-center justify-center w-12 h-[70px] text-gray-600 dark:text-gray-100 hover:text-violet-500 transition-colors"
                onClick={toggleMode}
              >
                <FeatherIcons.Moon className="block w-5 h-5 dark:hidden" />
                <FeatherIcons.Sun className="hidden w-5 h-5 dark:block" />
              </button>
            </div>

            {/* Apps Grid */}
            <div className="relative hidden sm:block">
              <button 
                type="button" 
                className="flex items-center justify-center w-12 h-[70px] text-gray-600 dark:text-gray-100 hover:text-violet-500 transition-colors"
              >
                <FeatherIcons.Grid className="w-5 h-5" />
              </button>
            </div>

            {/* Notifications */}
            <div className="relative hidden sm:block">
              <button 
                type="button" 
                className="flex items-center justify-center w-12 h-[70px] text-gray-600 dark:text-gray-100 hover:text-violet-500 transition-colors"
              >
                <FeatherIcons.Bell className="w-5 h-5" />
                <span className="absolute top-4 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>

            {/* User Profile */}
            <div className="relative ml-2">
              <button 
                type="button" 
                className="flex items-center px-3 h-[70px] hover:bg-gray-50 dark:hover:bg-zinc-700 rounded-md transition-colors"
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setIsSearchOpen(false);
                  setIsLanguageOpen(false);
                }}
              >
                <img 
                  className="w-8 h-8 rounded-full ring-2 ring-gray-200 dark:ring-zinc-600" 
                  src="/images/users/avatar-1.jpg" 
                  alt="User"
                />
                <div className="ml-3 hidden lg:block text-left">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-100">
                    Alex Sanbaev
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Finance strategy
                  </div>
                </div>
                <FeatherIcons.ChevronDown className={`w-4 h-4 ml-2 text-gray-500 hidden lg:block transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute top-full right-0 z-50 mt-1 w-48 bg-white border rounded-lg shadow-lg border-gray-200 dark:bg-zinc-800 dark:border-zinc-600">
                  <div className="py-2">
                    {/* Profile Header */}
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-zinc-700">
                      <div className="flex items-center">
                        <img 
                          className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-zinc-600" 
                          src="/images/users/avatar-1.jpg" 
                          alt="User"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Alex Sanbaev</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Finance strategy</p>
                        </div>
                      </div>
                    </div>

                    {/* Profile Actions */}
                    <div className="py-1">
                      <button
                        onClick={() => handleProfileAction('profile')}
                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <FeatherIcons.User className="w-4 h-4 mr-3 text-gray-500" />
                        <span>Profile</span>
                      </button>
                      
                      <button
                        onClick={() => handleProfileAction('settings')}
                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <FeatherIcons.Settings className="w-4 h-4 mr-3 text-gray-500" />
                        <span>Settings</span>
                      </button>

                      <div className="border-t border-gray-100 dark:border-zinc-700 my-1"></div>
                      
                      <button
                        onClick={() => handleProfileAction('signout')}
                        className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      >
                        <FeatherIcons.LogOut className="w-4 h-4 mr-3" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Overlay to close dropdown when clicking outside */}
              {isProfileOpen && (
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsProfileOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
