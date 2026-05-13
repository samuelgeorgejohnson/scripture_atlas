import Link from 'next/link';

const navItems = [
  { href: '/triptych', label: 'Triptych' },
  { href: '/atlas', label: 'Atlas' },
  { href: '/search', label: 'Search' }
];

export function MainNav() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">SpiritOS</Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}><Link href={item.href} className="nav-link">{item.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
