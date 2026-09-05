import { motion } from 'framer-motion';
import { achievements, experience, projects } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-white/[0.015]">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm text-signal-soft">Experience</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            One role, shipped in stages
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Timeline */}
          <div>
            {experience.map((job) => (
              <div key={job.id} className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-signal" />
                <span className="absolute left-[5px] top-5 h-full w-px bg-white/10" />

                <p className="font-mono text-xs text-ink-500">{job.period}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-ink-300">
                  {job.company} · {job.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-ink-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-6 border-l border-dashed border-white/10 pl-6">
                  {projects.map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative"
                    >
                      <span className="absolute -left-[26px] top-1.5 h-2 w-2 rounded-full bg-ink-500" />
                      <p className="font-mono text-xs text-ink-500">{`0${i + 1}`}</p>
                      <p className="text-sm font-medium text-ink-100">{p.name}</p>
                      <p className="text-xs text-ink-500">{p.role}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-tile p-5"
              >
                <p className="font-display text-2xl font-semibold text-signal-soft">{a.stat}</p>
                <p className="mt-2 text-sm font-medium text-ink-100">{a.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
