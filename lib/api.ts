import type { Project, ApiResponse, Blog } from "./types";

export const BASE_URL = "https://ahmad-jaelani-portfolio.my.id";
export const asset = (path: string) => BASE_URL + path;

export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/projects`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const result: ApiResponse<Project[]> = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/projects/featured`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch featured projects");
    }

    const result: ApiResponse<Project[]> = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/projects/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch project");
    }

    const result: ApiResponse<Project> = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

/** 
 * BLOG API
 */

export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const result: ApiResponse<Blog[]> = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}


export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }

    const result: ApiResponse<Blog> = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
