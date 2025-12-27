import type { ProjectCardProps } from "@/components/cards/project-card";

const projects: ProjectCardProps[] = [
    {
        title: "Speakbuddy",
        description: "",
        image: "/prj-speakbuddy.png",
        githubUrl: "https://github.com/Speakbuddy-Sevent",
        liveUrl: "https://speakbuddy-id.vercel.app/",
        projectTypes: ["Web", "Fullstack"],
        techStack: ["Next.js", "Tailwind", "Go", "Fiber", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Speakbuddyy",
        description: "",
        image: "/prj-speakbuddy.png",
        githubUrl: "https://github.com/Speakbuddy-Sevent",
        liveUrl: "https://speakbuddy-id.vercel.app/",
        projectTypes: ["Web", "Mobile"],
        techStack: ["Next.js", "Tailwind", "Go", "Fiber", "PostgreSQL", "MongoDB"],
    }
]

export default projects;