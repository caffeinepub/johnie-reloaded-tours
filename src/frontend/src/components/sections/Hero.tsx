import { siteContent } from "@/data/content";
import { motion } from "motion/react";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = siteContent.heroHeadline.split(" ");

  return (
    <section
      id="hero"
      className="group relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${siteContent.heroImage}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,30,20,0.72) 0%, rgba(8,50,30,0.60) 50%, rgba(5,20,10,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Animated decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gold" />
          <div className="h-px w-12 bg-gold" />
        </motion.div>

        {/* Animated headline — each word slides up in sequence */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-wide mb-6">
          {titleWords.map((word, i) => (
            <motion.span
              // biome-ignore lint/suspicious/noArrayIndexKey: hero words are static
              key={`word-${i}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.12,
                ease: "easeOut",
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6"
        >
          {siteContent.heroDescription}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-gold text-base sm:text-lg font-display italic mb-10"
        >
          &ldquo;{siteContent.tagline}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => handleScroll("#services")}
            className="bg-gold hover:bg-gold-light text-forest-dark font-bold text-sm tracking-widest uppercase px-8 py-4 rounded transition-all duration-200 shadow-gold min-w-[220px]"
            data-ocid="hero.primary_button"
          >
            EXPLORE OUR SERVICES
          </button>
          <button
            type="button"
            onClick={() => handleScroll("#contact")}
            className="border-2 border-gold text-gold hover:bg-gold hover:text-forest-dark font-bold text-sm tracking-widest uppercase px-8 py-4 rounded transition-all duration-200 min-w-[220px]"
            data-ocid="hero.secondary_button"
          >
            CONTACT US
          </button>
        </motion.div>
      </div>

      {/* Download wallpaper button — visible on hover */}
      <a
        href={siteContent.heroImage}
        download="inside-uganda-holidays-wallpaper.jpg"
        className="absolute bottom-20 right-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded border border-gold bg-black/50 text-white text-sm font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 backdrop-blur-sm"
        data-ocid="hero.secondary_button"
        aria-label="Download hero wallpaper"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gold"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download Wallpaper
      </a>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
