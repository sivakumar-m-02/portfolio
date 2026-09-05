import { profile } from '../data/resumeData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-ink-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind &amp; Framer Motion.</p>
        <p>Designed &amp; coded from scratch.</p>
      </div>
    </footer>
  );
}
