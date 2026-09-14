import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoImg from "@/assets/logo.png";
import profileImg from "@/assets/profile.jpg";
import coferioImg from "@/assets/projects/coferio.jpg";
import horizonImg from "@/assets/projects/horizon.jpg";
import veloraImg from "@/assets/projects/velora.jpg";
import fragranceImg from "@/assets/projects/fragrance.jpg";
import novaedgeImg from "@/assets/projects/novaedge.jpg";
import chronaraImg from "@/assets/projects/chronara.jpg";
import glowhavenImg from "@/assets/projects/glowhaven.jpg";
import aurelioImg from "@/assets/projects/aurelio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iqradev — Frontend Developer Portfolio" },
      {
        name: "description",
        content:
          "Iqra Shafique (Iqradev) — frontend developer building fast, animated, responsive websites. Projects, resume, experience & pricing.",
      },
      { property: "og:title", content: "Iqradev — Frontend Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Live projects, resume, experience, certifications and pricing packages by Iqra Shafique.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "The Caferio",
    tag: "Coffeehouse",
    desc: "Warm coffeehouse & community room site with rich typography and cinematic hero.",
    url: "https://the-coferio.netlify.app/",
    img: coferioImg,
    features: ["Cinematic hero", "Menu & story pages", "Smooth scroll animations"],
  },
  {
    title: "Horizon Grammar School",
    tag: "Education",
    desc: "Friendly school website — admissions, faculty, results and campus highlights.",
    url: "https://horizon-grammerschool.netlify.app/",
    img: horizonImg,
    features: ["Admissions flow", "Faculty & gallery", "Animated stats"],
  },
  {
    title: "Velora",
    tag: "Fashion / Shopify",
    desc: "Premium Shopify-style storefront for a modern lifestyle brand.",
    url: "https://shopvelora.netlify.app/",
    img: veloraImg,
    features: ["Product collections", "Reviews & FAQ", "Cart-ready UI"],
  },
  {
    title: "Fragrance Life",
    tag: "E‑commerce",
    desc: "Full e‑commerce perfume store — catalog, product cards, and checkout ready UI.",
    url: "https://fragrance-life.com/",
    img: fragranceImg,
    features: ["Catalog & filters", "Product pages", "WhatsApp integration"],
  },
  {
    title: "NovaEdge",
    tag: "Agency / SaaS",
    desc: "Bold agency site with services, portfolio, pricing and conversion-focused CTAs.",
    url: "https://novaedge-website.netlify.app/",
    img: novaedgeImg,
    features: ["Services & pricing", "Portfolio grid", "Contact & CTAs"],
  },
  {
    title: "Chronara",
    tag: "Watches / E‑commerce",
    desc: "Luxury timepiece store — fine & smart watches with an elegant dark storefront.",
    url: "https://chronara-watch.netlify.app/",
    img: chronaraImg,
    features: ["Product showcase", "Collection filters", "Premium dark UI"],
  },
  {
    title: "Glow Haven",
    tag: "Salon & Spa",
    desc: "Beauty salon & spa website with services, packages and online booking flow.",
    url: "https://glowhaven-luxe.netlify.app/",
    img: glowhavenImg,
    features: ["Service menu", "Booking CTA", "Gallery & testimonials"],
  },
  {
    title: "Aurelio Milano",
    tag: "Luxury Shoes / E‑commerce",
    desc: "Luxury designer footwear store — collections, product pages and a premium storefront.",
    url: "https://aurelio-milano-store.netlify.app/",
    img: aurelioImg,
    features: ["Product collections", "Product pages", "Premium storefront"],
  },
];

const features = [
  "Multiple section design variants",
  "Filterable portfolio gallery",
  "Testimonials slider (Swiper)",
  "Animated stats & skill bars",
  "Scroll reveal animations (AOS)",
  "Sticky glass header",
  "Contact form layout",
  "Fully responsive (mobile‑first)",
];

const skills = [
  { name: "HTML", value: 100, desc: "Semantic, accessible markup as a base for every build." },
  { name: "CSS", value: 100, desc: "Modern layouts, Flex & Grid, animations and responsive design." },
  { name: "JavaScript", value: 100, desc: "Interactive UIs, DOM, ES6+ and clean vanilla JS." },
  { name: "React / Next.js", value: 100, desc: "Reusable component architectures and routing." },
  { name: "Tailwind CSS", value: 100, desc: "Design-system utility styling for fast, consistent UIs." },
  { name: "Bootstrap 5", value: 100, desc: "Rapid responsive layouts with the Bootstrap grid & components." },
  { name: "Animation (AOS / GSAP / Swiper)", value: 100, desc: "Scroll reveals, sliders and delightful motion." },
];

const techIcons = [
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "React.js", slug: "react", color: "61DAFB" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "38BDF8" },
  { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
];

const stack = [

  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Bootstrap 5", "Swiper", "AOS", "GSAP", "Isotope", "GLightbox",
];

const packages = [
  {
    name: "Basic",
    price: "PKR 18,000",
    tagline: "Landing page essentials",
    highlight: false,
    items: [
      "1 page responsive website",
      "Hero, about & contact section",
      "Basic SEO setup",
      "Mobile‑first responsive",
      "Delivery in 3–5 days",
    ],
  },
  {
    name: "Premium",
    price: "PKR 35,000",
    tagline: "Multi‑section business site",
    highlight: true,
    items: [
      "Up to 5 pages",
      "All homepage sections",
      "Portfolio + testimonials slider",
      "Scroll & counter animations",
      "Contact form ready to wire",
      "Delivery in 7–10 days",
    ],
  },
  {
    name: "Standard+",
    price: "From PKR 50,000",
    tagline: "Full custom / e‑commerce",
    highlight: false,
    items: [
      "Unlimited sections & pages",
      "E‑commerce / custom features",
      "Product filters & lightbox",
      "Advanced animations & motion",
      "Priority support",
      "Custom timeline",
    ],
  },
];

const education = [
  {
    year: "2025",
    title: "Intermediate (HSSC) — Completed",
    place: "Pakistan",
    desc: "Completed intermediate studies in 2025.",
  },
  {
    year: "2025 – Present",
    title: "BS Information Technology (BS IT) — In Progress",
    place: "Shaheed Benazir Bhutto University (SBBU SBA), Nawabshah",
    desc: "Currently pursuing a Bachelor of Science in Information Technology.",
  },
];

const experience = [
  {
    role: "Frontend Web Developer (Freelance)",
    period: "2026 – Present",
    org: "Self‑employed",
    points: [
      "Delivered 2 real client websites end‑to‑end.",
      "Earned PKR 32,000 from one project and PKR 10,000 from another.",
      "Built responsive websites using HTML, CSS and JavaScript.",
    ],
  },
  {
    role: "Frontend Developer Intern (Unpaid)",
    period: "Internship",
    org: "Arch Technology",
    points: [
      "Assisted in frontend web development using HTML, CSS and JavaScript.",
      "Collaborated with the team on UI improvements and bug fixes.",
    ],
  },
];

const virtualExperience = [
  {
    role: "Datacom Software Development Job Simulation",
    org: "Forage",
    points: [
      "Identified and fixed software bugs.",
      "Completed practical software development tasks.",
    ],
  },
];

const certifications = [
  { title: "Frontend Web Development", org: "NZ Academy, RYK" },
  { title: "Office Management", org: "Falcon Academy, RYK" },
  { title: "Datacom Software Development Job Simulation", org: "Forage" },
];

// Simple in-view hook for scroll reveals
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-gradient">
      {n}
      {suffix}
    </div>
  );
}

function SkillCard({ name, value, desc }: { name: string; value: number; desc: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(value);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div
      ref={ref}
      className="glass rounded-2xl p-6 card-anim"
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground min-h-[3rem]">{desc}</p>
      <div className="mt-6 flex items-center justify-end text-xs text-muted-foreground">
        <span>{value}%</span>
      </div>
      <div className="mt-1 h-1.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-[1500ms] ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["about", "projects", "skills", "resume", "features", "pricing", "contact"];
      let cur = "top";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["About", "about"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Resume", "resume"],
    ["Pricing", "pricing"],
    ["Contact", "contact"],
  ] as const;

  const aboutRef = useReveal<HTMLDivElement>();
  const featRef = useReveal<HTMLDivElement>();
  const priceRef = useReveal<HTMLDivElement>();
  const resumeRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-6s]" />

      {/* Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div
            className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${
              scrolled ? "shadow-lg shadow-primary/10" : ""
            }`}
          >
            <a href="#top" className="flex items-center gap-2 font-display font-semibold">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full glass p-1.5">
                <img src={logoImg} alt="Iqradev logo" width={36} height={36} className="h-full w-full object-contain" />
                <span className="absolute inset-0 rounded-full ring-2 ring-primary/40 animate-ping" />
              </span>
              <span className="text-lg">
                Iqra<span className="text-gradient">dev</span>
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              {nav.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`link-underline px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition ${
                    active === id ? "text-foreground active" : ""
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-primary-foreground transition btn-glow btn-anim"
              >
                Let's Talk →
              </a>
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full glass btn-anim"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-2 glass rounded-2xl p-3 flex flex-col text-sm">
              {nav.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-secondary transition"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pt-36 md:pt-44 pb-24 px-4 relative">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center text-center lg:text-left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for new projects
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] animate-rise">
              I'm <span className="text-gradient">Iqradev</span>, a frontend
              developer building <span className="text-gradient">delightful</span>{" "}
              digital experiences.
            </h1>

            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground animate-fade-up [animation-delay:200ms]">
              I design and build fast, responsive, animated websites for brands, schools,
              agencies and e‑commerce — from first sketch to final pixel.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up [animation-delay:350ms]">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-primary-foreground btn-glow btn-anim transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium btn-anim transition"
              >
                Let's Talk →
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="relative mx-auto w-56 sm:w-72 lg:w-full max-w-sm animate-fade-up [animation-delay:250ms]">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
            <div className="hero-photo card-anim relative overflow-hidden rounded-full glass p-2 aspect-square">
              <img
                src={profileImg}
                alt="Iqra Shafique — frontend developer"
                width={900}
                height={900}
                className="h-full w-full rounded-full object-cover object-[50%_18%]"
              />
            </div>
          </div>
        </div>

      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div ref={aboutRef} className="reveal mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-widest text-primary">About</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">A little about me</h2>

            <div className="mt-6 space-y-4">
              {education.map((e) => (
                <div key={e.title} className="glass rounded-2xl p-4 card-anim">
                  <p className="text-xs uppercase tracking-widest text-primary">{e.year}</p>
                  <h3 className="mt-1 text-base font-semibold">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                </div>
              ))}
            </div>

            <dl className="mt-6 space-y-2 text-sm">
              {[
                ["Name", "Iqra Shafique"],
                ["Role", "Frontend Developer"],
                ["Location", "Pakistan"],
                ["Availability", "Open for freelance"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-border/60 pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              I'm Iqra Shafique, a frontend developer from Pakistan. I build
              production‑ready websites focused on performance, accessibility and
              thoughtful motion — from single‑page landing sites to full e‑commerce
              storefronts.
            </p>
            <p>
              My workflow covers HTML/CSS, JavaScript, React & Next.js, Tailwind and
              Bootstrap 5 — plus animation libraries like AOS, Swiper and GSAP.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                [5, "+", "Projects"],
                [2, "+", "Years exp."],
                [100, "%", "Responsive"],
              ].map(([n, s, l]) => (
                <div key={l as string} className="glass rounded-2xl p-4 text-center card-anim">
                  <Counter to={n as number} suffix={s as string} />
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">Portfolio</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Selected projects</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Live websites I've designed and developed — preview the home page and click through to view live.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <article
                key={p.url}
                style={{ animationDelay: `${i * 80}ms` }}
                className="animate-fade-up card-anim group relative overflow-hidden rounded-3xl glass flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={`${p.title} — home page preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-primary">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-primary">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-primary-foreground btn-glow btn-anim transition"
                  >
                    View Live ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resume: Education + Experience */}
      <section id="resume" className="py-20 px-4">
        <div ref={resumeRef} className="reveal mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary">Resume</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Education & experience</h2>
            <p className="mt-4 text-muted-foreground">
              A quick snapshot of my academic background and professional work so far.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="h-8 w-8 grid place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm">🎓</span>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((e) => (
                  <div key={e.title} className="glass rounded-2xl p-5 card-anim">
                    <div className="text-xs uppercase tracking-widest text-primary">{e.year}</div>
                    <div className="mt-1 font-semibold">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.place}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional experience */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="h-8 w-8 grid place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm">💼</span>
                Professional Experience
              </h3>
              <div className="space-y-4">
                {experience.map((x) => (
                  <div key={x.role} className="glass rounded-2xl p-5 card-anim">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-semibold">{x.role}</div>
                      <div className="text-xs text-muted-foreground">{x.period}</div>
                    </div>
                    <div className="text-sm text-primary">{x.org}</div>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {x.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Virtual experience + Certifications */}
          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="h-8 w-8 grid place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm">🧪</span>
                Virtual Experience
              </h3>
              <div className="space-y-4">
                {virtualExperience.map((v) => (
                  <div key={v.role} className="glass rounded-2xl p-5 card-anim">
                    <div className="font-semibold">{v.role}</div>
                    <div className="text-sm text-primary">{v.org}</div>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {v.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="h-8 w-8 grid place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm">📜</span>
                Certifications
              </h3>
              <div className="grid sm:grid-cols-1 gap-4">
                {certifications.map((c) => (
                  <div key={c.title} className="glass rounded-2xl p-5 flex items-start gap-3 card-anim">
                    <span className="mt-0.5 h-8 w-8 grid place-items-center rounded-full bg-secondary text-primary">✓</span>
                    <div>
                      <div className="font-semibold">{c.title}</div>
                      <div className="text-sm text-muted-foreground">{c.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div ref={priceRef} className="reveal mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary">Pricing</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Simple, transparent packages</h2>
            <p className="mt-4 text-muted-foreground">
              Pick the package that fits your project. Custom scopes welcome.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                style={{ animationDelay: `${i * 100}ms` }}
                className={`animate-fade-up relative rounded-3xl p-8 flex flex-col transition hover:-translate-y-1.5 ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl shadow-primary/30 md:scale-[1.04]"
                    : "glass"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background text-foreground text-xs font-medium px-3 py-1 border border-border">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className={`text-sm mt-1 ${pkg.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                  {pkg.tagline}
                </p>
                <div className="mt-6 text-4xl font-bold">{pkg.price}</div>
                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className={pkg.highlight ? "" : "text-primary"}>✓</span>
                      <span className={pkg.highlight ? "" : "text-muted-foreground"}>{it}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 font-medium transition ${
                    pkg.highlight
                      ? "bg-background text-foreground hover:opacity-90"
                      : "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary">Skills</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Tools I work with every day</h2>
            <p className="mt-4 text-muted-foreground">
              Core languages, frameworks and libraries I use to ship modern, animated,
              responsive websites.
            </p>
          </div>

          {/* Core development stack icons */}
          <div className="mt-12">
            <div className="flex items-center gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-primary whitespace-nowrap">
                Core development
              </p>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {techIcons.map((t) => (
                <div
                  key={t.name}
                  className="glass card-anim rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                    alt={`${t.name} logo`}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {skills.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div ref={featRef} className="reveal mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary">What's included</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Key features in every build</h2>
            <p className="mt-4 text-muted-foreground">
              Modular sections, animations and interactions that make sites feel polished and
              professional.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div
                key={f}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-fade-up glass rounded-2xl p-5 card-anim group"
              >
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-primary font-bold group-hover:scale-110 transition">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 text-sm font-medium">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-8 md:p-12 text-center card-anim">
            <p className="text-xs uppercase tracking-widest text-primary">Contact</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Let's build something great</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Tell me about your project and I'll get back within 24 hours.
            </p>
            <form
              className="mt-8 grid gap-4 text-left"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! I'll get back to you soon.");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Your name" className="rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition" />
                <input required type="email" placeholder="Email" className="rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition" />
              </div>
              <input placeholder="Subject" className="rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition" />
              <textarea required rows={5} placeholder="Tell me about your project..." className="rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition resize-none" />
              <button type="submit" className="justify-self-start inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-primary-foreground btn-glow btn-anim transition">
                Send message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-border/60 relative">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#top" className="flex items-center gap-2 font-display font-semibold">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                I
              </span>
              <span className="text-xl">
                Iqra<span className="text-gradient">dev</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Frontend developer crafting fast, animated and responsive websites for
              brands, agencies and stores. Always happy to talk about a new idea.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/iqra-shafique-0610b538b/"
                target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
              >in</a>
              <a
                href="https://github.com/iqrashafique2416-crypto"
                target="_blank" rel="noreferrer" aria-label="GitHub"
                className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
              >gh</a>
              <a
                href="https://www.fiverr.com/iqrashafique923/buying?source=avatar_menu_profile"
                target="_blank" rel="noreferrer" aria-label="Fiverr"
                className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition font-bold"
              >fi</a>
              <a
                href="mailto:iqrashafique2416@gmail.com"
                aria-label="Email"
                className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
              >@</a>
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#top" className="hover:text-foreground transition">Home</a></li>
              <li><a href="#about" className="hover:text-foreground transition">About</a></li>
              <li><a href="#projects" className="hover:text-foreground transition">Projects</a></li>
              <li><a href="#resume" className="hover:text-foreground transition">Resume</a></li>
              <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>

          {/* What I do */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4">What I Do</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Frontend Development</li>
              <li>Responsive Landing Pages</li>
              <li>Business & School Websites</li>
              <li>E‑commerce Storefronts</li>
              <li>Animations & Motion</li>
            </ul>
          </div>

          {/* Say hello */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4">Say Hello</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground font-medium">Email: </span>
                <a href="mailto:iqrashafique2416@gmail.com" className="hover:text-foreground transition break-all">
                  iqrashafique2416@gmail.com
                </a>
              </li>
              <li>
                <span className="text-foreground font-medium">Phone: </span>
                <a href="tel:+923118330611" className="hover:text-foreground transition">
                  0311 8330611
                </a>
              </li>
              <li>
                <span className="text-foreground font-medium">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/iqra-shafique-0610b538b/"
                  target="_blank" rel="noreferrer"
                  className="hover:text-foreground transition"
                >iqra-shafique</a>
              </li>
              <li>
                <span className="text-foreground font-medium">Fiverr: </span>
                <a
                  href="https://www.fiverr.com/s/yv72E75"
                  target="_blank" rel="noreferrer"
                  className="hover:text-foreground transition"
                >fiverr.com/…/yv72E75</a>
              </li>
              <li>
                <span className="text-foreground font-medium">GitHub: </span>
                <a
                  href="https://github.com/iqrashafique2416-crypto"
                  target="_blank" rel="noreferrer"
                  className="hover:text-foreground transition"
                >iqrashafique2416-crypto</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} <span className="text-gradient font-semibold">Iqradev</span> — All Rights Reserved</p>
            <p>Designed & developed by Iqra Shafique</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
