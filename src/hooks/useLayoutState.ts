import { useState, useEffect } from 'react';

interface LayoutState {
  sidebarSize: 'sm' | 'md' | 'lg';
  mode: 'light' | 'dark';
  direction: 'ltr' | 'rtl';
  sidebarEnabled: boolean;
}

export const useLayoutState = () => {
  const [layoutState, setLayoutState] = useState<LayoutState>({
    sidebarSize: 'lg',
    mode: 'light',
    direction: 'ltr',
    sidebarEnabled: false
  });

  // Initialize layout state from sessionStorage and body attributes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get initial values from body attributes
      const bodyMode = document.body.getAttribute('data-mode') || 'light';
      const bodySidebarSize = document.body.getAttribute('data-sidebar-size') || 'lg';
      const bodyDirection = document.documentElement.getAttribute('dir') || 'ltr';
      
      // Get from sessionStorage if available
      const storedMode = sessionStorage.getItem('data-layout-mode') || bodyMode;
      
      // Auto-resize for medium screens
      let initialSidebarSize = bodySidebarSize;
      if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
        initialSidebarSize = 'sm';
      }
      
      setLayoutState({
        sidebarSize: initialSidebarSize as 'sm' | 'md' | 'lg',
        mode: storedMode as 'light' | 'dark',
        direction: bodyDirection as 'ltr' | 'rtl',
        sidebarEnabled: document.body.classList.contains('sidebar-enable')
      });

      // Apply initial state to DOM
      document.body.setAttribute('data-mode', storedMode);
      document.body.setAttribute('data-sidebar-size', initialSidebarSize);
      document.documentElement.setAttribute('dir', bodyDirection);
      document.body.classList.add('group');
      
      // Add or remove dark class
      if (storedMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Update DOM when state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-mode', layoutState.mode);
      document.body.setAttribute('data-sidebar-size', layoutState.sidebarSize);
      document.documentElement.setAttribute('dir', layoutState.direction);
      
      if (layoutState.sidebarEnabled) {
        document.body.classList.add('sidebar-enable');
      } else {
        document.body.classList.remove('sidebar-enable');
      }

      // Always add group class to body
      document.body.classList.add('group');

      // Handle dark mode
      if (layoutState.mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Store mode in sessionStorage
      sessionStorage.setItem('data-layout-mode', layoutState.mode);
    }
  }, [layoutState]);

  const toggleSidebar = () => {
    setLayoutState(prev => {
      const newSidebarEnabled = !prev.sidebarEnabled;
      let newSidebarSize = prev.sidebarSize;

      if (typeof window !== 'undefined' && window.innerWidth >= 992) {
        // Desktop behavior - toggle between sizes
        if (prev.sidebarSize === 'lg') {
          newSidebarSize = 'sm';
        } else if (prev.sidebarSize === 'sm') {
          newSidebarSize = 'lg';
        } else if (prev.sidebarSize === 'md') {
          newSidebarSize = prev.sidebarSize === 'md' ? 'sm' : 'md';
        }
      }

      return {
        ...prev,
        sidebarEnabled: newSidebarEnabled,
        sidebarSize: newSidebarSize
      };
    });
  };

  const toggleMode = () => {
    setLayoutState(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light'
    }));
  };

  const toggleDirection = () => {
    setLayoutState(prev => ({
      ...prev,
      direction: prev.direction === 'ltr' ? 'rtl' : 'ltr'
    }));
  };

  const setSidebarSize = (size: 'sm' | 'md' | 'lg') => {
    setLayoutState(prev => ({
      ...prev,
      sidebarSize: size
    }));
  };

  // Auto-resize sidebar for medium screens
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
          setSidebarSize('sm');
        }
      };

      // Check on mount
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return {
    layoutState,
    toggleSidebar,
    toggleMode,
    toggleDirection,
    setSidebarSize
  };
};
