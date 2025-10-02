import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { asset, getFeaturedProjects } from "@/lib/api";
import { SimpleIcon } from "@/lib/simple-icons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const techStack = [
  { name: "Laravel", slug: "laravel", color: "#000000" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Javascript", slug: "javascript", color: "#3178C6" },
  { name: "Jquery", slug: "jquery", color: "#339933" },
  { name: "MySQL", slug: "mysql", color: "#4169E1" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
  { name: "Bootstrap", slug: "bootstrap", color: "#47A248" },
  { name: "Git", slug: "git", color: "#2496ED" },
];

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Hi, I'm <span className="text-primary">Ahmad Jaelani</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            A passionate full-stack developer specializing in building exceptional digital
            experiences. I create modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex flex-wrap gap-4">
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
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">Some of my recent work that I'm proud of</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <Card
                className="group hover:border-primary transition-all duration-300 h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground">Technologies I work with on a daily basis</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <Card
              key={tech.name}
              className="group hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                <SimpleIcon slug={tech.slug} color={tech.color} className="w-12 h-12" />
                <p className="font-semibold text-center">{tech.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                    <span className="font-semibold text-foreground">Phone:</span> +62 877 3526 1470
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
      </section>
    </div>
  );
}
