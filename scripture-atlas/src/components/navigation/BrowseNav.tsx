'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { atlasBrowseNav } from '@/config/navigation';

export function BrowseNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Atlas browsing dimensions" className="browse-nav">
      {atlasBrowseNav.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link key={item.key} href={item.href} className={`browse-link ${isActive ? 'is-active' : ''}`}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
