import type { ReactNode } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Section } from "@/components/Section";
import { SkillCard } from "@/components/SkillCard";
import { currentlyLearning, education } from "@/data/education";
import { skills } from "@/data/skills";

const strengths = [
  {
    title: "Fast Learner",
    description: "I enjoy picking up new ideas and putting them into practice.",
  },
  {
    title: "Team Player",
    description: "I value clear communication, collaboration, and shared progress.",
  },
  {
    title: "Challenge Seeker",
    description: "New problems are a chance to stretch my thinking and grow.",
  },
  {
    title: "Growth Mindset",
    description: "Every project and mistake is another opportunity to improve.",
  },
];

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] rounded bg-slate-950 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <Hero />

          <Section
            id="about"
            eyebrow="More than just coding"
            title="Curious by nature. Ready to grow."
            description="I’m a first-year Computer Science student who loves learning how technology can turn ideas into useful things. I’m a fast learner, curious and adaptable, and I bring strong communication and a collaborative mindset to every challenge."
          >
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {strengths.map((strength, index) => (
                <article
                  key={strength.title}
                  className="glass-card p-5 transition duration-300 hover:-translate-y-1 hover:border-accent-cyan/30"
                >
                  <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent-cyan">
                    0{index + 1}
                  </p>
                  <h3 className="font-semibold text-white">{strength.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="skills"
            eyebrow="Tools & mindset"
            title="Skills in progress"
            description="A growing toolkit, built one concept and one project at a time."
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </Section>

          <ProjectsSection />

          <Section
            id="education"
            eyebrow="The learning journey"
            title="Building a strong foundation"
            description="Learning the fundamentals while exploring where curiosity leads."
          >
            <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
              <article className="glass-card relative overflow-hidden p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-blue/10 blur-3xl"
                />
                <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  {education.year}
                </p>
                <h3 className="relative mt-4 text-xl font-semibold text-white sm:text-2xl">
                  {education.degree}
                </h3>
                <p className="relative mt-2 text-slate-400">
                  {education.institution}
                </p>
              </article>
              <article className="glass-card p-6 sm:p-8">
                <h3 className="font-semibold text-white">Currently learning</h3>
                <ul className="mt-5 space-y-3">
                  {currentlyLearning.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Section>

          <Section
            id="contact"
            eyebrow="Let’s connect"
            title="Have an idea or opportunity?"
            description="I’d love to hear from you. Send a message or connect through one of my profiles."
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="glass-card p-6 sm:p-8">
                <ContactForm />
              </div>
              <aside className="glass-card flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="font-semibold text-white">Find me online</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    The best way to get in touch is by email.
                  </p>
                </div>
                <div className="mt-7 space-y-3">
                  <SocialLink
                    href="mailto:tnjniva@gmail.com"
                    label="tnjniva@gmail.com"
                    icon={<Mail size={18} aria-hidden="true" />}
                  />
                  <SocialLink
                    href="https://github.com/tnjniva-cell"
                    label="GitHub"
                    icon={<Github size={18} aria-hidden="true" />}
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/nivashini-a-657423433?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    label="LinkedIn"
                    icon={<Linkedin size={18} aria-hidden="true" />}
                  />
                </div>
              </aside>
            </div>
          </Section>

          <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="font-medium text-slate-300">Nivashini A</span>
              <span className="mx-2 text-slate-700">|</span>
              Designed with curiosity. Built with passion.
            </p>
            <a
              href="#home"
              className="inline-flex w-fit items-center gap-2 rounded-md text-slate-400 transition hover:text-accent-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
            >
              Back to top <ArrowUp size={15} aria-hidden="true" />
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-slate-300 transition hover:border-accent-cyan/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
    >
      <span className="text-accent-cyan">{icon}</span>
      {label}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}
