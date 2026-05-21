"use client";

import { ScrollAnimation } from "@/components/scroll-animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleIcon } from "@/lib/simple-icons";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Mail, MapPin, Monitor, Phone, Server, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedProjects } from "@/lib/api";
import { queryKeys } from "@/lib/query-keys";
import { Skeleton } from "@/components/ui/skeleton";

const skillCategories = {
  Frontend: {
    icon: Monitor,
    iconColor: "text-primary",
    skills: [
      "React",
      "Jquery",
      "Javascript",
      "Tailwind CSS",
      "Boostrap",
      "Ant Design",
      "Redux / Rtk Query",
      "HTML",
      "CSS",
    ],
  },
  Backend: {
    icon: Server,
    iconColor: "text-primary",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs", "Pusher"],
  },
  Tools: {
    icon: Wrench,
    iconColor: "text-primary",
    skills: ["Git / Github", "Postman", "Swagger", "Vercel", "Cpanel", "Figma"],
  },
  Other: {
    icon: Sparkles,
    iconColor: "text-primary",
    skills: ["Trello", "Testing"],
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
  Pusher: { slug: "pusher", color: "300D4F" },
  "Git / Github": { slug: "git", color: "F05032" },
  Postman: { slug: "postman", color: "FF6C37" },
  Swagger: { slug: "swagger", color: "85EA2D" },
  Vercel: { slug: "vercel", color: "FFFFFF" },
  Cpanel: { slug: "cpanel", color: "FF6C2C" },
  Figma: { slug: "figma", color: "F24E1E" },
  Trello: { slug: "trello", color: "0052CC" },
};

function HomeContent() {
  const { data: featuredProjects = [], isLoading } = useQuery({
    queryKey: queryKeys.projects.featured,
    queryFn: getFeaturedProjects,
  });

  return (
    <>
      <section className="relative flex min-h-[42rem] items-center overflow-hidden lg:min-h-screen">
        <div className="pointer-events-none absolute -right-32 top-24 size-80 rounded-full border border-primary/20" />
        <div className="pointer-events-none absolute -right-12 top-44 size-52 rounded-full border border-primary/10" />
        <div className="pointer-events-none absolute left-8 bottom-20 size-44 rounded-full border border-border" />
        <div className="pointer-events-none absolute left-16 bottom-28 size-20 rounded-full border border-primary/15" />
        <div className="pointer-events-none absolute left-0 top-24 h-px w-44 bg-border" />
        <div className="pointer-events-none absolute left-44 top-24 size-2 rounded-full bg-primary/45" />
        <div className="pointer-events-none absolute left-16 top-24 h-16 w-px bg-border" />
        <div className="pointer-events-none absolute right-0 bottom-24 h-px w-48 bg-border" />
        <div className="pointer-events-none absolute right-48 bottom-24 size-2 rounded-full bg-primary/40" />
        <div className="pointer-events-none absolute right-20 bottom-24 h-16 w-px bg-border" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-px w-32 -rotate-45 bg-primary/10" />

        <div className="relative z-10 container mx-auto px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.75fr] lg:items-center">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 flex flex-wrap items-center gap-3"
              >
                <Badge variant="secondary" className="border-primary/20 px-3 py-1 text-primary">
                  Fullstack Developer
                </Badge>
                <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
                  <span className="size-2 rounded-full bg-primary" />
                  Available for selected projects
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h1 className="max-w-5xl text-4xl font-bold leading-tight text-balance sm:text-6xl lg:text-7xl">
                  Building web products that feel{" "}
                  <span className="text-primary">fast, clear, and usable.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
                  I design and build responsive applications with React, Next.js, Laravel, and
                  clean API workflows, from landing pages to internal dashboards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-md bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                >
                  <Link href="/projects">
                    View Selected Work <ArrowRight className="ml-1" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-6">
                  <Link href="/contact">Discuss a Project</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {["Next.js", "React", "Laravel", "Tailwind CSS", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background/70 px-3 py-1 text-sm text-muted-foreground backdrop-blur"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="rounded-lg border border-border bg-background/75 p-5 shadow-xl shadow-black/5 backdrop-blur"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Code2 size={22} />
                </span>
                <div>
                  <p className="font-semibold">Ahmad Jaelani</p>
                  <p className="text-sm text-muted-foreground">Web developer portfolio</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-4 py-3">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium text-foreground">Fullstack Apps</span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-4 py-3">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium text-foreground">Web Development</span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-4 py-3">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} /> Based in
                  </span>
                  <span className="font-medium text-foreground">Indonesia</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-2 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation direction="up">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Some of my recent work that I'm proud of
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
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
              ))
            : featuredProjects.map((project, index) => (
                <ScrollAnimation key={project.id} direction="up" delay={index * 0.1}>
                  <Link href={`/projects/${project.slug}`}>
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

        <ScrollAnimation direction="up" className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </ScrollAnimation>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation direction="up">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              A categorized view of the tools and technologies I use across projects
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, categoryData], index) => (
            <ScrollAnimation key={category} direction="up" delay={index * 0.08}>
              <div className="border-t border-border pt-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="flex items-center gap-3 text-lg font-semibold sm:text-xl">
                    <span className="flex size-9 items-center justify-center rounded-md bg-muted">
                      <categoryData.icon size={18} className={categoryData.iconColor} />
                    </span>
                    {category}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {categoryData.skills.length} skills
                  </span>
                </div>

                <div className="mt-5 divide-y divide-border">
                  {categoryData.skills.map((skill) => {
                    const icon = skillIcons[skill];

                    return (
                      <div
                        key={skill}
                        className="group flex items-center gap-3 py-3"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted/70">
                          {icon?.slug ? (
                            <SimpleIcon
                              slug={icon.slug}
                              color={icon.color}
                              className="size-5"
                            />
                          ) : (
                            <Code2 size={18} className={categoryData.iconColor} />
                          )}
                        </span>
                        <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Contact Preview */}
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
