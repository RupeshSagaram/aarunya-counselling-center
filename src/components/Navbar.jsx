import { useState } from 'react'

// The navigation bar shown at the top of every page.
// It stays fixed to the top of the screen ("sticky") as the user scrolls,
// and on small screens the links collapse into a hamburger menu.
function Navbar() {
  // Tracks whether the mobile menu is open or closed. Starts closed.
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // These match the "id" attributes we'll put on each section (e.g. <section id="about">),
  // so clicking a link jumps (smoothly, thanks to our CSS) to that section.
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  // Closes the mobile menu after a link is clicked, so it doesn't stay open
  // once the user has navigated to a new section.
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo placeholder + business name */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal text-lg font-semibold text-white">
            AC
          </span>
          <span className="text-lg font-semibold text-brand-charcoal">
            Aarunya Counselling Center
          </span>
        </a>

        {/* Desktop nav links: hidden on small screens, shown from the "md" breakpoint up */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brand-charcoal transition-colors hover:text-brand-teal-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button: only shown below the "md" breakpoint */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-charcoal md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {/* Simple inline SVG icon: shows an "X" when open, three lines ("hamburger") when closed */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu: only rendered when open, only visible below the "md" breakpoint */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 border-t border-brand-teal-light px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block text-brand-charcoal transition-colors hover:text-brand-teal-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
