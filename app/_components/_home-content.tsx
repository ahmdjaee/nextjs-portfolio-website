"use client";

import { useEffect, useState } from "react";
import { ScrollAnimation } from "@/components/scroll-animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SimpleIcon } from "@/lib/simple-icons";
import { portfolioSkills } from "@/lib/skills";
import { getFeaturedProjects } from "@/lib/api";
import { queryKeys } from "@/lib/query-keys";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Gamepad2,
  Mail,
  Monitor,
  Phone,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const typewriterPhrases = [
  "build responsive apps",
  "connect API workflows",
  "craft clean dashboards",
  "improve product UX",
];

const pixelRunnerPixels = [
  "bg-transparent",
  "bg-primary",
  "bg-primary",
  "bg-transparent",
  "bg-primary",
  "bg-foreground",
  "bg-foreground",
  "bg-primary",
  "bg-transparent",
  "bg-primary",
  "bg-primary",
  "bg-transparent",
  "bg-primary",
  "bg-transparent",
  "bg-transparent",
  "bg-primary",
];

const skillCategories = {
  Frontend: {
    icon: Monitor,
    skills: portfolioSkills.Frontend,
  },
  Backend: {
    icon: Server,
    skills: portfolioSkills.Backend,
  },
  Tools: {
    icon: Wrench,
    skills: portfolioSkills.Tools,
  },
  Other: {
    icon: Sparkles,
    skills: portfolioSkills.Other,
  },
};

const skillIcons: Record<string, { slug?: string; color?: string }> = {
  React: { slug: "react", color: "61DAFB" },
  Jquery: { slug: "jquery", color: "0769AD" },
  Javascript: { slug: "javascript", color: "F7DF1E" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  Boostrap: { slug: "bootstrap", color: "7952B3" },
  "Ant Design": { slug: "antdesign", color: "0170FE" },
  "Redux / Rtk Query": { slug: "redux", color: "764ABC" },
  HTML: { slug: "html5", color: "E34F26" },
  CSS: { slug: "css", color: "663399" },
  Laravel: { slug: "laravel", color: "FF2D20" },
  PHP: { slug: "php", color: "777BB4" },
  MySQL: { slug: "mysql", color: "4479A1" },
  Nginx: { slug: "nginx", color: "009639" },
  Apache: { slug: "apache", color: "D22128" },
  Pusher: { slug: "pusher", color: "300D4F" },
  "Git / Github": { slug: "git", color: "F05032" },
  Postman: { slug: "postman", color: "FF6C37" },
  Swagger: { slug: "swagger", color: "85EA2D" },
  Vercel: { slug: "vercel", color: "FFFFFF" },
  Cpanel: { slug: "cpanel", color: "FF6C2C" },
  Figma: { slug: "figma", color: "F24E1E" },
  Trello: { slug: "trello", color: "0052CC" },
  "Open Project": { slug: "openproject", color: "0770B8" },
  Copilot: { slug: "githubcopilot", color: "FFFFFF" },
  v0: { slug: "vercel", color: "FFFFFF" },
};

function HomeContent() {
  const { data: featuredProjects = [], isLoading } = useQuery({
    queryKey: queryKeys.projects.featured,
    queryFn: getFeaturedProjects,
  });
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [runnerClicks, setRunnerClicks] = useState(0);
  const [easterEggUnlocked, setEasterEggUnlocked] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];

    if (typedText.length < currentPhrase.length) {
      const typingTimeout = window.setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 70);

      return () => window.clearTimeout(typingTimeout);
    }

    const resetTimeout = window.setTimeout(() => {
      setTypedText("");
      setPhraseIndex((currentIndex) => (currentIndex + 1) % typewriterPhrases.length);
    }, 1400);

    return () => window.clearTimeout(resetTimeout);
  }, [phraseIndex, typedText]);

  const handlePixelRunnerClick = () => {
    setRunnerClicks((currentClicks) => {
      const nextClicks = currentClicks + 1;

      if (nextClicks >= 5) {
        setEasterEggUnlocked(true);
      }

      return nextClicks;
    });
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute -right-28 top-24 size-80 rounded-full border border-primary/20" />
        <div className="pointer-events-none absolute -right-10 top-44 size-52 rounded-full border border-border" />
        <div className="pointer-events-none absolute left-8 bottom-24 size-48 rounded-full border border-primary/15" />
        <div className="pointer-events-none absolute left-20 bottom-36 size-20 rounded-full border border-border" />
        <div className="pointer-events-none absolute left-0 top-28 h-px w-44 bg-border" />
        <div className="pointer-events-none absolute left-44 top-28 size-2 rounded-full bg-primary/45" />
        <div className="pointer-events-none absolute right-0 bottom-28 h-px w-48 bg-border" />
        <div className="pointer-events-none absolute right-48 bottom-28 size-2 rounded-full bg-primary/35" />

        <div className="container relative z-10 mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <Badge variant="secondary" className="border-primary/20 px-3 py-1 text-primary">
                Fullstack Developer
              </Badge>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
                <span className="size-2 rounded-full bg-primary" />
                Available for selected projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-5xl text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
            >
              Building web products that feel{" "}
              <span className="text-primary">fast, clear, and usable.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl"
            >
              I design and build responsive applications with React, Next.js, Laravel, and clean API
              workflows, from landing pages to internal dashboards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="h-12 rounded-md px-6">
                <Link href="/projects">
                  View Selected Work <ArrowRight className="ml-1" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-6">
                <Link href="/contact">Discuss a Project</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg border border-border bg-card p-5 shadow-2xl shadow-black/10">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-400" />
                  <span className="size-2.5 rounded-full bg-amber-300" />
                  <span className="size-2.5 rounded-full bg-primary" />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      developer profile
                    </p>
                    <h2 className="mt-3 text-2xl font-bold leading-tight">Ahmad Jaelani</h2>
                    {/* <p className="mt-2 text-sm text-muted-foreground">
                      I design and build responsive applications with React, Next.js, Laravel, and clean API workflows, from landing pages to internal dashboards.
                    </p> */}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {[
                    ["Role", "Fullstack"],
                    ["Focus", "Web Apps"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-md border border-border bg-card px-3 py-2">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-md bg-muted/60 p-3 font-mono text-xs text-muted-foreground">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Code2 size={16} className="text-primary" />
                    <span>capabilities.ts</span>
                  </div>
                  <p className="font-mono text-sm sm:text-base">
                    <span className="text-muted-foreground">me.</span>
                    <span className="text-primary">builds</span>
                    <span className="text-muted-foreground">(</span>
                    <span>{typedText || " "}</span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY }}
                      className="text-primary"
                    >
                      |
                    </motion.span>
                    <span className="text-muted-foreground">)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-border bg-background p-4">
              <div className="relative h-16 overflow-hidden rounded-md bg-muted/50">
                <div className="absolute inset-x-0 bottom-3 h-1 bg-border" />
                {[0, 1, 2, 3].map((coin) => (
                  <motion.span
                    key={coin}
                    className="absolute top-3 size-4 rounded-full border border-amber-500/50 bg-amber-300"
                    style={{ left: `${20 + coin * 18}%` }}
                    animate={{ y: [0, -6, 0], rotateY: [0, 180, 360] }}
                    transition={{
                      duration: 1.6,
                      delay: coin * 0.16,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                ))}
                <motion.button
                  type="button"
                  onClick={handlePixelRunnerClick}
                  className="absolute bottom-5 left-0 grid size-11 grid-cols-4 grid-rows-4 gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  animate={{ left: ["2%", "82%", "2%"], y: [0, -7, 0, -3, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  aria-label="Click the pixel runner"
                >
                  {pixelRunnerPixels.map((pixel, index) => (
                    <span key={index} className={pixel} />
                  ))}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {easterEggUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg border border-primary/30 bg-background p-4 shadow-2xl"
          >
            <p className="font-semibold">Bonus unlocked</p>
            <p className="mt-1 text-sm text-muted-foreground">
              You found the tiny dev-game Easter egg. Curiosity gets extra points here.
            </p>
          </motion.div>
        )}
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation direction="up">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Some of my recent work that I'm proud of
            </p>
          </div>
        </ScrollAnimation>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="h-full">
                <Skeleton className="aspect-video rounded-t-lg rounded-b-none" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full mt-1" />
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <ScrollAnimation key={project.id} direction="up" delay={index * 0.1}>
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <Card className="group hover:border-primary transition-all duration-300 h-full">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag.id} variant="secondary">
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              No featured projects yet.
            </CardContent>
          </Card>
        )}

        <ScrollAnimation direction="up" className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </ScrollAnimation>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation direction="up">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              A categorized view of the tools and technologies I use across projects
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(skillCategories).map(([category, categoryData], index) => (
            <ScrollAnimation key={category} direction="up" delay={index * 0.08} className="h-full">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-4">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <categoryData.icon size={18} />
                    </span>
                    <div>
                      <h3 className="font-semibold">{category}</h3>
                      <p className="text-xs text-muted-foreground">
                        {categoryData.skills.length} items
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {categoryData.skills.map((skill) => {
                      const icon = skillIcons[skill];

                      return (
                        <div
                          key={skill}
                          className="flex aspect-square flex-col items-center justify-center gap-2 rounded-md border border-border bg-background p-2 text-center"
                          title={skill}
                        >
                          {icon?.slug ? (
                            <SimpleIcon slug={icon.slug} color={icon.color} className="size-5" />
                          ) : (
                            <Code2 size={16} className="text-primary" />
                          )}
                          <span className="line-clamp-2 text-[11px] leading-tight text-muted-foreground">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation direction="up">
          <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-card">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
            <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

            <CardContent className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:p-12">
              <div>
                <Badge variant="secondary" className="mb-5 border-primary/20 text-primary">
                  Available for freelance
                </Badge>
                <h2 className="max-w-2xl text-2xl font-bold leading-tight sm:text-4xl">
                  Let's turn your next idea into a clean, reliable web experience.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Share the goal, the rough scope, or even just the messy first version. I can help
                  shape it into a product that feels fast, clear, and easy to use.
                </p>
              </div>

              <div className="space-y-4 rounded-lg border border-border/70 bg-background/70 p-5 backdrop-blur">
                <div className="space-y-3">
                  <a
                    href="mailto:ahmadjaelani8685@gmail.com"
                    className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Mail size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-foreground">Email</span>
                      <span className="block truncate">ahmadjaelani8685@gmail.com</span>
                    </span>
                  </a>

                  <a
                    href="tel:+62895331621985"
                    className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Phone size={18} />
                    </span>
                    <span>
                      <span className="block font-semibold text-foreground">Phone</span>
                      <span className="block">+62 895 3316 21985</span>
                    </span>
                  </a>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Start a Conversation <ArrowRight className="ml-1" size={20} />
                  </Link>
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Usually replies within 24 hours.
                </p>
              </div>
            </CardContent>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
}

export default HomeContent;
