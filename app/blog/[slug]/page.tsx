import _BlogPostContent from "./_components/_blog-post-content"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <_BlogPostContent slug={params.slug} />
}
