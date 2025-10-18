import BlogContent from "./_components/_blog-content"
import { getAllBlogs } from "@/lib/api"

export default async function BlogPage() {
  const blogs = await getAllBlogs()

  return (
    <div className="min-h-screen pt-24 pb-20">
      <BlogContent blogs={blogs} />
    </div>
  )
}
