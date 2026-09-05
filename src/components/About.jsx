import { motion } from 'framer-motion';
import { profile, strengths } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-signal-soft">About</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What I do, in one screen
            </h2>
            <p className="mt-6 text-balance leading-relaxed text-ink-300">{profile.summary}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-tile p-6"
              >
                <p className="font-display text-lg font-medium">{s.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
