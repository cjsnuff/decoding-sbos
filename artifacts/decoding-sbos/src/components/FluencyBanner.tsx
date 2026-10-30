import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FluencyBanner() {
  return (
    <section
      aria-labelledby="fluency-banner-heading"
      className="px-6 md:px-12 py-16 md:py-20"
      data-testid="section-fluency-banner"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-4xl mx-auto border border-primary/30 bg-card/60 relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-px bg-primary" aria-hidden="true"></div>
        <div className="p-8 md:p-12 grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-8">
            <div className="font-mono text-xs tracking-widest uppercase text-primary mb-5">
              A Complementary Experience
            </div>
            <h2 id="fluency-banner-heading" className="font-serif text-3xl md:text-4xl leading-tight mb-5 text-balance">
              Begin with Fluency. Continue into Decoding the sbOS.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              A 21-day live experiential challenge for developing the capacity to stay present and conscious in relationship.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed mb-4" data-testid="text-fluency-credit">
              Apply your full enrollment fee toward the next Decoding the sbOS offering when you answer all forum questions and attend all four live calls.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Fluency is an optional, complementary experience—not a prerequisite for Decoding the sbOS.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-between gap-6 md:border-l md:border-border md:pl-10">
            <p className="font-mono text-sm tracking-widest uppercase text-foreground leading-relaxed" data-testid="text-fluency-details">
              December 1–22, 2026 · $297
            </p>
            <a
              href="https://ansfluency.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-explore-fluency"
              className="inline-flex items-center justify-center gap-3 border border-primary text-primary px-6 py-3 font-mono uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore Fluency
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
