import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, QrCode, TrendingUp } from 'lucide-react';
import PhoneFrame from './PhoneFrame';

const accentClasses = {
  amber: { text: 'text-accent-amber', dot: 'bg-amber', tag: 'border-amber/30 text-accent-amber' },
  mint: { text: 'text-accent-mint', dot: 'bg-mint', tag: 'border-mint/30 text-accent-mint' },
};

function EventScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-base-850 to-base-900 px-4 pt-10">
      <p className="text-center font-mono text-[9px] uppercase tracking-widest text-ink-500">Schedule</p>
      <div className="mt-5 space-y-3">
        {[
          { time: '09:00', title: 'Keynote: Scaling Mobile' },
          { time: '10:30', title: 'Workshop: Offline Sync' },
          { time: '13:00', title: 'Panel: AI in Production' },
        ].map((s) => (
          <div key={s.time} className="glass-strong flex items-center gap-3 rounded-xl p-3">
            <Calendar size={14} className="shrink-0 text-accent-amber" />
            <div className="min-w-0">
              <p className="truncate text-xs text-fg-primary">{s.title}</p>
              <p className="text-[10px] text-fg-muted">{s.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="glass-strong mt-4 flex items-center justify-center gap-2 rounded-xl p-3">
        <QrCode size={16} className="text-accent-amber" />
        <span className="text-xs font-medium text-fg-primary">Check in</span>
      </div>
    </div>
  );
}

function FinanceScreen() {
  const bars = [40, 70, 55, 90, 65, 35];
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-base-850 to-base-900 px-4 pt-10">
      <p className="text-center font-mono text-[9px] uppercase tracking-widest text-ink-500">This month</p>
      <div className="glass-strong mt-5 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs text-fg-muted">Total spent</p>
          <TrendingUp size={14} className="text-accent-mint" />
        </div>
        <p className="mt-1 font-display text-xl font-semibold text-fg-primary">₹24,680</p>
        <div className="mt-4 flex h-16 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-mint/70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="glass-strong mt-4 rounded-xl p-3">
        <p className="font-mono text-[9px] font-medium text-accent-mint">Say it, don't type it</p>
        <p className="mt-2 text-xs text-fg-primary">"Groceries, 1200 rupees"</p>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, reverse = false }) {
  const accent = accentClasses[project.accent];
  const Screen = project.frame === 'event' ? EventScreen : FinanceScreen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`glass grid grid-cols-1 items-center gap-10 rounded-tile p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="mx-auto">
        <PhoneFrame size="small">
          <Screen />
        </PhoneFrame>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
          <span className={`font-mono text-xs font-semibold ${accent.text}`}>{project.role}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-fg-secondary">{project.description}</p>

        <ul className="mt-5 space-y-2.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-fg-secondary">
              <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${accent.text}`} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${accent.tag}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
