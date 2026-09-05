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
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-signal-soft">Contact</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's build something for mobile
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-300">
              Open to full-stack and React Native roles, freelance builds, and apps that need
              real product thinking, not just code.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-ink-300 hover:text-signal-soft">
                <Mail size={16} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-ink-300 hover:text-signal-soft">
                <Phone size={16} /> {profile.phone}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-signal hover:text-signal-soft"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
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
                <label htmlFor="name" className="text-xs text-ink-500">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-ink-100 outline-none placeholder:text-ink-500 focus:border-signal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-ink-500">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-ink-100 outline-none placeholder:text-ink-500 focus:border-signal"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-xs text-ink-500">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-ink-100 outline-none placeholder:text-ink-500 focus:border-signal"
                placeholder="What are you building?"
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
              <p className="mt-4 text-sm text-mint">
                Opening your email client — thanks for reaching out.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
