import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { profile } from '../data/resumeData';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile nav: close menu first, then scroll after animation finishes
  const handleMobileNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 64; // h-16 = 64px
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 280); // matches menu exit animation duration (0.25s + small buffer)
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass shadow-glass' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-fg-heading">
          <span
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 40%, #A78BFA 100%)' }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Abstract wave slashes */}
              <path d="M6 15.5 Q8.5 6.5 11 11 Q13.5 15.5 16 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="6" cy="15.5" r="1.2" fill="white" />
              <circle cx="16" cy="6.5" r="1.2" fill="white" />
            </svg>
            {/* Subtle ring glow */}
            <span className="absolute inset-0 rounded-full ring-2 ring-purple-400/30" />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-fg-secondary transition-colors hover:text-fg-heading"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-fg-muted/25 text-fg-secondary transition-colors hover:text-accent-signal"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-fg-muted/25 text-fg-secondary md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden glass md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleMobileNav(e, l.href)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-fg-secondary hover:bg-fg-muted/10 hover:text-fg-heading"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
