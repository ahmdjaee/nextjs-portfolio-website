"use client";

import { ScrollAnimation } from "@/components/scroll-animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleIcon } from "@/lib/simple-icons";
import { Project } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const techStack = [
  { name: "Laravel", slug: "laravel", color: "FF2D20" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Javascript", slug: "javascript", color: "F7DF1E" },
  { name: "Jquery", slug: "jquery", color: "0769AD" },
  { name: "MySQL", slug: "mysql", color: "4169E1" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "Vercel", slug: "vercel", color: "4169E1" },
  { name: "Chatgpt", slug: "openai", color: "74AA9C" },
  { name: "Claude", slug: "claude", color: "D97757" },
];

function HomeContent({ featuredProjects }: { featuredProjects: Project[] }) {
  return (
    <>
      <section className="relative min-h-[38rem] lg:min-h-screen flex lg:items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 filter brightness-100 invert dark:filter-none"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
                Hi, I'm <span className="text-primary">Ahmad Jaelani</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                A passionate full-stack developer specializing in building exceptional digital
                experiences. I create modern, responsive, and user-friendly web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get In Touch</Link>
              </Button>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Some of my recent work that I'm proud of
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-lg text-muted-foreground">
              Technologies I work with on a daily basis
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <ScrollAnimation key={tech.name} direction="up" delay={index * 0.05}>
              <Card className="group hover:border-primary transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <SimpleIcon slug={tech.slug} color={tech.color} className="w-12 h-12" />
                  <p className="font-semibold text-center">{tech.name}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Contact Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation direction="up">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8 sm:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have a project in mind? Let's discuss how I can help bring your ideas to life.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground">Email:</span>{" "}
                      ahmadjaelani8685@gmail.com
                    </div>
                    <div className="hidden sm:block">•</div>
                    <div>
                      <span className="font-semibold text-foreground">Phone:</span> +62 877 3526
                      1470
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      Contact Me <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </section>
    </>
  );
}

export default HomeContent;
