"use client"

import type { Blog } from "@/lib/types"
import { Calendar, Search } from "lucide-react"
import { useState } from "react"
import { Input } from "./input"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { ScrollAnimation } from "@/components/scroll-animations"
import { EmptyState } from "./empty-state"
import { BookOpen } from "lucide-react"
import { Button } from "./button"

function BlogContent({ blogs }: { blogs: Blog[] }) {
  const [filter, setFilter] = useState("")

  const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollAnimation direction="up">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground mb-8">Thoughts, tutorials, and insights about web development</p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              onChange={(e) => {
                setFilter(e.currentTarget.value)
              }}
              type="text"
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
        </div>
      </ScrollAnimation>

      {filteredBlogs.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No articles found"
          description={
            filter
              ? "Try adjusting your search terms to find what you're looking for."
              : "No articles available at the moment. Check back soon!"
          }
          action={
            filter ? (
              <Button variant="outline" onClick={() => setFilter("")}>
                Clear search
              </Button>
            ) : undefined
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => (
            <ScrollAnimation key={blog.id} direction="up" delay={index * 0.05}>
              <Link href={`/blog/${blog.slug}`}>
                <Card className="group hover:border-primary transition-all duration-300 h-full">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={blog.thumbnail || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {blog.tags.map((tag) => (
                        <Badge variant="secondary" key={tag.id}>
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{blog.sub_title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>
                          {new Date(blog.published_at).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogContent
