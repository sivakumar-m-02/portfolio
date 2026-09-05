import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { certifications, education, languagesKnown } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm text-accent-signal">Education</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Academic background
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {education.map((e, i) => (
              <motion.div
                key={e.course}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass flex flex-col gap-3 rounded-tile p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-signal/15 text-accent-signal">
                    <GraduationCap size={17} />
                  </span>
                  <div>
                    <p className="font-medium text-fg-primary">{e.course}</p>
                    <p className="text-sm text-fg-muted">{e.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-12 sm:pl-0">
                  <span className="font-mono text-xs font-medium text-fg-muted">{e.year}</span>
                  <span className="rounded-full border border-mint/30 px-3 py-1 text-xs font-medium text-accent-mint">
                    {e.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass rounded-tile p-6"
          >
            <h3 className="font-display text-sm font-semibold text-fg-heading">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-fg-secondary">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-display text-sm font-semibold text-fg-heading">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {languagesKnown.map((l) => (
                <span key={l} className="rounded-full border border-fg-muted/20 px-3 py-1.5 text-xs font-medium text-fg-secondary">
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
