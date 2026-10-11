export type Voice = {
  id: string;
  name: string;
  theme: string;
  quote: string;
  photo?: string;
};

const base = import.meta.env.BASE_URL;
const photo = (file: string) => `${base}testimonials/${file}`;

export const featuredVoice: Voice = {
  id: "caleb-r",
  name: "Caleb R.",
  theme: "Being seen",
  photo: photo("caleb-r.webp"),
  quote:
      "Christian created an incredibly safe space to bring forward the parts of ourselves we normally hide. … There was something deeply powerful about being able to show those parts of myself and experience acceptance rather than judgement. … I’m more expressive with my emotions, more compassionate toward myself and others, and far more open to love and connection.",
};

export const voices: Voice[] = [
  {
    id: "rachel-b",
    name: "Rachel B.",
    theme: "Embodied, not intellectual",
    photo: photo("rachel-b.webp"),
    quote:
      "It helped me see the subtle ways I’ve been hiding and feeding shame without even realizing it. … Through the group process, honest reflection, and practicing the skills in real time, the lessons became embodied rather than remaining something I understood only intellectually.",
  },
  {
    id: "matthew-s",
    name: "Matthew S.",
    theme: "After years of therapy",
    photo: photo("matthew-s.webp"),
    quote:
      "I recommend this group to anyone who's spent years in individual therapy feeling stuck. … There are no gimmicks present or quick fixes offered, which is actually one of the reasons why this group is so helpful.",
  },
  {
    id: "andy-l",
    name: "Andy L.",
    theme: "Personal and professional",
    photo: photo("andy-l.webp"),
    quote:
      "Decoding the Shame-Based Operating System was one of the best investments I made in myself this year, both for my own personal development and for how I support clients in my coaching practice. … He weaves together spiritual, clinical, and embodied lived experiences in a way that gives the topic breadth and real depth.",
  },
  {
    id: "michael-s",
    name: "Michael S.",
    theme: "Recognition",
    quote:
      "I didn't realise how much of my life was being run by shame. I now understand why I have it, how to recognise it and have tools to process it.",
  },
  {
    id: "sonnie-k",
    name: "Sonnie K.",
    theme: "Life outside of class",
    photo: photo("sonnie-k.webp"),
    quote:
      "The clear session-to-session flow and practical homework gave these concepts real life outside of class, the insights translated into daily practices that I’m truly excited to keep using.",
  },
  {
    id: "caroline-a",
    name: "Caroline A.",
    theme: "Body and mind",
    photo: photo("caroline-a.webp"),
    quote:
      "I am able to observe my shame based beliefs and how they operate within my body and my mind. I have a more compassionate, understanding relationship with myself.",
  },
];
