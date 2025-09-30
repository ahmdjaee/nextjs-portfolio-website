import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    year: "2024",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    image: "/task-management-dashboard.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    year: "2024",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio website with blog and project showcase",
    image: "/portfolio-website-design.png",
    tags: ["Next.js", "Tailwind", "MDX"],
    year: "2023",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "/social-media-analytics-dashboard.png",
    tags: ["React", "Chart.js", "API Integration"],
    year: "2023",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    image: "/weather-app-interface.png",
    tags: ["React Native", "API", "Geolocation"],
    year: "2023",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Content management system for bloggers",
    image: "/blog-cms-interface.jpg",
    tags: ["Next.js", "Sanity", "TypeScript"],
    year: "2022",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-lg text-muted-foreground mb-8">A collection of projects I've worked on over the years</p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input type="text" placeholder="Search projects..." className="pl-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
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
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
