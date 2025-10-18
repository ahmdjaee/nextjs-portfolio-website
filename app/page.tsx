import { getFeaturedProjects } from "@/lib/api";
import HomeContent from "./_components/_home-content";

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="min-h-screen">
      <HomeContent featuredProjects={featuredProjects} />
    </div>
  );
}
