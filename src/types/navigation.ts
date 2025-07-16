export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  badge?: {
    text: string;
    className: string;
  };
  children?: NavigationItem[];
}

export interface SidebarProps {
  navigationItems?: NavigationItem[];
  className?: string;
  isCollapsed?: boolean;
  onItemClick?: (item: NavigationItem) => void;
}
