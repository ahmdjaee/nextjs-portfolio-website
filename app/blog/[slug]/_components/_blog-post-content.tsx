"use client"

import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardDescription } from "@/components/ui/card"
import Codeblock from "@/components/ui/codeblock"
import { Skeleton } from "@/components/ui/skeleton"
import { useQuery } from "@tanstack/react-query"
import { getBlogBySlug } from "@/lib/api"
import { queryKeys } from "@/lib/query-keys"
import { notFound } from "next/navigation"

function BlogPostContent({ slug }: { slug: string }) {
  const { data: post, isLoading, isError } = useQuery({
    queryKey: queryKeys.blogs.bySlug(slug),
    queryFn: () => getBlogBySlug(slug),
  })

  if (isError || (!isLoading && !post)) {
    notFound()
  }

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
          {isLoading ? (
            <div className="flex flex-col space-y-4">
              <Skeleton className="aspect-video rounded-lg" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ) : post ? (
            <>
              {/* Hero Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={post.thumbnail || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Header */}
              <div className="mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag.id} variant="secondary" className="mb-4">
                    {tag.name}
                  </Badge>
                ))}
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{post.title}</h1>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>
                      {new Date(post.published_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <CardDescription className="line-clamp-2 mb-3">{post.sub_title}</CardDescription>

              {/* Post Content */}
              <Codeblock content={post.content} />
            </>
          ) : null}
        </article>
      </div>
    </div>
  )
}

export default BlogPostContent
