import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - in real app, this would come from a database or CMS
const projectData: Record<string, any> = {
  "1": {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built with modern web technologies",
    longDescription:
      "This full-stack e-commerce platform features a complete shopping experience with product browsing, cart management, secure checkout with Stripe integration, and an admin dashboard for managing products, orders, and customers. The application is built with performance and user experience in mind, featuring server-side rendering for optimal SEO and fast page loads.",
    image: "/modern-ecommerce-website-hero.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    year: "2024",
    role: "Full-Stack Developer",
    duration: "3 months",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Admin dashboard for inventory management",
      "Order tracking and email notifications",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing real-time inventory updates",
      "Optimizing database queries for large product catalogs",
      "Ensuring PCI compliance for payment processing",
    ],
    gallery: ["/ecommerce-product-page.png", "/ecommerce-checkout.png", "/ecommerce-admin-dashboard.png"],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id] || projectData["1"]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8 animate-fade-in">
          <Link href="/projects">
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </Button>

        <div className="animate-fade-in">
          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={20} />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={20} />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-muted-foreground">Role</h3>
                <p className="text-lg">{project.role}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-muted-foreground">Duration</h3>
                <p className="text-lg">{project.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-muted-foreground">Year</h3>
                <p className="text-lg">{project.year}</p>
              </CardContent>
            </Card>
          </div>

          {/* Project Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">About the Project</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature: string, index: number) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge: string, index: number) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-lg">{challenge}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image: string, index: number) => (
                <div key={index} className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
