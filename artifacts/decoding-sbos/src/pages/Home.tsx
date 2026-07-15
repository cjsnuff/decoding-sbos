import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, X, Copy, Check } from "lucide-react";
import somatic1 from "@assets/generated_images/somatic-1.jpg";
import somatic2 from "@assets/generated_images/somatic-2.jpg";
import somatic3 from "@assets/generated_images/somatic-3.jpg";
import christianHeadshot from "@assets/XianHeadshot2_1784149736543.JPG";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const LineReveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  </div>
);

// Inline testimonial — peppered between sections
function PullTestimonial({ quote, author, variant = "default" }: { quote: string; author: string; variant?: "default" | "amber" | "minimal" }) {
  if (variant === "amber") {
    return (
      <FadeIn>
        <section className="py-20 px-6 md:px-12 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl text-primary-foreground leading-relaxed italic mb-6">"{quote}"</p>
            <p className="font-mono text-xs tracking-widest uppercase text-primary-foreground/70">— {author}</p>
          </div>
        </section>
      </FadeIn>
    );
  }

  if (variant === "minimal") {
    return (
      <FadeIn>
        <section className="py-16 px-6 md:px-12 border-y border-border/40">
          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1 font-mono text-xs tracking-widest text-primary mt-1">"</div>
            <div className="md:col-span-11">
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground italic mb-4">{quote}</p>
              <p className="font-mono text-xs tracking-widest uppercase text-primary">— {author}</p>
            </div>
          </div>
        </section>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <section className="py-20 px-6 md:px-12 bg-card/40">
        <div className="max-w-3xl mx-auto">
          <div className="w-8 h-px bg-primary mb-8"></div>
          <p className="font-serif text-2xl md:text-3xl leading-snug italic mb-8">{quote}</p>
          <p className="font-mono text-xs tracking-widest uppercase text-primary">— {author}</p>
        </div>
      </section>
    </FadeIn>
  );
}

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("christian@attunementpsych.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="noise-overlay"></div>

      {/* WEBINAR BANNER */}
      <a
        href="https://luma.com/w93r1w7i"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-primary text-primary-foreground text-center py-3 px-6 hover:bg-primary/90 transition-colors z-50 relative"
      >
        <span className="font-mono text-xs tracking-widest uppercase">
          Free Live Webinar — August 8 @ 9:00 AM MDT
          <span className="mx-3 opacity-50">·</span>
          Register now
          <ArrowRight className="inline-block w-3 h-3 ml-2 -mt-0.5" />
        </span>
      </a>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center mix-blend-difference text-foreground/80">
        <div className="font-mono text-xs tracking-widest uppercase">The sbOS</div>
        <a href="https://luma.com/54r4p034" target="_blank" rel="noopener noreferrer" className="font-mono text-xs tracking-widest uppercase hover:text-primary transition-colors">
          Enroll Now
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end p-6 md:p-12 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img src={somatic1} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <FadeIn>
            <div className="font-mono text-xs tracking-widest uppercase text-primary mb-8 border-l border-primary pl-4 py-1">
              A 6-Week Experiential Group
            </div>
          </FadeIn>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[140px] leading-[0.85] tracking-tight mb-8">
            <LineReveal>Decoding</LineReveal>
            <LineReveal delay={0.1}>the sbOS</LineReveal>
          </h1>
          
          <FadeIn delay={0.3} className="max-w-xl">
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 text-balance">
              Nervous system regulation, shame work, and relational capacity. A live online group for people who are done managing their lives from the outside in.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            <div className="flex gap-4">
              <span>6 Weeks</span>
              <span className="text-border">/</span>
              <span>Online</span>
              <span className="text-border">/</span>
              <span>Live</span>
            </div>
            <div className="hidden sm:block w-12 h-px bg-border"></div>
            <span className="text-primary">Begins August 18</span>
          </FadeIn>

          <FadeIn delay={0.5}>
            <a
              href="https://luma.com/54r4p034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 font-mono uppercase tracking-widest text-sm hover:bg-primary/90 transition-all duration-300 hover:gap-6"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 right-6 md:right-12"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      {/* TESTIMONIAL 1 — right after hero, short & punchy for immediate credibility */}
      <PullTestimonial
        quote="Christian is one of the most skilled somatic practitioners I've ever worked with. His group container on shame changed my life."
        author="Ellen H. — Cohort 1"
        variant="amber"
      />

      {/* OPENING PHILOSOPHY */}
      <section className="py-32 px-6 md:px-12 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-serif text-3xl md:text-5xl leading-tight md:leading-snug text-balance">
              Most modern humans have a shame-based operating system (sbOS) calling the shots. Unfortunately, many of us are so used to the sbOS that we don't even recognize its influence in our lives.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-12 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              I believe that as soon as we recognize the sbOS from the three primary dimensions of feeling — sensation, cognition, and emotion — we begin to develop agency. When the gap of agency is wide enough, the sbOS can be replaced with a love-based operating system (lbOS). 
            </p>
            <p className="mt-8 text-lg md:text-xl text-primary font-medium leading-relaxed">
              And that is my goal. To create a world where more people are more available to give and receive love.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIAL 2 — transformation, mirrors philosophy */}
      <PullTestimonial
        quote="The group really helped me transform some long held fear and shame and gave me more access to life. I left the group feeling more confident, capable and alive."
        author="Cohort 1 Participant"
        variant="minimal"
      />

      {/* PAIN POINTS */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img src={somatic2} alt="" className="w-full h-full object-cover object-left [mask-image:linear-gradient(to_left,black,transparent)]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-6xl mb-8">The confusion isn't because you are broken. It's because you are numb.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                The unwanted patterns that rule your life are not permanent; they are a symptom of shame. And the failed or questionable relationships are not because you are unlovable. It's because you aren't available to give or receive love.
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-12">
            {[
              "You are afraid that you are unreconcilably broken. That there is nothing and no one who can fix you.",
              "You have done the ceremonies. You have done the therapy. You still come home afraid and terrified that your partner is going to bring up the conversation that always ends the same. Them sad and dejected, you shut down, numb and collapsed.",
              "You drink, smoke, and binge content because it keeps you from your inner world.",
              "You are losing the person you love most in real time and feel helpless to stop it."
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="font-mono text-primary text-sm mt-1">0{i+1}</div>
                  <p className="text-lg md:text-xl leading-relaxed">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 3 — mirrors pain points, curiosity replacing shame */}
      <PullTestimonial
        quote="Christian, thank you for helping me better understand how my body communicates. My response to feeling shame and fear is now curiosity. Life is much better being able to sit with those feelings and explore them, instead of always trying to escape them."
        author="Todd B. — Cohort 1"
        variant="default"
      />

      {/* QUOTE */}
      <section className="py-40 px-6 md:px-12 text-center bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <blockquote className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
              "If you know the Way broadly, you will see it in all things."
            </blockquote>
            <cite className="font-mono text-sm tracking-widest uppercase opacity-80 not-italic">
              — Miyamoto Musashi
            </cite>
          </FadeIn>
        </div>
      </section>

      {/* SIX WEEKS FROM NOW */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">Outcomes</div>
            <h2 className="font-serif text-5xl md:text-7xl mb-16">Here is what changes.<br/><span className="text-primary">Specifically.</span></h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              "When your partner says something that would have shut you down completely, you will notice the discomfort in your belly, not run away, and what used to be a conflict will become a moment of connection.",
              "When your friends invite you out and you don't want to go, you will say no without collapsing into self-hatred and self-loathing.",
              "When you wake up after a night of numbing and that voice shows up that says you are broken, you will notice it for what it is, avoid the impulse to numb again, and quickly exit the shame cycle instead of letting it compound for a week.",
              "When you feel something happening in your body and your brain goes foggy, you will quickly identify this nervous system state, know exactly what to do to come back to yourself, and know without a doubt that you are not broken. Your nervous system is simply doing its job."
            ].map((text, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="p-8 border border-border bg-card/50 hover:border-primary/50 transition-colors duration-500 h-full">
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-20 px-6 md:px-12 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <p className="font-serif text-2xl md:text-3xl">Ready to start?</p>
          <a
            href="https://luma.com/54r4p034"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 font-mono uppercase tracking-widest text-sm hover:bg-primary/90 transition-all duration-300 hover:gap-6"
          >
            Register Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* TESTIMONIAL 4 — validates the outcomes, "whole new way" */}
      <PullTestimonial
        quote="I see myself and my trauma response in a whole new way. It is no longer something I feel will always be with me, for reasons I don't understand. Instead, I feel so empowered to notice it and engage with it in a positive way, using my agency to confront my deep-seated fears."
        author="Cohort 1 Participant"
        variant="minimal"
      />

      {/* WHO THIS IS FOR */}
      <section className="py-32 px-6 md:px-12 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Who this is for</h2>
            <p className="text-xl text-muted-foreground mb-12">
              This group is for individuals who already have basic regulation skills and want to go deeper. You do not need to be perfectly regulated. You can be navigating heavy material. But you must have the capacity to pause, reflect, and remain engaged when activated.
            </p>
          </FadeIn>

          <ul className="space-y-6 mb-16">
            {[
              "You understand basic nervous system language and want experiential depth",
              "You notice patterns of reactivity, shutdown, performance, or relational defensiveness",
              "You are willing to take responsibility for your internal states",
              "You want to understand how shame and fear live in your body",
              "You are ready to practice being seen instead of hiding",
              "You want to increase your capacity for intimacy, honesty, and presence"
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn delay={0.4}>
            <div className="p-6 border border-primary/30 bg-primary/5 text-primary text-lg">
              Participation is required. You will speak. You will engage. You will practice showing up in real time.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIAL 5 — validates the container and the group setting */}
      <PullTestimonial
        quote="The group setting was powerful to see how patterns of shame affects different people. It was helpful to have such a supportive setting to be able to share and be vulnerable. I have more compassion for myself and feel less anxious and more at peace because of this course."
        author="Dillon Seely — Cohort 1"
        variant="default"
      />

      {/* THE ARC OF SIX WEEKS */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">Curriculum</div>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">The Arc of Six Weeks</h2>
            <p className="text-xl text-muted-foreground mb-20">Each week builds on the last. The sequence is intentional.</p>
          </FadeIn>

          <div className="space-y-0 relative before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-border md:before:left-[50%] md:before:-ml-px">
            {[
              {
                week: "One",
                title: "Shame",
                desc: "We begin by recognizing that shame is a coping mechanism we use to protect ourselves. For child consciousness, this makes sense. For adult consciousness, it is a trap. When you learn to see shame as a valuable though outdated helper, a new world opens up to you."
              },
              {
                week: "Two",
                title: "Fear",
                desc: "Fear lives beneath shame — fear of being seen, of being too much, of not being enough. We'll work with fear as a nervous system event and practice staying present with it as a messenger and a guide. When you start to listen, the path becomes clear."
              },
              {
                week: "Three",
                title: "Agency",
                desc: "Once you can feel without collapsing, choice — or agency — becomes possible. This week, we examine how agency shows up, how to track it in your body, and how to widen the gap so that making a different choice becomes easier and easier."
              },
              {
                week: "Four",
                title: "Responsibility",
                desc: "Freedom is a primary existential concern because it means you are responsible. As you develop agency, you have to confront the crushing weight of responsibility. Thankfully, adult consciousness is capable of contending with this challenge."
              },
              {
                week: "Five",
                title: "Creativity",
                desc: "Your story is a gift. Your story will literally save someone's life someday if you are brave enough to tell it. This week, we dive into your story, allow it to lead our creative process, and share from our hearts."
              },
              {
                week: "Six",
                title: "Integration",
                desc: "We put it all together and determine the next steps. You now have a clear path to follow when the shame-based operating system wants to take over. What are you going to do with that?"
              }
            ].map((week, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-16 py-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 bg-background border border-border rounded-full flex items-center justify-center font-mono text-sm text-primary z-10">
                    {i + 1}
                  </div>
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Week {week.week}</div>
                    <h3 className="font-serif text-3xl md:text-4xl mb-4 text-primary">{week.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{week.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 6 — comprehensive, after curriculum shows full picture */}
      <PullTestimonial
        quote="Since completing this group process, I have experienced significant shifts in my understanding of how shame lives in me and I consistently see glimmers of progress, hope and love."
        author="K. Whitney — Cohort 1"
        variant="amber"
      />

      {/* QUOTE 2 */}
      <section className="py-32 px-6 md:px-12 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <blockquote className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              "Adult consciousness is capable of contending with responsibility and tending to the grief it holds."
            </blockquote>
            <cite className="font-mono text-sm tracking-widest uppercase opacity-80 not-italic text-primary">
              — Christian Snuffer
            </cite>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT CHRISTIAN */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 relative">
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden bg-card border border-border p-2">
                <img src={christianHeadshot} alt="Christian Snuffer" className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-7">
            <FadeIn>
              <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">The Guide</div>
              <h2 className="font-serif text-4xl md:text-6xl mb-8">Christian Snuffer</h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p className="text-foreground">
                  I want to live in a world where people do not let their shame-based identifications rule them. Where they are freely available to give and receive love.
                </p>
                <p>
                  I know what it's like to not be there. I hid things from my wife that I was convinced would end our marriage. Things I was certain proved I was broken beyond repair. I lied. I minimized. I disappeared into numbness instead of facing her.
                </p>
                <p>
                  I finally got educated and brave enough to notice what was happening in my body. I started feeling. I started letting the feelings guide me, and I stopped believing the lie that I was broken.
                </p>
                <p>
                  The bigger story is the truth that Feeling is Freedom. A numb, disconnected people are a people available to be manipulated, exploited, and used. Feeling, and an exodus from shame-based identification, creates responsible adults capable of changing the future.
                </p>
                <p>
                  I have spent my entire adult life learning how to help people feel and how to feel myself. I found my way through. That's why I built this.
                </p>
                <div className="pt-8 border-t border-border mt-8">
                  <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4">Credentials & Experience</p>
                  <ul className="space-y-3 text-base">
                    {[
                      "4,000+ hours working with adolescents in horticultural therapy",
                      "3,000 hours in expedition-based wilderness therapy with young men — shifts demanding impeccable self-care and high relational attunement",
                      "4,000 clinical hours completed before licensure",
                      "4,000+ additional hours in private practice since",
                      "250 clients over the past three years",
                      "1,000+ hours developing the specific model that runs this program",
                      "A seven-year marriage shaped by the exact fire I'm asking you to walk into"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-32 px-6 md:px-12 bg-background border-y border-border">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">Schedule</div>
            <h2 className="font-serif text-5xl md:text-6xl mb-16">The Dates.</h2>
          </FadeIn>

          <div className="space-y-0">
            {[
              { label: "Group 1 — Shame",        date: "Monday, August 18",    time: "6:00 PM MDT" },
              { label: "Group 2 — Fear",          date: "Monday, August 25",    time: "6:00 PM MDT" },
              { label: "Group 3 — Agency",        date: "Monday, September 1",  time: "6:00 PM MDT" },
              { label: "Bonus Q&A Call",          date: "Thursday, September 4",time: "10:00 AM MDT", bonus: true },
              { label: "Group 4 — Responsibility",date: "Monday, September 8",  time: "6:00 PM MDT" },
              { label: "Group 5 — Creativity",    date: "Monday, September 15", time: "6:00 PM MDT" },
              { label: "Group 6 — Integration",   date: "Monday, September 22", time: "6:00 PM MDT" },
              { label: "Bonus Q&A Call",          date: "Thursday, September 25",time: "10:00 AM MDT", bonus: true },
            ].map((row, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-border gap-2 ${row.bonus ? "opacity-70" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div className={`font-mono text-xs tracking-widest uppercase ${row.bonus ? "text-muted-foreground" : "text-primary"}`}>
                      {row.bonus ? "Bonus" : `0${i < 3 ? i + 1 : i - 0}`}
                    </div>
                    <span className={`text-lg ${row.bonus ? "text-muted-foreground" : "text-foreground"}`}>{row.label}</span>
                  </div>
                  <div className="font-mono text-sm text-muted-foreground tracking-wide pl-10 sm:pl-0">
                    {row.date} <span className="text-primary ml-2">{row.time}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURE & INVESTMENT & INCLUDED */}
      <section className="py-32 px-6 md:px-12 border-y border-border bg-card/20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          
          <div>
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl mb-12">Structure & Investment</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-card border border-border p-8 mb-8">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-6">Format</h3>
                <ul className="space-y-4">
                  {[
                    "6 weekly live group sessions",
                    "2 bonus Q&A calls",
                    "Two hours per session",
                    "Teaching to open each session",
                    "Extended dialogue and process work",
                    "Emphasis on embodied experience",
                    "Sessions will be recorded",
                    "Tuesdays, 6:00–8:00 PM MST"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="w-1 h-1 bg-border shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-primary text-primary-foreground p-8">
                <h3 className="font-mono text-sm uppercase tracking-widest opacity-80 mb-2">Investment</h3>
                <div className="font-serif text-6xl mb-2">$800–$1,300</div>
                <div className="font-mono text-xs tracking-widest uppercase opacity-70 mb-4">Sliding Scale</div>
                <div className="font-mono text-xs tracking-widest uppercase">Next cohort filling now.</div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl mb-12">Also Included</h2>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="border-b border-border pb-8">
                  <h3 className="text-2xl mb-4 text-primary">The Decoding the sbOS Field Guide & Workbook</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Everything taught in the course, written so you can return to it long after the cohort ends. The map, in your hands, forever.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-b border-border pb-8">
                  <h3 className="text-2xl mb-4 text-primary">Six months of Feeling is Freedom</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A living resource library containing hundreds of hours of content that supports and deepens everything covered in the six weeks. The cohort ends; the library doesn't.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="pt-8">
                  <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">The Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Come to every call. Do all of the homework. Tell the truth. If at the end of six weeks you don't feel like this was more helpful than the therapy you have done thus far, you'll get your money back. With one condition: you get on a call and tell me where I fell short.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS 7 & 8 — longer stories, final social proof before CTA */}
      <section className="py-32 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-16">More from Cohort 1</div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-border bg-card/30 h-full flex flex-col">
                <p className="text-muted-foreground leading-relaxed italic mb-8 flex-1">
                  "The Honest Body literally changed my perspective on life after operating under a shame-based operating system for more than five decades. Being diagnosed with CPTSD eleven years ago, at age 50, I have been doing everything in my power to heal. In this course, I learned many important things, including how what happens inside of me limits my ability to give and receive love. Shame is a prime example and I'm learning to identify when I feel shame daily. I also learned that the more shame loosens up in me the more love I can feel and take in. My relationships with my husband, my adult children, in particular, and close friends, are rapidly changing. Christian is an absolute gem and holds a safe and loving container where we all felt held as we shared. We can actually learn to heal our deepest wounds — and I am, without a doubt, a living example."
                </p>
                <p className="font-mono text-sm tracking-widest uppercase text-primary">— Tracey C.K., Cohort 1</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 border border-border bg-card/30 h-full flex flex-col">
                <p className="text-muted-foreground leading-relaxed italic mb-8 flex-1">
                  "His approach to the idea that feeling is freedom felt fresh and new, and, frankly, revolutionary. Within minutes of the first meeting, Christian put all my fears to rest with his remarkable ability to show up with his heart wide open and create a safe, upbeat space for all of us. As I have applied what I learned during my 6 weeks with Christian, I have seen miraculous changes in how I show up in my relationships, feeling freed from trauma responses I had carried in my body for nearly 50 years. Christian's 6-week program has been a game changer for me in tremendous ways, and I would recommend it to anyone who wants to understand shame and trauma and learn how to transform them in powerful, practical ways. You will feel liberated!"
                </p>
                <p className="font-mono text-sm tracking-widest uppercase text-primary">— Amberli Peterson, Cohort 1</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6 md:px-12 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-7xl mb-8">The confusion isn't that you're broken.<br/>It's that you're numb.</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              You don't know what you feel, and so you don't know what you can do about it.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              I am uniquely capable of guiding you toward where you want to go. Not because I have every answer but because I have lived what I am teaching you in this course. Shame ruled my life and kept me numb and disconnected for over 15 years. I know how it shows up in people's bodies and I know what to do about it. If you found this page there is already a resonance. I want to serve you.
            </p>
            
            <a 
              href="https://luma.com/54r4p034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 font-mono uppercase tracking-widest text-sm hover:bg-primary/90 transition-all duration-300 hover:gap-6"
            >
              So be brave and let's do it
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-mono uppercase tracking-widest">
        <div>© {new Date().getFullYear()} Christian Snuffer</div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/_attunement/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          <button onClick={() => setContactOpen(true)} className="hover:text-primary transition-colors cursor-pointer">Contact</button>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {contactOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setContactOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div className="bg-card border border-border p-10 max-w-md w-full pointer-events-auto relative">
                <button
                  onClick={() => setContactOpen(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="font-mono text-xs tracking-widest uppercase text-primary mb-4">Get in Touch</p>
                <p className="font-serif text-2xl mb-8">christian@attunementpsych.com</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:christian@attunementpsych.com"
                    className="flex-1 text-center bg-primary text-primary-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors"
                  >
                    Open Email App
                  </a>
                  <button
                    onClick={copyEmail}
                    className="flex-1 flex items-center justify-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
                  >
                    {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy Address</>}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
