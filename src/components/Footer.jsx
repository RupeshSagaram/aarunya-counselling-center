// The footer shown at the very bottom of the page: business name, quick
// links (same as the Navbar), placeholder social icons, and a copyright line.

// Same section links as Navbar.jsx, repeated here so visitors can also
// navigate from the bottom of the page.
const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

// Placeholder social icons as inline SVGs (no icon library), all linking to "#"
// until real social media pages are ready to link to.
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 9h2.5V6H14c-1.933 0-3.5 1.567-3.5 3.5V12H8v3h2.5v6h3v-6H16l0.5-3h-3V9.75c0-.414.336-.75.5-.75z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5v6M7.5 7.5v.01M11.5 16.5v-3.75a2.25 2.25 0 014.5 0v3.75M11.5 16.5v-6" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-charcoal px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        {/* Business name */}
        <p className="text-lg font-semibold">Aarunya Counselling Center</p>

        {/* Quick links, same targets as the Navbar */}
        <ul className="flex flex-wrap justify-center gap-6">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-white/80 transition-colors hover:text-brand-teal-light">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icon placeholders */}
        <div className="flex gap-4">
          <a href="#" aria-label="Instagram" className="text-white/80 transition-colors hover:text-brand-teal-light">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Facebook" className="text-white/80 transition-colors hover:text-brand-teal-light">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white/80 transition-colors hover:text-brand-teal-light">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* Copyright line, using the current year automatically so it never goes stale */}
      <p className="mt-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Aarunya Counselling Center. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
