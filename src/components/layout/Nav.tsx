const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Desktop: single row */}
        <div className="flex items-center justify-between h-14">
          <span className="font-mono text-sm font-semibold text-ink shrink-0">
            daniel<span className="text-accent">.</span>fox
          </span>
          <ul className="hidden sm:flex items-center gap-0.5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-1.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-alt transition-colors rounded-md"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile: scrollable link strip */}
        <div className="sm:hidden flex items-center gap-1 pb-3 overflow-x-auto">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-2.5 py-1 text-xs text-ink-muted hover:text-ink transition-colors rounded whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
