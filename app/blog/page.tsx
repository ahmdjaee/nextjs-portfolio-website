import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn about the latest features in Next.js 14 and how to leverage them in your projects",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tutorial",
    image: "/nextjs-development.png",
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt: "Best practices for structuring and scaling React applications for production",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Best Practices",
    image: "/react-architecture.jpg",
  },
  {
    id: 3,
    title: "TypeScript Tips and Tricks",
    excerpt: "Advanced TypeScript patterns that will make your code more maintainable",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Tutorial",
    image: "/typescript-code.png",
  },
  {
    id: 4,
    title: "Optimizing Web Performance",
    excerpt: "Techniques to improve your website loading speed and user experience",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Performance",
    image: "/web-performance-optimization.png",
  },
  {
    id: 5,
    title: "Modern CSS Techniques",
    excerpt: "Exploring modern CSS features like Grid, Flexbox, and Container Queries",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "CSS",
    image: "/modern-css-design.jpg",
  },
  {
    id: 6,
    title: "API Design Best Practices",
    excerpt: "How to design RESTful APIs that are intuitive and easy to use",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Backend",
    image: "/api-development.png",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground mb-8">Thoughts, tutorials, and insights about web development</p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input type="text" placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card
                className="group hover:border-primary transition-all duration-300 h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
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
