export interface Project {
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl?: string | null
  projectTypes: string[]
  techStack: string[]
}
export default Project