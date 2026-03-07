import _ProjectDetailContent from "./_components/_project-detail-content"

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <_ProjectDetailContent slug={params.slug} />
}
