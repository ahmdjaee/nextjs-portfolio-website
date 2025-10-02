import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBlogBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Codeblock from "@/components/ui/codeblock";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    notFound();
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
              {/* <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div> */}
            </div>
          </div>

          {/* Post Content */}
          <Codeblock content={post.content}/>
        </article>
      </div>
    </div>
  );
}
