import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, ArrowRight, ExternalLink, Sparkles, Code2, Brain, Layout, Award, Languages, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import aditiPhoto from "@/assets/aditi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditi Prakash — AI & Software Engineer" },
      { name: "description", content: "Portfolio of Aditi Prakash, AI & Software Engineer. 3rd year CSE student at VIT Bhopal building AI-driven projects." },
      { property: "og:title", content: "Aditi Prakash — AI & Software Engineer" },
      { property: "og:description", content: "AI & Software Engineer crafting AI-driven projects. VIT Bhopal, CGPA 8.5." },
    ],
  }),
  component: Portfolio,
});

const skills = {
  "AI / ML": ["Machine Learning", "Deep Learning", "Data Science"],
  "Engineering": ["Data Structures", "Algorithms", "Problem Solving"],
  "Frontend": ["React", "TypeScript", "Tailwind CSS"],
};

const languages = ["Java", "C++", "Python"];

const achievements = [
  { title: "School Topper — CBSE Class 10", detail: "Scored 97.6% — ranked #1 in school", icon: Trophy },
  { title: "VIT Bhopal University", detail: "Current CGPA 8.5 · B.Tech CSE (3rd Year)", icon: Award },
];

const softSkills = ["Leadership", "Communication", "Event Management", "Team Collaboration"];

const activities = [
  {
    role: "Vice President",
    org: "Linpack Club",
    description: "Leading the official technical club at VIT Bhopal University — organized numerous technical and non-technical events, workshops, and hackathons across campus.",
  },
  {
    role: "Active Volunteer",
    org: "NSS (National Service Scheme)",
    description: "Currently serving in community-driven social initiatives, outreach drives, and volunteer-led programs.",
  },
];

const projects = [
  {
    name: "Skin Algnosis",
    tag: "AI / Healthcare",
    description: "An AI-driven skin condition diagnosis tool that leverages machine learning to analyze skin images and provide preliminary insights — making early detection more accessible.",
    tech: ["Machine Learning", "Computer Vision", "Python"],
    icon: Brain,
  },
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-bold text-lg tracking-tight">
            <span className="text-gradient">Aditi</span>.
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
            ))}
          </nav>
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 px-6 bg-hero overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-primary/40" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-accent/30" />
        </div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-6 border-primary/40 bg-primary/10 text-primary-foreground/90">
              <Sparkles className="w-3 h-3 mr-1.5" /> Available for AI / SWE opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Hey, it's <span className="text-gradient">Aditi</span> 👋
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm an AI &amp; Software Engineer building intelligent, human-first products. Currently a 3rd year student at{" "}
              <span className="text-foreground font-medium">VIT Bhopal University</span> with a CGPA of{" "}
              <span className="text-foreground font-medium">8.5</span> — passionate about shipping AI-driven projects that matter.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]">
                <a href="#projects">View my work <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Contact me</a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Bhopal, India</span>
              <span className="hidden sm:flex items-center gap-2">Origin: Bihar, India</span>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0">
            <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-40 blur-2xl" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 shadow-[var(--shadow-elegant)]">
              <img src={aditiPhoto} alt="Aditi Prakash" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A bit about me.</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a third-year Computer Science student at <span className="text-foreground">VIT Bhopal University</span>,
              maintaining a CGPA of <span className="text-foreground">8.5</span>. My world revolves around AI — from
              training models to deploying them inside real products people can use.
            </p>
            <p>
              I love the intersection of <span className="text-foreground">machine learning</span>,
              <span className="text-foreground"> strong engineering fundamentals</span>, and
              <span className="text-foreground"> thoughtful frontend design</span>. When I'm not studying, I'm
              prototyping the next AI-driven idea.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Things I've built — turning AI research into useful, accessible tools.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.name} className="group relative p-8 bg-card/50 border-border/60 hover:border-primary/50 transition-all hover:shadow-[var(--shadow-elegant)] overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-[var(--shadow-glow)]">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary">{p.tag}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{p.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/60">{t}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}

            <Card className="p-8 bg-card/30 border-dashed border-border/60 flex flex-col items-center justify-center text-center min-h-[280px]">
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">More coming soon</h3>
              <p className="text-muted-foreground text-sm">New AI experiments are in the works.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Toolbox</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Experience.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], i) => {
              const Icon = [Brain, Code2, Layout][i];
              return (
                <Card key={category} className="p-6 bg-card/50 border-border/60">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((s) => (
                      <li key={s} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <Card className="mt-8 p-8 bg-gradient-to-br from-card/80 to-card/40 border-border/60">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-primary mb-2">Education</p>
                <h3 className="text-2xl font-bold">VIT Bhopal University</h3>
                <p className="text-muted-foreground mt-1">B.Tech Computer Science · 3rd Year</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Current CGPA</p>
                <p className="text-4xl font-bold text-gradient">8.5</p>
              </div>
            </div>
          </Card>

          {/* Languages */}
          <Card className="mt-6 p-8 bg-card/50 border-border/60">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((l) => (
                <span key={l} className="px-4 py-2 rounded-lg bg-gradient-primary/10 border border-primary/30 text-foreground font-medium">
                  {l}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Beyond — Achievements & Activities */}
      <section id="beyond" className="py-28 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Beyond Code</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Achievements & Activities.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {achievements.map((a) => {
              const Icon = a.icon;
              return (
                <Card key={a.title} className="p-6 bg-card/50 border-border/60 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-[var(--shadow-glow)] shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{a.title}</h3>
                    <p className="text-muted-foreground mt-1">{a.detail}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((a) => (
              <Card key={a.org} className="p-6 bg-card/50 border-border/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary">{a.role}</p>
                    <h3 className="font-bold text-lg">{a.org}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{a.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-6 p-8 bg-card/50 border-border/60">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <span key={s} className="px-4 py-2 rounded-lg bg-gradient-primary/10 border border-primary/30 text-foreground font-medium">
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something <span className="text-gradient">amazing.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Open to internships, collaborations, and conversations about AI. Drop a message — I usually reply within a day.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]">
            <a href="mailto:srivastavaditi07@gmail.com">
              <Mail className="w-4 h-4" /> srivastavaditi07@gmail.com
            </a>
          </Button>

          <div className="mt-12 flex justify-center gap-4">
            <a href="https://github.com/Adi-ti-06" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 rounded-full border border-border bg-card/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/aditi-prakash-26b4bb33b/" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 rounded-full border border-border bg-card/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:srivastavaditi07@gmail.com"
               className="w-12 h-12 rounded-full border border-border bg-card/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-border/40 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aditi Prakash · Built with care.
      </footer>
    </div>
  );
}
