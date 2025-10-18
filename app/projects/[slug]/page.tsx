import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { asset, BASE_URL, getProjectBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

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
          <div className="aspect-video overflow-hidden rounded-lg mb-8 border shadow-sm">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag.id} variant="secondary" className="text-sm">
                  {tag.name}
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
            <div
              className="text-lg text-muted-foreground leading-relaxed prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          </div>

          {/* Features */}
          {project.features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <Card key={feature.id}>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p>{feature.feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.challenges.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge) => (
                  <Card key={challenge.id}>
                    <CardContent className="p-6">
                      <p className="text-lg">{challenge.challenge}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image) => (
                  <div key={image.id} className="aspect-video overflow-hidden rounded-lg border shadow-sm">
                    <img
                      src={image.imagePath || "/placeholder.svg"}
                      alt={image.caption || project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {image.caption && (
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
