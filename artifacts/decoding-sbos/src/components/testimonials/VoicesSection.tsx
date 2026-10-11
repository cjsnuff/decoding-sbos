import { motion } from "framer-motion";
import { featuredVoice, voices, type Voice } from "./voices-data";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function Portrait({ voice, size = "sm" }: { voice: Voice; size?: "sm" | "lg" }) {
  const dim = size === "lg" ? "w-20 h-20 md:w-24 md:h-24" : "w-12 h-12";
  if (voice.photo) {
    return (
      <img
        src={voice.photo}
        alt={`Portrait of ${voice.name}`}
        width={320}
        height={320}
        loading="lazy"
        data-testid={`img-voice-${voice.id}`}
        className={`${dim} shrink-0 rounded-full object-cover border border-border p-0.5 bg-card grayscale-[35%]`}
      />
    );
  }
  const initials = voice.name.replace(".", "").split(" ").map((p) => p[0]).join("");
  return (
    <div
      aria-hidden="true"
      className={`${dim} shrink-0 rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center font-mono text-xs tracking-widest text-primary`}
    >
      {initials}
    </div>
  );
}

function VoiceCard({ voice, index }: { voice: Voice; index: number }) {
  const offset = index % 3 === 1 ? "md:mt-16" : index % 3 === 2 ? "md:mt-8" : "";
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease }}
      data-testid={`card-voice-${voice.id}`}
      className={`group relative flex flex-col border border-border bg-card/50 p-7 md:p-8 hover:border-primary/50 transition-colors duration-500 ${offset}`}
    >
      <div className="font-mono text-[10px] tracking-widest uppercase text-primary mb-6 flex items-center gap-3">
        <span className="w-6 h-px bg-primary" />
        {voice.theme}
      </div>
      <blockquote className="font-serif text-xl md:text-[1.4rem] leading-snug italic text-foreground/90 mb-8 flex-1">
        “{voice.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-4 pt-6 border-t border-border/60">
        <Portrait voice={voice} />
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground" data-testid={`text-voice-name-${voice.id}`}>
          {voice.name}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function VoicesSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-card/30 border-y border-border" aria-labelledby="voices-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="grid md:grid-cols-12 gap-8 mb-20"
        >
          <div className="md:col-span-5">
            <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">Participant Voices</div>
            <h2 id="voices-heading" className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Seven people.<br /><span className="text-primary">Seven doorways.</span>
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Shame doesn't loosen the same way for everyone. Some found it in the body, some in the homework, some in simply being seen by the room. In their own words, lightly excerpted.
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          data-testid={`card-voice-${featuredVoice.id}`}
          className="grid md:grid-cols-12 gap-8 md:gap-12 items-start bg-primary text-primary-foreground p-8 md:p-14 mb-16"
        >
          <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-5">
            <img
              src={featuredVoice.photo}
              alt={`Portrait of ${featuredVoice.name}`}
              width={320}
              height={320}
              loading="lazy"
              data-testid={`img-voice-${featuredVoice.id}`}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border border-primary-foreground/40 p-1"
            />
            <div>
              <div className="font-mono text-xs tracking-widest uppercase">{featuredVoice.name}</div>
              <div className="font-mono text-[10px] tracking-widest uppercase opacity-70 mt-2">{featuredVoice.theme}</div>
            </div>
          </div>
          <blockquote className="md:col-span-9 font-serif text-2xl md:text-4xl leading-snug italic">
            “{featuredVoice.quote}”
          </blockquote>
        </motion.figure>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {voices.map((v, i) => (
            <VoiceCard key={v.id} voice={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
