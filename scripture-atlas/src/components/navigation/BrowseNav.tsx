import Link from 'next/link';
import { browseDimensions } from '@/config/navigation';

export function BrowseNav() {
  return (
    <nav aria-label="Atlas browse dimensions" className="browse-nav card">
      <ul className="browse-nav-list">
        {browseDimensions.map((dimension) => (
          <li key={dimension.key}>
            <Link href={dimension.href} className="browse-nav-link">
              <span className="browse-nav-label">{dimension.label}</span>
              <span className="small">{dimension.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
