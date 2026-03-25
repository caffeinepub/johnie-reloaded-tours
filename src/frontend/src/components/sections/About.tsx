import { siteContent } from "@/data/content";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function About() {
  const [expanded, setExpanded] = useState(false);
  // On mobile show only the first 2 paragraphs when collapsed
  const PREVIEW_COUNT = 2;
  const paragraphs = siteContent.aboutParagraphs;

  return (
    <section id="about" className="texture-sand py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-brown text-xs tracking-[0.3em] uppercase font-medium">
              Who We Are
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest uppercase tracking-wide mb-4">
            About Us
          </h2>
          <div className="w-16 h-1 bg-gold mb-8" />

          {/* Desktop: show all paragraphs */}
          <div className="hidden sm:block">
            {paragraphs.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-foreground/80 leading-relaxed mb-5 text-base"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Mobile: collapsible */}
          <div className="block sm:hidden">
            {paragraphs.slice(0, PREVIEW_COUNT).map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-foreground/80 leading-relaxed mb-5 text-base"
              >
                {para}
              </p>
            ))}

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="extra"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  {paragraphs.slice(PREVIEW_COUNT).map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-foreground/80 leading-relaxed mb-5 text-base"
                    >
                      {para}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-1 mb-4 flex items-center gap-2 text-forest font-semibold text-sm tracking-wide border-b border-gold pb-0.5 hover:text-brown transition-colors"
            >
              {expanded ? "View Less" : "View More"}
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                ▾
              </motion.span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
        >
          <div className="bg-forest text-sand rounded-xl p-7 shadow-card">
            <h3 className="font-display text-lg font-bold text-gold uppercase tracking-wide mb-3">
              Our Vision
            </h3>
            <p className="text-sand/80 text-sm leading-relaxed">
              {siteContent.vision}
            </p>
          </div>
          <div className="bg-forest text-sand rounded-xl p-7 shadow-card">
            <h3 className="font-display text-lg font-bold text-gold uppercase tracking-wide mb-3">
              Our Mission
            </h3>
            <p className="text-sand/80 text-sm leading-relaxed">
              {siteContent.mission}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
