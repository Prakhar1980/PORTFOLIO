"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import {
  ArrowDown,
  Braces,
  Building2,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Map,
  Orbit,
  Send,
  Sparkles,
  TerminalSquare
} from "lucide-react";
import { IndiaInfrastructureMap } from "@/components/india-infrastructure-map";
import { SkillGalaxy } from "@/components/skill-galaxy";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import {
  achievements,
  certifications,
  contactLinks,
  infrastructureNodes,
  profile,
  projects,
  skills,
  timeline
} from "@/lib/portfolio-data";

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 70 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 61) % 100}%`,
        delay: (index % 12) * 0.22,
        duration: 3.6 + (index % 8) * 0.42
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-signal/70"
          style={{
            left: particle.left,
            top: particle.top,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            boxShadow: "0 0 16px rgba(73,245,215,.75)"
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          from { transform: translate3d(0, 0, 0); opacity: .25; }
          to { transform: translate3d(22px, -38px, 0); opacity: .85; }
        }
      `}</style>
    </div>
  );
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-token",
        { y: 28, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-map-pulse",
        { scale: 0.82, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.25, ease: "expo.out", delay: 0.25 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden px-5 py-6 md:px-10">
      <ParticleField />
      <motion.div
        style={{ scale, opacity }}
        className="hero-map-pulse absolute inset-x-0 top-16 mx-auto h-[70vh] max-w-6xl rounded-full bg-[radial-gradient(circle,rgba(73,245,215,.22),transparent_34%),radial-gradient(circle_at_60%_46%,rgba(255,232,106,.13),transparent_22%)] blur-2xl"
      />
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3 font-display font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-signal text-black">
            <Map size={18} />
          </span>
          PK / IndiaOS
        </a>
        <div className="hidden items-center gap-5 text-sm text-white/70 md:flex">
          <a href="#map" className="hover:text-signal">Map</a>
          <a href="#skills" className="hover:text-signal">Skills</a>
          <a href="#projects" className="hover:text-signal">Projects</a>
          <a href="#journey" className="hover:text-signal">Journey</a>
          <a href="#contact" className="hover:text-signal">Contact</a>
        </div>
      </nav>

      <div id="home" className="relative z-10 mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="pt-14 md:pt-0">
          <p className="intro-token inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-signal">
            <Sparkles size={15} />
            Digital India portfolio
          </p>
          <h1 className="intro-token mt-7 font-display text-5xl font-bold leading-[0.96] text-white md:text-7xl lg:text-8xl">
            Prakhar Kumar
          </h1>
          <p className="intro-token mt-5 max-w-2xl font-display text-2xl font-semibold text-white/86 md:text-3xl">
            {profile.tagline}
          </p>
          <p className="intro-token mt-5 max-w-xl text-lg leading-8 text-white/68">
            {profile.title}. IEEE-published researcher building real-time, RBAC-secured, production-grade systems with React, Node.js, TypeScript, and Socket.IO.
          </p>
          <div className="intro-token mt-8 flex flex-wrap gap-3">
            <LinkButton href="#map" size="lg">
              Explore My Infrastructure
              <ChevronRight size={18} />
            </LinkButton>
            <LinkButton href="#resume" variant="glass" size="lg">
              View Resume
              <Download size={18} />
            </LinkButton>
            <LinkButton href="#contact" variant="glass" size="lg">
              Contact Me
              <Send size={18} />
            </LinkButton>
          </div>
        </div>

        <div className="relative h-[520px] md:h-[700px]">
          <div className="absolute inset-0 rounded-full border border-signal/20 bg-signal/5 shadow-glow" />
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[48%_52%_46%_54%] border border-white/15 bg-black/25 backdrop-blur-sm" />
          <svg viewBox="0 0 420 560" className="absolute inset-0 m-auto h-[92%] w-[92%]" aria-hidden="true">
            <path
              d="M122 41 L235 32 L322 88 L381 170 L356 260 L319 335 L285 518 L209 548 L160 416 L78 312 L38 202 L67 98 Z"
              fill="rgba(73,245,215,0.08)"
              stroke="rgba(73,245,215,0.65)"
              strokeWidth="2"
            />
            {infrastructureNodes.map((node, index) => (
              <g key={node.id} transform={`translate(${node.position.x * 4.08} ${node.position.y * 5.42})`}>
                <line y1="0" y2={-node.height * 0.62} stroke={node.color} strokeWidth="5" strokeLinecap="round" />
                <circle r="5" fill={node.color}>
                  <animate attributeName="r" values="5;12;5" dur={`${2 + index * 0.18}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;.35;1" dur={`${2 + index * 0.18}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </svg>
          <div className="absolute bottom-10 right-2 w-40 rounded-[42px_42px_16px_16px] border border-white/14 bg-gradient-to-b from-white/12 to-white/3 p-4 shadow-2xl backdrop-blur-xl md:right-12">
            <div className="mx-auto h-24 w-20 rounded-t-full bg-[linear-gradient(160deg,rgba(255,255,255,.65),rgba(73,245,215,.12)_45%,rgba(0,0,0,.1))]" />
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/68">Engineer Avatar</p>
          </div>
        </div>
      </div>
      <a href="#map" className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-white/55 hover:text-signal" aria-label="Scroll to map">
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      <p className="font-display text-xs font-bold uppercase tracking-[0.32em] text-signal">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-white/62">{copy}</p>
    </div>
  );
}

function MetroTimeline() {
  return (
    <section id="journey" className="section-grid px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Timeline Journey"
          title="A futuristic metro route through the build years"
          copy="Every stop is a shipped capability, credential, research milestone, or engineering signal from Prakhar's resume."
        />
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-black/28 p-6 md:p-10">
          <div className="absolute left-8 top-16 h-[calc(100%-8rem)] w-1 bg-gradient-to-b from-signal via-volt to-magma md:left-1/2" />
          <div className="grid gap-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.stop}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                  className={`relative grid items-center gap-5 pl-16 md:grid-cols-2 md:pl-0 ${index % 2 ? "md:text-left" : "md:text-right"}`}
                >
                  <div className={index % 2 ? "md:col-start-2" : ""}>
                    <div className="glass rounded-3xl p-5">
                      <div className={`flex items-center gap-3 ${index % 2 ? "" : "md:justify-end"}`}>
                        <Icon className="text-signal" size={20} />
                        <p className="font-display text-2xl font-bold">{item.stop}</p>
                      </div>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-volt">{item.date}</p>
                      <p className="mt-4 leading-7 text-white/68">{item.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-[22px] top-8 grid h-10 w-10 place-items-center rounded-full border border-signal/60 bg-black text-signal shadow-glow md:left-1/2 md:-translate-x-1/2">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCity() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const Icon = project.icon;

  return (
    <section id="projects" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Project Showcase"
          title="A mini smart-city of shipped systems"
          copy="No plain cards: each project is a district with its own infrastructure role, stack, metrics, and links."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.025))] p-6 section-grid">
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-signal/10 to-transparent" />
            <div className="relative grid h-full grid-cols-5 items-end gap-4">
              {projects.map((item, index) => {
                const ProjectIcon = item.icon;
                const height = [84, 66, 58, 50, 72][index] ?? 60;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActive(index)}
                    className={`group relative flex min-h-[380px] items-end justify-center rounded-t-[18px] border px-2 pb-5 text-left transition ${
                      active === index
                        ? "border-signal/70 bg-signal/16 shadow-glow"
                        : "border-white/10 bg-white/[0.045] hover:border-white/30"
                    }`}
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute inset-x-2 top-4 grid grid-cols-3 gap-1">
                      {Array.from({ length: 18 }).map((_, slot) => (
                        <span
                          key={slot}
                          className={`h-2 rounded-full ${active === index ? "bg-signal/70" : "bg-white/15"}`}
                        />
                      ))}
                    </div>
                    <div className="relative z-10 text-center">
                      <ProjectIcon className="mx-auto mb-4 text-signal" size={28} />
                      <p className="font-display text-sm font-bold text-white md:text-base">{item.name}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[30px] p-7 md:p-9"
          >
            <Icon className="text-signal" size={38} />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.28em] text-volt">{project.period}</p>
            <h3 className="mt-3 font-display text-4xl font-bold">{project.name}</h3>
            <p className="mt-2 text-white/60">{project.archetype}</p>
            <p className="mt-6 text-lg leading-8 text-white/76">{project.description}</p>
            <div className="mt-7 space-y-3">
              {project.details.map((detail) => (
                <p key={detail} className="rounded-2xl border border-white/10 bg-black/25 p-4 leading-7 text-white/70">
                  {detail}
                </p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/72">
                  {tech}
                </span>
              ))}
            </div>
            {project.links ? (
              <div className="mt-8 flex gap-3">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-signal">
                    {link.label}
                    <ExternalLink size={15} />
                  </a>
                ))}
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section id="resume" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resume Integration"
          title="The complete signal layer"
          copy="Education, experience, research, certifications, links, skills, achievements, and competitive programming are integrated directly from the LaTeX resume details."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <div key={achievement} className="glass rounded-3xl p-6">
              <Braces className="text-signal" size={22} />
              <p className="mt-5 text-lg font-semibold leading-7">{achievement}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass rounded-[30px] p-7">
            <h3 className="font-display text-3xl font-bold">Education & Experience</h3>
            <div className="mt-6 space-y-5 text-white/72">
              <p><strong className="text-white">Chandigarh University, Mohali, Punjab</strong> - B.E. Computer Science and Engineering, CGPA 8.05 / 10.0, Aug 2022 - Jun 2026.</p>
              <p><strong className="text-white">Sardar Ballav Patel School, Patna</strong> - Class XII Science, 72.8%.</p>
              <p><strong className="text-white">Himalayan Residential School, Patna</strong> - Class X, 71.5%.</p>
              <p><strong className="text-white">Data Analysis Intern</strong> - Chandigarh University Energy Systems Lab, Jun 2023 - Jul 2023.</p>
              <p><strong className="text-white">Blockchain Developer Intern</strong> - Metacrafters via Chandigarh University Partnership, Jun 2024 - Aug 2024.</p>
              <p><strong className="text-white">Research</strong> - IEEE Xplore publication on robotic process automation for public-service efficiency.</p>
            </div>
          </div>
          <div className="glass rounded-[30px] p-7">
            <h3 className="font-display text-3xl font-bold">Certifications</h3>
            <div className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <a key={cert.name} href={cert.href} target={cert.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block rounded-2xl border border-white/10 bg-black/25 p-4 hover:border-signal/50">
                  <p className="font-semibold text-white">{cert.name}</p>
                  <p className="mt-1 text-sm text-white/58">{cert.issuer} - {cert.year}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 glass rounded-[30px] p-7">
          <h3 className="font-display text-3xl font-bold">Technical Skills</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="font-display text-xl font-bold text-signal">{category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactTerminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([
    "prakhar@indiaos:~$ Type hire prakhar, contact, resume, github, linkedin, skills, or clear."
  ]);

  function runCommand(command: string) {
    const normalized = command.trim().toLowerCase();
    const response: Record<string, string[]> = {
      "hire prakhar": [
        "Status: available for software engineering, full-stack, and backend roles.",
        "Strengths: Node.js, React, TypeScript, REST APIs, WebSockets, RBAC, MongoDB, MySQL.",
        `Email: ${profile.email} | Phone: ${profile.phone}`
      ],
      contact: [`Email: ${profile.email}`, `Phone: ${profile.phone}`, `Location: ${profile.location}`, profile.linkedin],
      resume: [
        "Resume route opened in-page at #resume.",
        "Highlights: IEEE publication, NPTEL Top 1%, 2 production apps, 150+ LeetCode, sub-200ms WebSockets."
      ],
      github: [profile.github],
      linkedin: [profile.linkedin],
      skills: Object.entries(skills).map(([category, items]) => `${category}: ${items.join(", ")}`),
      clear: []
    };

    if (normalized === "clear") {
      setLines(["prakhar@indiaos:~$ terminal cleared."]);
      setInput("");
      return;
    }

    setLines((current) => [
      ...current,
      `prakhar@indiaos:~$ ${command}`,
      ...(response[normalized] ?? [`Unknown command: ${command}`, "Try hire prakhar, contact, resume, github, linkedin, skills, or clear."])
    ]);
    setInput("");
  }

  return (
    <section id="contact" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact Terminal"
          title="Command the next collaboration"
          copy="A live terminal for the hiring path, contact details, resume highlights, and engineering stack."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[30px] border border-signal/25 bg-[#020403] shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-magma" />
              <span className="h-3 w-3 rounded-full bg-volt" />
              <span className="h-3 w-3 rounded-full bg-signal" />
              <span className="ml-3 text-xs font-bold uppercase tracking-[0.24em] text-white/50">prakhar terminal</span>
            </div>
            <div className="h-[420px] overflow-y-auto p-5 font-mono text-sm leading-7 text-signal/90">
              {lines.map((line, index) => (
                <p key={`${line}-${index}`} className={line.includes("Unknown") ? "text-magma" : ""}>{line}</p>
              ))}
              <form
                className="mt-3 flex items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (input.trim()) runCommand(input);
                }}
              >
                <span>prakhar@indiaos:~$</span>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && input.trim()) {
                      event.preventDefault();
                      runCommand(input);
                    }
                  }}
                  className="min-w-0 flex-1 bg-transparent text-white outline-none"
                  aria-label="Terminal command"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="grid h-8 w-8 place-items-center rounded-full border border-signal/30 bg-signal/10 text-signal hover:bg-signal hover:text-black"
                  aria-label="Run terminal command"
                >
                  <Send size={14} />
                </button>
                <span className="terminal-caret h-5 w-2 bg-signal" />
              </form>
            </div>
          </div>
          <div className="grid gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} className="glass flex items-center gap-4 rounded-3xl p-5 hover:border-signal/45">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-signal/12 text-signal">
                    <Icon size={21} />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white/45">{link.label}</span>
                    <span className="mt-1 block break-all text-white/82">{link.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioExperience() {
  return (
    <main className="noise scanlines min-h-screen bg-obsidian text-white">
      <Hero />
      <section id="map" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Interactive Map Experience"
            title="A digital India tech ecosystem"
            copy="Hover or click each state hotspot to raise a tower, reveal the project behind it, and trace glowing connections across Prakhar's infrastructure."
          />
          <IndiaInfrastructureMap />
        </div>
      </section>
      <section id="skills" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SkillGalaxy />
        </div>
      </section>
      <ProjectCity />
      <MetroTimeline />
      <ResumeSection />
      <ContactTerminal />
      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/45">
        <p>Prakhar Kumar - Software Engineer building scalable digital infrastructure across India.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal"><Github size={19} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal"><Linkedin size={19} /></a>
          <a href={`mailto:${profile.email}`} className="hover:text-signal"><Mail size={19} /></a>
        </div>
      </footer>
    </main>
  );
}
