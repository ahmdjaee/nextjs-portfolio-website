import ProjectContent from "./_components/_projects-content"
import { getAllProjects } from "@/lib/api"

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="min-h-screen pt-24 pb-20">
      <ProjectContent projects={projects} />
    </div>
  )
}
