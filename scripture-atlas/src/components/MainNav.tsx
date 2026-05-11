import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Scripture Atlas' },
  { href: '/philosophy', label: 'Philosophy & Ethics' }
];

export function MainNav() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          SpiritOS
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
