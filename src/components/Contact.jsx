import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { profile } from '../data/resumeData';

const iconFor = { email: Mail, github: Github, linkedin: Linkedin };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-white/[0.015]">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-accent-signal">Contact</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's build something for mobile
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-fg-secondary">
              Open to full-stack and React Native roles, freelance builds, and apps that need
              real product thinking, not just code.
            </p>

            <div className="mt-8 space-y-5">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-fg-secondary hover:text-accent-signal">
                <Mail size={16} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-fg-secondary hover:text-accent-signal">
                <Phone size={16} /> {profile.phone}
              </a>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-fg-muted">Connect</p>
              <div className="flex gap-3">
                {profile.socials
                  .filter((s) => s.kind !== 'email')
                  .map((s) => {
                    const Icon = iconFor[s.kind];
                    return (
                      <a
                        key={s.kind}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-fg-muted/20 text-fg-secondary transition-colors hover:border-signal hover:text-accent-signal"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass rounded-tile p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-fg-muted">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-fg-muted/20 bg-transparent px-3.5 py-2.5 text-sm text-fg-primary outline-none placeholder:text-fg-muted focus:border-signal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-fg-muted">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-fg-muted/20 bg-transparent px-3.5 py-2.5 text-sm text-fg-primary outline-none placeholder:text-fg-muted focus:border-signal"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-xs font-medium text-fg-muted">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-lg border border-fg-muted/20 bg-transparent px-3.5 py-2.5 text-sm text-fg-primary outline-none placeholder:text-fg-muted focus:border-signal"
                placeholder="Hi Sivakumar, I'd like to discuss a project with you..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-signal px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Send size={15} />
              Send message
            </button>

            {sent && (
              <p className="mt-4 text-sm font-medium text-accent-mint">
                Opening your email client — thanks for reaching out.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
