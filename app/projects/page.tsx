import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { asset, BASE_URL, getAllProjects } from "@/lib/api";
import ProjectContent from "@/components/ui/projects";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <ProjectContent projects={projects} />
    </div>
  );
}
