export interface Tag {
  id: number
  name: string
  slug: string
  color: string
}

export interface Feature {
  id: number
  feature: string
  order: number
}

export interface Challenge {
  id: number
  challenge: string
  order: number
}

export interface GalleryImage {
  id: number
  imagePath: string
  caption: string
  order: number
}

export interface Project {
  id: number
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  tags: Tag[]
  year: number
  role: string
  duration: string
  liveUrl: string | null
  githubUrl: string | null
  isFeatured: boolean
  features: Feature[]
  challenges: Challenge[]
  gallery: GalleryImage[]
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
}
