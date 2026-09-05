import { motion } from 'framer-motion';
import { skillGroups } from '../data/resumeData';

const accentMap = {
  signal: { dot: 'bg-signal', text: 'text-signal-soft', border: 'hover:border-signal/40' },
  mint: { dot: 'bg-mint', text: 'text-mint', border: 'hover:border-mint/40' },
  amber: { dot: 'bg-amber', text: 'text-amber', border: 'hover:border-amber/40' },
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-white/[0.015]">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm text-signal-soft">Skills</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The toolkit behind every release
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => {
            const accent = accentMap[group.accent];
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (gi % 4) * 0.07 }}
                className={`glass rounded-tile p-6 transition-colors ${accent.border}`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                  <h3 className="font-display text-sm font-medium text-ink-100 skill-card-title">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-ink-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
