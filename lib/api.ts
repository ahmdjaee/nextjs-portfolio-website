import type { Project, ApiResponse } from "./types"

const BASE_URL = "http://portfolio-ahmad-jaelani.test"

export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/projects`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (!response.ok) {
      throw new Error("Failed to fetch projects")
    }

    const result: ApiResponse<Project[]> = await response.json()
    return result.data
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/projects/featured`, {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch featured projects")
    }

    const result: ApiResponse<Project[]> = await response.json()
    return result.data
  } catch (error) {
    console.error("Error fetching featured projects:", error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/projects/${slug}`, {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch project")
    }

    const result: ApiResponse<Project> = await response.json()
    return result.data
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
}
