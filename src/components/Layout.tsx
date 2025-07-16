'use client';

import React from 'react';
import { Sidebar } from '@/components';
import TopNav from './TopNav';
import Footer from './Footer';
import { useLayoutState } from '@/hooks/useLayoutState';
import { clsx } from 'clsx';

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    className = ""
}) => {
    const { layoutState, toggleSidebar } = useLayoutState();

    return (
        <div className={`min-h-screen bg-gray-50 dark:bg-zinc-700 group ${className}`} data-mode={layoutState.mode} data-sidebar-size={layoutState.sidebarSize}>
            {/* Top Navigation */}
            <TopNav onMenuToggle={toggleSidebar} />

            {/* Sidebar */}
            <Sidebar
                isCollapsed={layoutState.sidebarSize === 'sm'}
                className={`transition-all duration-300`}
            />

            {/* Main Content */}
            <div
                className={clsx(
                    "main-content transition-[margin] duration-300 bg-red-100",
                    layoutState.sidebarSize === "sm" ? "!ml-[70px]" : "!ml-[250px]"
                )}
            >
                <div className="min-h-screen page-content dark:bg-zinc-700 relative">
                    <div className="container-fluid px-[0.625rem] pb-20">
                        {children}
                    </div>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>

            {/* RTL/LTR Toggle Button */}
            {/* <div className="fixed z-40 flex flex-col gap-3 ltr:right-5 rtl:left-5 bottom-10">
                <button
                    className="px-3.5 py-4 z-40 text-14 transition-all duration-300 ease-linear text-white bg-violet-500 hover:bg-violet-600 rounded-full font-medium"
                    onClick={toggleDirection}
                    id="ltr-rtl"
                >
                    <span className="ltr:hidden">LTR</span>
                    <span className="rtl:hidden">RTL</span>
                </button>
            </div> */}
        </div>
    );
};

export default Layout;
