import { NavigationItem } from '@/types/navigation';

export const defaultNavigationItems: NavigationItem[] = [
  {
    id: 'transactions',
    label: 'Transactions',
    icon: 'DollarSign',
    href: '/transactions',
  },
  {
    id: 'operating-expenses',
    label: 'Operating expenses',
    icon: 'FileText',
    href: '/operating-expenses',
  },
  {
    id: 'report-calendar',
    label: 'Report Calendar',
    icon: 'Calendar',
    href: '/report-calendar',
  },
  {
    id: 'project-management',
    label: 'Project management',
    icon: 'Slack',
    href: '/project-management',
  },
  {
    id: 'project',
    label: 'Project',
    icon: 'Cpu',
    href: '/project',
  },
  {
    id: 'composition',
    label: 'Composition',
    icon: 'Box',
    href: '/composition',
  },
  {
    id: 'suppliers',
    label: 'Suppliers',
    icon: 'Package',
    href: '/suppliers',
  },
  {
    id: 'workers',
    label: 'Workers',
    icon: 'Briefcase',
    href: '/workers',
  }
  // {
  //   id: 'apps',
  //   label: 'Apps',
  //   icon: 'Grid',
  //   children: [
  //     {
  //       id: 'calendar',
  //       label: 'Calendar',
  //       href: '/apps/calendar'
  //     },
  //     {
  //       id: 'chat',
  //       label: 'Chat',
  //       href: '/apps/chat'
  //     },
  //     {
  //       id: 'email',
  //       label: 'Email',
  //       children: [
  //         {
  //           id: 'inbox',
  //           label: 'Inbox',
  //           href: '/apps/email/inbox'
  //         },
  //         {
  //           id: 'read-email',
  //           label: 'Read Email',
  //           href: '/apps/email/read'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'invoices',
  //       label: 'Invoices',
  //       children: [
  //         {
  //           id: 'invoice-list',
  //           label: 'Invoice List',
  //           href: '/apps/invoices'
  //         },
  //         {
  //           id: 'invoice-detail',
  //           label: 'Invoice Detail',
  //           href: '/apps/invoices/detail'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'contacts',
  //       label: 'Contacts',
  //       children: [
  //         {
  //           id: 'user-grid',
  //           label: 'User Grid',
  //           href: '/apps/contacts/grid'
  //         },
  //         {
  //           id: 'user-list',
  //           label: 'User List',
  //           href: '/apps/contacts/list'
  //         },
  //         {
  //           id: 'profile',
  //           label: 'Profile',
  //           href: '/apps/contacts/profile'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'blog',
  //       label: 'Blog',
  //       badge: {
  //         text: 'New',
  //         className: 'px-2 py-0.5 font-medium text-red-400 rounded-full bg-red-50 text-10'
  //       },
  //       children: [
  //         {
  //           id: 'blog-grid',
  //           label: 'Blog Grid',
  //           href: '/apps/blog/grid'
  //         },
  //         {
  //           id: 'blog-list',
  //           label: 'Blog List',
  //           href: '/apps/blog/list'
  //         },
  //         {
  //           id: 'blog-detail',
  //           label: 'Blog Details',
  //           href: '/apps/blog/detail'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'authentication',
  //   label: 'Authentication',
  //   icon: 'Users',
  //   children: [
  //     {
  //       id: 'login',
  //       label: 'Login',
  //       href: '/auth/login'
  //     },
  //     {
  //       id: 'register',
  //       label: 'Register',
  //       href: '/auth/register'
  //     },
  //     {
  //       id: 'recover-password',
  //       label: 'Recover Password',
  //       href: '/auth/recover-password'
  //     },
  //     {
  //       id: 'lock-screen',
  //       label: 'Lock Screen',
  //       href: '/auth/lock-screen'
  //     },
  //     {
  //       id: 'logout',
  //       label: 'Log Out',
  //       href: '/auth/logout'
  //     },
  //     {
  //       id: 'confirm-mail',
  //       label: 'Confirm Mail',
  //       href: '/auth/confirm-mail'
  //     },
  //     {
  //       id: 'email-verification',
  //       label: 'Email Verification',
  //       href: '/auth/email-verification'
  //     },
  //     {
  //       id: 'two-step-verification',
  //       label: 'Two Step Verification',
  //       href: '/auth/two-step-verification'
  //     }
  //   ]
  // },
  // {
  //   id: 'pages',
  //   label: 'Pages',
  //   icon: 'FileText',
  //   children: [
  //     {
  //       id: 'starter',
  //       label: 'Starter Page',
  //       href: '/pages/starter'
  //     },
  //     {
  //       id: 'maintenance',
  //       label: 'Maintenance',
  //       href: '/pages/maintenance'
  //     },
  //     {
  //       id: 'coming-soon',
  //       label: 'Coming Soon',
  //       href: '/pages/coming-soon'
  //     },
  //     {
  //       id: 'timeline',
  //       label: 'Timeline',
  //       href: '/pages/timeline'
  //     },
  //     {
  //       id: 'faqs',
  //       label: 'FAQs',
  //       href: '/pages/faqs'
  //     },
  //     {
  //       id: 'pricing',
  //       label: 'Pricing',
  //       href: '/pages/pricing'
  //     },
  //     {
  //       id: 'error-404',
  //       label: 'Error 404',
  //       href: '/pages/404'
  //     },
  //     {
  //       id: 'error-500',
  //       label: 'Error 500',
  //       href: '/pages/500'
  //     }
  //   ]
  // },
  // {
  //   id: 'components',
  //   label: 'Components',
  //   icon: 'Package',
  //   children: [
  //     {
  //       id: 'alerts',
  //       label: 'Alerts',
  //       href: '/components/alerts'
  //     },
  //     {
  //       id: 'buttons',
  //       label: 'Buttons',
  //       href: '/components/buttons'
  //     },
  //     {
  //       id: 'cards',
  //       label: 'Cards',
  //       href: '/components/cards'
  //     },
  //     {
  //       id: 'dropdown',
  //       label: 'Dropdown',
  //       href: '/components/dropdown'
  //     },
  //     {
  //       id: 'flexbox-grid',
  //       label: 'Flexbox & Grid',
  //       href: '/components/flexbox-grid'
  //     },
  //     {
  //       id: 'sizing',
  //       label: 'Sizing',
  //       href: '/components/sizing'
  //     },
  //     {
  //       id: 'avatars',
  //       label: 'Avatar',
  //       href: '/components/avatars'
  //     },
  //     {
  //       id: 'modals',
  //       label: 'Modals',
  //       href: '/components/modals'
  //     },
  //     {
  //       id: 'progress',
  //       label: 'Progress',
  //       href: '/components/progress'
  //     },
  //     {
  //       id: 'tabs-accordions',
  //       label: 'Tabs & Accordions',
  //       href: '/components/tabs-accordions'
  //     },
  //     {
  //       id: 'typography',
  //       label: 'Typography',
  //       href: '/components/typography'
  //     },
  //     {
  //       id: 'toasts',
  //       label: 'Toasts',
  //       href: '/components/toasts'
  //     },
  //     {
  //       id: 'general',
  //       label: 'General',
  //       href: '/components/general'
  //     },
  //     {
  //       id: 'colors',
  //       label: 'Colors',
  //       href: '/components/colors'
  //     },
  //     {
  //       id: 'utilities',
  //       label: 'Utilities',
  //       href: '/components/utilities'
  //     }
  //   ]
  // },
  // {
  //   id: 'extended',
  //   label: 'Extended',
  //   icon: 'Gift',
  //   children: [
  //     {
  //       id: 'lightbox',
  //       label: 'Lightbox',
  //       href: '/extended/lightbox'
  //     },
  //     {
  //       id: 'rangeslider',
  //       label: 'Rangeslider',
  //       href: '/extended/rangeslider'
  //     },
  //     {
  //       id: 'sweet-alert',
  //       label: 'SweetAlert 2',
  //       href: '/extended/sweet-alert'
  //     },
  //     {
  //       id: 'rating',
  //       label: 'Rating',
  //       href: '/extended/rating'
  //     },
  //     {
  //       id: 'notifications',
  //       label: 'Notifications',
  //       href: '/extended/notifications'
  //     }
  //   ]
  // },
  // {
  //   id: 'forms',
  //   label: 'Forms',
  //   icon: 'Edit',
  //   badge: {
  //     text: '7',
  //     className: 'badge bg-red-50 dark:bg-red-500/10 text-danger ltr:float-right rtl:float-left z-50 px-1.5 rounded-full text-11 text-red-500'
  //   },
  //   children: [
  //     {
  //       id: 'form-elements',
  //       label: 'Basic Elements',
  //       href: '/forms/elements'
  //     },
  //     {
  //       id: 'form-validation',
  //       label: 'Validation',
  //       href: '/forms/validation'
  //     },
  //     {
  //       id: 'form-advanced',
  //       label: 'Advanced',
  //       href: '/forms/advanced'
  //     },
  //     {
  //       id: 'form-editors',
  //       label: 'Editors',
  //       href: '/forms/editors'
  //     },
  //     {
  //       id: 'file-uploads',
  //       label: 'File Upload',
  //       href: '/forms/file-uploads'
  //     },
  //     {
  //       id: 'form-wizard',
  //       label: 'Wizard',
  //       href: '/forms/wizard'
  //     },
  //     {
  //       id: 'form-mask',
  //       label: 'Mask',
  //       href: '/forms/mask'
  //     }
  //   ]
  // },
  // {
  //   id: 'tables',
  //   label: 'Tables',
  //   icon: 'Table',
  //   children: [
  //     {
  //       id: 'tables-basic',
  //       label: 'Basic Elements',
  //       href: '/tables/basic'
  //     },
  //     {
  //       id: 'tables-datatable',
  //       label: 'DataTables',
  //       href: '/tables/datatable'
  //     },
  //     {
  //       id: 'tables-responsive',
  //       label: 'Responsive',
  //       href: '/tables/responsive'
  //     },
  //     {
  //       id: 'tables-editable',
  //       label: 'Editable',
  //       href: '/tables/editable'
  //     }
  //   ]
  // },
  // {
  //   id: 'charts',
  //   label: 'Charts',
  //   icon: 'PieChart',
  //   children: [
  //     {
  //       id: 'charts-apex',
  //       label: 'Apexcharts',
  //       href: '/charts/apex'
  //     },
  //     {
  //       id: 'charts-echart',
  //       label: 'Echarts',
  //       href: '/charts/echart'
  //     },
  //     {
  //       id: 'charts-chartjs',
  //       label: 'Chartjs',
  //       href: '/charts/chartjs'
  //     },
  //     {
  //       id: 'charts-knob',
  //       label: 'Jquery Knob',
  //       href: '/charts/knob'
  //     },
  //     {
  //       id: 'charts-sparkline',
  //       label: 'Sparkline Chart',
  //       href: '/charts/sparkline'
  //     }
  //   ]
  // },
  // {
  //   id: 'icons',
  //   label: 'Icons',
  //   icon: 'Star',
  //   children: [
  //     {
  //       id: 'icons-boxicons',
  //       label: 'Boxicons',
  //       href: '/icons/boxicons'
  //     },
  //     {
  //       id: 'icons-materialdesign',
  //       label: 'Material Design',
  //       href: '/icons/materialdesign'
  //     },
  //     {
  //       id: 'icons-dripicons',
  //       label: 'Dripicons',
  //       href: '/icons/dripicons'
  //     }
  //   ]
  // },
  // {
  //   id: 'maps',
  //   label: 'Maps',
  //   icon: 'Map',
  //   children: [
  //     {
  //       id: 'maps-google',
  //       label: 'Google',
  //       href: '/maps/google'
  //     },
  //     {
  //       id: 'maps-vector',
  //       label: 'Vector',
  //       href: '/maps/vector'
  //     },
  //     {
  //       id: 'maps-leaflet',
  //       label: 'Leaflet',
  //       href: '/maps/leaflet'
  //     }
  //   ]
  // },
  // {
  //   id: 'multi-level',
  //   label: 'Multi Level',
  //   icon: 'Share2',
  //   children: [
  //     {
  //       id: 'level-1-1',
  //       label: 'Level 1.1',
  //       href: '/level/1-1'
  //     },
  //     {
  //       id: 'level-1-2',
  //       label: 'Level 1.2',
  //       children: [
  //         {
  //           id: 'level-2-1',
  //           label: 'Level 2.1',
  //           href: '/level/2-1'
  //         },
  //         {
  //           id: 'level-2-2',
  //           label: 'Level 2.2',
  //           href: '/level/2-2'
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export const menuCategories = [
  {
    id: 'financial-department',
    label: 'FINANCIAL DEPARTMENT',
    items: ['transactions', 'operating-expenses', 'report-calendar']
  },
  {
    id: 'technical-department',
    label: 'TECHNICAL DEPARTMENT',
    items: ['project-management', 'project', 'composition', 'suppliers', 'workers']
  }
];
