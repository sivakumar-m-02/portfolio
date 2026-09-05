import { motion } from 'framer-motion';
import { projects } from '../data/resumeData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm text-signal-soft">Projects</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Two apps, two very different problems
          </h2>
        </motion.div>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
