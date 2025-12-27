import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl?: string | null
  projectTypes: string[]
  techStack: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  projectTypes = [],
  techStack = [],
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=400&width=600&query=project+screenshot"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {projectTypes.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <Badge key={type} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {type}
              </Badge>
            ))}
          </div>
        )}

        <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{description}</p>

        {techStack.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span key={tech} className="text-xs font-medium text-muted-foreground/80">
                #{tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-9 gap-2 transition-colors hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          {liveUrl && (
            <Button asChild size="sm" className="h-9 gap-2">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
