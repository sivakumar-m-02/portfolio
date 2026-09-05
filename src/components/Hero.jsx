import { motion } from 'framer-motion';
import { ArrowRight, Download, Smartphone, Sparkles, Wallet } from 'lucide-react';
import { profile } from '../data/resumeData';
import { useTypewriter } from '../hooks/useTypewriter';
import PhoneFrame from './PhoneFrame';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const appIcons = [
  { icon: Smartphone, bg: 'bg-signal' },
  { icon: Wallet, bg: 'bg-mint' },
  { icon: Sparkles, bg: 'bg-amber' },
];

export default function Hero() {
  const roleText = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #5B6EF5 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2FE6B0 0%, transparent 70%)' }}
      />

      <div className="container-px mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-5 font-mono text-sm font-medium text-accent-signal">
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient-brand">{profile.name}</span>
            <span className="mt-3 block h-[1.2em] text-2xl font-medium text-fg-secondary sm:text-3xl">
              {roleText}
              <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] animate-blink bg-signal align-middle" />
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-fg-secondary">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-pill bg-signal px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-pill border border-fg-primary/25 px-6 py-3 text-sm font-medium text-fg-primary transition-colors hover:border-fg-primary/50"
            >
              Get in touch
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-fg-secondary transition-colors hover:text-fg-heading"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-14 flex gap-10 border-t border-fg-muted/15 pt-8">
            <div>
              <p className="font-display text-2xl font-semibold text-fg-heading">3 yrs</p>
              <p className="mt-1 text-sm text-fg-muted">Production experience</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-fg-heading">2</p>
              <p className="mt-1 text-sm text-fg-muted">Apps shipped to real users</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-fg-heading">1000s</p>
              <p className="mt-1 text-sm text-fg-muted">People using the apps</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="animate-float">
            <PhoneFrame>
              <div className="flex h-full flex-col bg-gradient-to-b from-base-850 to-base-900 px-4 pt-10">
                <p className="text-center font-mono text-[10px] uppercase tracking-widest text-ink-500">
                  Home
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {appIcons.map(({ icon: Icon, bg }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bg} text-white shadow-lg`}
                    >
                      <Icon size={20} />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="glass-strong mt-8 rounded-tile p-4"
                >
                  <p className="font-mono text-[10px] font-medium text-accent-mint">AI expense parser</p>
                  <p className="mt-2 text-sm text-fg-primary">"Coffee with client, ₹450"</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-fg-muted">
                    <span>Auto-categorized</span>
                    <span className="text-accent-mint">Food &amp; Drink</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="glass-strong mt-4 rounded-tile p-4"
                >
                  <p className="font-mono text-[10px] font-medium text-accent-amber">Session reminder</p>
                  <p className="mt-2 text-sm text-fg-primary">Keynote starts in 15 min</p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-amber" />
                  </div>
                </motion.div>
              </div>
            </PhoneFrame>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
