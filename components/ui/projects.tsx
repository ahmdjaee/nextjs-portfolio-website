"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Project, Tag } from "@/lib/types";
import { Search } from "lucide-react";
import { Input } from "./input";

function ProjectContent({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(filter.toLowerCase()) ||
    project.tags.some((tag : Tag) => tag.name.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">All Projects</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A collection of projects I've worked on over the years
        </p>

        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={20}
          />
          <Input
            onChange={(e) => {
              setFilter(e.currentTarget.value);
            }}
            type="text"
            placeholder="Search projects..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
            <Card
              className="group hover:border-primary transition-all duration-300 h-full animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag.id} variant="secondary">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectContent;
