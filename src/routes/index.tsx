import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

// ===== EDIT YOUR DETAILS HERE =====
const PROFILE = {
  name: "Juber Khan",
  subtitle: "First-Year B.Tech Mechanical Engineering Student | Curious Learner",
  intro:
    "I am a first-year Mechanical Engineering student interested in engineering, technology, and learning how machines and systems work. I am currently developing my foundational skills and exploring beginner-level projects.",
  about:
    "I am a first-year Mechanical Engineering student at JECRC University. I am building a strong foundation in engineering concepts and digital technologies. I enjoy learning how machines and systems work, exploring new tools, and improving my skills step by step.",
  degree: "B.Tech in Mechanical Engineering",
  university: "JECRC University, Jaipur, Rajasthan",
  semester: "1st Semester",
  email: "juber.26bmen0018@jecrcu.edu.in",
  github: "https://github.com/Juber0134",
  linkedin: "https://www.linkedin.com/in/Juber0134",
};
const SKILLS = [
  { name: "Engineering fundamentals", level: "Currently learning" },
  { name: "Problem solving", level: "Beginner" },
  { name: "Basic computer and digital literacy", level: "Beginner" },
  { name: "Technical drawing fundamentals", level: "Currently learning" },
  { name: "AI tool exploration", level: "Currently learning" },
];
const PROJECTS = [
  { title: "Personal Portfolio Website", desc: "A student portfolio concept built to present an introduction, education, skills, and projects." },
  { title: "Basic Mechanical Design Concept", desc: "A beginner learning concept for exploring how a simple mechanical component could be designed and described." },
];
// ==================================

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juber Khan — Mechanical Engineering Student Portfolio" },
      { name: "description", content: "Portfolio of Juber Khan, first-year B.Tech Mechanical Engineering student at JECRC University, Jaipur." },
      { property: "og:title", content: "Juber Khan — Student Portfolio" },
      { property: "og:description", content: "First-year B.Tech Mechanical Engineering student at JECRC University." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const NAV = [["home","Home"],["about","About"],["education","Education"],["skills","Skills"],["projects","Projects"],["achievements","Achievements"],["contact","Contact"]];

function Section({ id, title, children, alt }: { id: string; title: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-20 ${alt ? "bg-secondary/50" : ""}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

const card = "rounded-2xl border bg-card p-6 shadow-sm";
const btn = "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition hover:-translate-y-0.5";

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <div className="font-sans">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4" aria-label="Main">
          <a href="#home" className="font-display text-xl font-bold text-primary">Juber Khan</a>
          <button className="md:hidden rounded-md border px-3 py-1" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
          <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b bg-background p-4 md:static md:flex md:flex-row md:border-0 md:p-0`}>
            {NAV.map(([id, l]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">{l}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="scroll-mt-20 px-5 py-20 md:py-28">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-primary">JECRC University · 1st Semester</p>
              <h1 className="text-5xl font-bold text-primary md:text-7xl">{PROFILE.name}</h1>
              <p className="mt-4 text-lg font-semibold">{PROFILE.subtitle}</p>
              <p className="mt-4 max-w-xl text-muted-foreground">{PROFILE.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className={`${btn} bg-primary text-primary-foreground`}>View My Projects</a>
                <a href="#contact" className={`${btn} border-2 border-primary text-primary`}>Contact Me</a>
              </div>
            </div>
            {/* Replace this placeholder with <img src="..." alt="Juber Khan" /> */}
            <div className="mx-auto flex aspect-square w-64 items-center justify-center rounded-full border-4 border-dashed border-accent bg-secondary text-center text-sm text-muted-foreground">
              <span><span className="block font-display text-6xl font-bold text-primary">JK</span>Profile photo<br />coming soon</span>
            </div>
          </div>
        </section>

        <Section id="about" title="About Me" alt><p className="max-w-3xl text-lg leading-relaxed">{PROFILE.about}</p></Section>

        <Section id="education" title="Education">
          <div className={`${card} border-l-4 border-l-accent`}>
            <h3 className="text-xl font-bold">{PROFILE.degree}</h3>
            <p className="mt-1">{PROFILE.university}</p>
            <p className="mt-1 text-muted-foreground">{PROFILE.semester}</p>
          </div>
        </Section>

        <Section id="skills" title="Skills" alt>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s) => (
              <li key={s.name} className={card}>
                <p className="font-semibold">{s.name}</p>
                <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-primary">{s.level}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article key={p.title} className={card}>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-foreground bg-accent/40 rounded-full px-3 py-1">Learning concept</span>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Certifications & Achievements" alt>
          <p className="max-w-3xl text-lg">Currently building my skills and working on academic and personal learning projects. This section will be updated as I complete verified certifications or achievements.</p>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-8 md:grid-cols-2">
            <form className={card} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <p className="mb-4 rounded-md bg-secondary p-3 text-sm">This form is a visual demo and does not send messages yet. Please email me directly.</p>
              {[["name","Name","text"],["email","Email","email"]].map(([id,l,t]) => (
                <label key={id} className="mb-4 block text-sm font-medium">{l}
                  <input id={id} type={t} required className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
                </label>
              ))}
              <label className="mb-4 block text-sm font-medium">Message
                <textarea required rows={4} className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
              </label>
              <button className={`${btn} w-full bg-primary text-primary-foreground`}>Send (demo)</button>
              {sent && <p className="mt-3 text-sm text-muted-foreground" role="status">Demo only — nothing was sent. Please use the email link.</p>}
            </form>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${PROFILE.email}`} className={`${btn} bg-accent text-accent-foreground`}>Email me: {PROFILE.email}</a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className={`${btn} border-2 border-primary text-primary`}>Visit my GitHub profile</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className={`${btn} border-2 border-primary text-primary`}>Visit my LinkedIn profile</a>
            </div>
          </div>
        </Section>

        <Section id="chatbot" title="AI Chatbot (Coming Soon)" alt>
          {/* BOTPRESS: paste the Botpress webchat embed script here later (or in __root.tsx head). */}
          <div className="rounded-2xl border-2 border-dashed border-accent p-8 text-center">
            <p className="font-semibold">A personal AI chatbot (Botpress) will be added here in the future.</p>
            <p className="mt-2 text-sm text-muted-foreground">Not connected yet.</p>
          </div>
        </Section>
      </main>

      <footer className="border-t px-5 py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} {PROFILE.name}</footer>
    </div>
  );
}
