import type { Project } from "@/types/projects";

const projects: Project[] = [
    {
        title: "Speakbuddy",
        description: "An AI integrated website that help children with speech delay to ....", // gitu lah pokoknya
        image: "/prj-speakbuddy.png",
        githubUrl: "https://github.com/Speakbuddy-Sevent",
        liveUrl: "https://speakbuddy-id.vercel.app/",
        projectTypes: ["Web", "Fullstack"],
        techStack: ["Next.js", "React", "Tailwind", "Go", "Fiber", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Desa Gondoruso",
        description: "",
        image: "/prj-desagondoruso.png",
        githubUrl: "https://github.com/GantangSatria/webgondoruso",
        liveUrl: "https://desagondoruso.web.id/",
        projectTypes: ["Web", "Frontend"],
        techStack: ["Next.js", "React", "Tailwind", "Supabase", "PostgreSQL"],
    },
    {
        title: "MyCareer",
        description: "",
        image: "",
        githubUrl: "https://github.com/Team-3-Project-Collaboration/MyCareer-FE",
        projectTypes: ["Mobile"],
        techStack: ["Flutter", "Dart"],
    },
    {
        title: "HelpMap",
        description: "",
        image: "",
        githubUrl: "https://github.com/GantangSatria/help_on_maps",
        projectTypes: ["Mobile"],
        techStack: ["Flutter", "Dart", "GetX"],
    },
    {
        title: "Navi-Go",
        description: "",
        image: "",
        githubUrl: "https://github.com/GantangSatria/help_on_maps",
        projectTypes: ["Frontend"],
        techStack: ["Next.js", "React", "Tailwind"],
    },
]

export default projects;