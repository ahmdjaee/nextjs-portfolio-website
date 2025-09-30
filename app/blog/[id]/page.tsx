import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data
const blogData: Record<string, any> = {
  "1": {
    title: "Getting Started with Next.js 14",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tutorial",
    image: "/nextjs-development-hero.jpg",
    content: `
      <p>Next.js 14 brings exciting new features and improvements that make building React applications even better. In this article, we'll explore the key features and how to get started.</p>
      
      <h2>What's New in Next.js 14</h2>
      <p>The latest version of Next.js introduces several groundbreaking features including improved performance, better developer experience, and new APIs that make building web applications more intuitive.</p>
      
      <h3>Server Actions</h3>
      <p>Server Actions are a new way to handle form submissions and data mutations directly from your React components. This eliminates the need for separate API routes in many cases.</p>
      
      <h3>Partial Prerendering</h3>
      <p>This experimental feature allows you to combine static and dynamic content in the same route, giving you the best of both worlds.</p>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 14 project, simply run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 continues to push the boundaries of what's possible with React. Whether you're building a small personal project or a large-scale application, these new features will help you build better, faster.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogData[params.id] || blogData["1"]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8 animate-fade-in">
          <Link href="/blog">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
        </Button>

        <article className="animate-fade-in">
          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Post Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{post.title}</h1>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-muted prose-pre:border prose-pre:border-border"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}
