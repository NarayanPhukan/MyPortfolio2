"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Field = ({ label, children }) => (
  <div className="group">
    <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-2 group-focus-within:text-red transition-colors duration-200">
      {label}
    </label>
    {children}
  </div>
);

export default function Contact() {
  const [result,  setResult]  = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const fd = new FormData(e.target);
    fd.append("access_key", "252fd7d9-dbad-4a76-854c-233dbce120f0");
    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      setResult(data.success ? "success" : "error");
      if (data.success) e.target.reset();
    } catch {
      setResult("error");
    }
    setLoading(false);
  };

  const inputCls = `w-full bg-transparent border-b border-rule dark:border-darkRule
    font-condensed text-base sm:text-lg text-ink dark:text-darkInk placeholder-muted/50
    py-2.5 sm:py-3 outline-none focus:border-red transition-colors duration-200`;

  return (
    <section id="contact" className="scroll-mt-18 sm:scroll-mt-22.5 border-t border-rule dark:border-darkRule">

      {/* SECTION HEADER */}
      <div className="px-4 sm:px-6 lg:px-12 py-4 border-b border-rule dark:border-darkRule flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-muted uppercase">§ 05</span>
          <span className="w-6 sm:w-8 h-px bg-rule dark:bg-darkRule" />
          <span className="font-condensed font-700 text-lg sm:text-xl tracking-widest uppercase text-ink dark:text-darkInk">Contact</span>
        </div>
        <span className="font-mono text-[9px] text-muted tracking-widest hidden sm:block">Get In Touch</span>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-16 flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* LEFT — headline */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="lg:w-[40%] flex flex-col justify-between"
        >
          <div>
            <h2
              className="font-display font-900 italic leading-[0.93] text-ink dark:text-darkInk"
              style={{ fontSize: "clamp(32px, 6vw, 72px)" }}
            >
              Let&apos;s<br />
              <span className="text-red not-italic">Create</span><br />
              Together.
            </h2>

            <p className="font-condensed text-base sm:text-xl text-muted leading-relaxed mt-6 sm:mt-8 max-w-sm">
              Have an idea? A project? A problem to solve?
              I&apos;m available for freelance work, collaborations, and full-time positions.
            </p>
          </div>

          {/* Contact details */}
          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4 border-t border-rule dark:border-darkRule pt-6 sm:pt-8">
            {[
              { label: "Email",    value: "narayanphukan30@gmail.com", href: "mailto:narayanphukan30@gmail.com" },
              { label: "GitHub",   value: "github.com/NarayanPhukan",  href: "https://github.com/NarayanPhukan" },
              { label: "Location", value: "Assam, India",              href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-start gap-4 sm:gap-6">
                <span className="font-mono text-[9px] tracking-widest text-muted uppercase w-14 sm:w-16 shrink-0 mt-0.5">{label}</span>
                {href
                  ? <a href={href} target="_blank" rel="noopener noreferrer"
                       className="font-condensed text-sm sm:text-base text-ink dark:text-darkInk hover:text-red transition-colors duration-200 break-all">
                      {value}
                    </a>
                  : <span className="font-condensed text-sm sm:text-base text-ink dark:text-darkInk">{value}</span>
                }
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex-1 lg:border-l border-rule dark:border-darkRule lg:pl-12"
        >
          <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <Field label="Your Name">
                <input name="name" type="text" placeholder="John Doe" required className={inputCls} />
              </Field>
              <Field label="Email Address">
                <input name="email" type="email" placeholder="john@example.com" required className={inputCls} />
              </Field>
            </div>

            <Field label="Subject">
              <input name="subject" type="text" placeholder="Project inquiry, collaboration..." className={inputCls} />
            </Field>

            <Field label="Message">
              <textarea name="message" rows={4} placeholder="Tell me about your project..." required className={`${inputCls} resize-none`} />
            </Field>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-rule dark:border-darkRule">
              <p className="font-mono text-[10px] tracking-widest text-muted">Replies within 24h</p>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto font-condensed font-700 tracking-widest uppercase text-sm
                           bg-red text-paper px-8 sm:px-10 py-3.5 sm:py-4
                           hover:bg-ink dark:hover:bg-darkInk dark:hover:text-darkPaper
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors duration-200 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>Sending <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg></>
                ) : "Send Message →"}
              </motion.button>
            </div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className={`font-mono text-[10px] sm:text-[11px] tracking-widest uppercase px-4 py-3 border
                  ${result === "success"
                    ? "border-green-500/40 text-green-600 dark:text-green-400 bg-green-500/5"
                    : "border-red/40 text-red bg-red/5"}`}
              >
                {result === "success" ? "✓ Message received. I'll be in touch soon." : "✗ Something went wrong. Please try again."}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}