export const queryKeys = {
  projects: {
    all: ["projects"] as const,
    featured: ["projects", "featured"] as const,
    bySlug: (slug: string) => ["projects", slug] as const,
  },
  blogs: {
    all: ["blogs"] as const,
    bySlug: (slug: string) => ["blogs", slug] as const,
  },
}
