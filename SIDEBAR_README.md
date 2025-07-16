# Admin Dashboard Sidebar Component

Komponen Sidebar yang reusable dan mendukung Next.js dengan TypeScript.

## Fitur

- ✅ Kompatibel dengan Next.js 15
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Multi-level navigation
- ✅ Icon support (React Feather)
- ✅ Badge/Label support
- ✅ Customizable navigation items
- ✅ Active link detection
- ✅ Collapsible menu items

## Instalasi Dependencies

Pastikan Anda sudah menginstall dependencies yang diperlukan:

```bash
npm install react-feather
# atau
yarn add react-feather
# atau
pnpm add react-feather
```

## Struktur File

```
src/
├── components/
│   ├── Sidebar.tsx              # Komponen utama sidebar
│   ├── NavigationItem.tsx       # Komponen item navigasi
│   ├── SidebarPromo.tsx        # Komponen promosi di sidebar
│   ├── SidebarExample.tsx      # Contoh penggunaan
│   └── index.ts                # Export semua komponen
├── types/
│   └── navigation.ts           # Type definitions
└── constants/
    └── navigation.ts           # Default navigation items
```

## Penggunaan

### 1. Penggunaan Dasar

```tsx
import { Sidebar } from '@/components';

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-6">
        {/* Konten utama */}
      </main>
    </div>
  );
}
```

### 2. Custom Navigation Items

```tsx
import { Sidebar } from '@/components';
import type { NavigationItem } from '@/types/navigation';

const customNavItems: NavigationItem[] = [
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
  }
];

export default function CustomLayout() {
  const handleItemClick = (item: NavigationItem) => {
    console.log('Item clicked:', item);
  };

  return (
    <div className="flex">
      <Sidebar 
        navigationItems={customNavItems}
        onItemClick={handleItemClick}
      />
      <main className="flex-1 ml-64 p-6">
        {/* Konten utama */}
      </main>
    </div>
  );
}
```

### 3. Dengan Badge/Label

```tsx
const navItemsWithBadge: NavigationItem[] = [
  {
    id: 'messages',
    label: 'Messages',
    icon: 'mail',
    href: '/messages',
    badge: {
      text: '5',
      className: 'px-2 py-0.5 bg-red-500 text-white rounded-full text-xs'
    }
  }
];
```

## Props

### Sidebar Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `navigationItems` | `NavigationItem[]` | `defaultNavigationItems` | Array item navigasi |
| `className` | `string` | `""` | CSS class tambahan |
| `isCollapsed` | `boolean` | `false` | Status collapsed sidebar |
| `onItemClick` | `(item: NavigationItem) => void` | `undefined` | Callback ketika item diklik |

### NavigationItem Interface

```tsx
interface NavigationItem {
  id: string;              // ID unik
  label: string;           // Label yang ditampilkan
  icon?: string;           // Nama icon dari react-feather
  href?: string;           // URL tujuan
  badge?: {                // Badge/label
    text: string;
    className: string;
  };
  children?: NavigationItem[]; // Sub-menu
}
```

## Icon Support

Komponen menggunakan React Feather icons. Contoh icon yang tersedia:
- `home`
- `grid`
- `users`
- `briefcase`
- `gift`
- `box`
- `sliders`
- `pie-chart`
- `cpu`
- `map`
- `share-2`

Lihat [React Feather](https://github.com/feathericons/react-feather) untuk daftar lengkap icon.

## Styling

Komponen menggunakan Tailwind CSS dengan support untuk:
- Dark mode (`dark:` prefix)
- RTL support (`rtl:` dan `ltr:` prefix)
- Responsive design
- Hover dan active states

## Customization

### Custom Styling

```tsx
<Sidebar 
  className="custom-sidebar-class"
  navigationItems={customItems}
/>
```

### Custom Promo Section

Anda bisa mengganti komponen `SidebarPromo`:

```tsx
import { SidebarPromo } from '@/components';

<SidebarPromo
  title="Custom Title"
  description="Custom description"
  buttonText="Custom Button"
  buttonLink="/custom-link"
/>
```

## TypeScript Support

Semua komponen fully typed dengan TypeScript:

```tsx
import type { NavigationItem, SidebarProps } from '@/types/navigation';
```

## Best Practices

1. **Gunakan ID unik** untuk setiap navigation item
2. **Kelompokkan item** menggunakan categories untuk organisasi yang lebih baik
3. **Gunakan icon yang konsisten** dari React Feather
4. **Handle navigation** dengan Next.js router untuk SPA experience
5. **Responsive design** - pertimbangkan mobile layout

## Contoh Lengkap

Lihat file `SidebarExample.tsx` untuk contoh implementasi lengkap.

## Troubleshooting

### Icon tidak muncul
Pastikan React Feather sudah terinstall dan nama icon benar.

### Style tidak sesuai
Pastikan Tailwind CSS sudah dikonfigurasi dengan benar dan semua class tersedia.

### Navigation tidak bekerja
Pastikan Next.js router sudah dikonfigurasi dan href sudah benar.
