import type { Project } from "@/types/projects";

const projects: Project[] = [
    {
        title: "Speakbuddy",
        description: "SpeakBuddy is Al-powered platform designed to support children with speech delay through interactive exercise and real-time feedback. Our goal is to create a platform that not only helps improve children's speech development, but also allows parents to consult with professional therapists.", // gitu lah pokoknya
        image: "/prj-speakbuddy.png",
        githubUrl: "https://github.com/Speakbuddy-Sevent",
        liveUrl: "https://speakbuddy-id.vercel.app/",
        projectTypes: ["Web", "Fullstack"],
        techStack: ["Next.js", "React", "Tailwind", "Go", "Fiber", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Desa Gondoruso",
        description: "Developed a comprehensive digital profile platform for Gondoruso Village to enhance local governance transparency and public information accessibility. Built with a modern tech stack including Next.js, TypeScript, and PostgreSQL, the application features an integrated administrative system managed through Supabase for real-time data handling. The project focuses on delivering a seamless user experience for villagers to access news, public services, and village official information.",
        image: "/prj-desagondoruso.png",
        githubUrl: "https://github.com/GantangSatria/webgondoruso",
        liveUrl: "https://desagondoruso.web.id/",
        projectTypes: ["Web", "Fullstack"],
        techStack: ["Next.js", "React", "Tailwind", "Supabase", "PostgreSQL"],
    },
    {
        title: "MyCareer",
        description: "MyCareer is a mobile platform built to accelerate the transition of informal workers into the formal economy through a digital ecosystem. The application features Flutter and GetX architecture, incorporating SkillQuest for vocational training and CareerBot, an AI career coach powered by the Gemini API. ",
        image: "/prj-mycareer.png",
        githubUrl: "https://github.com/Team-3-Project-Collaboration/MyCareer-FE",
        projectTypes: ["Mobile"],
        techStack: ["Flutter", "Dart"],
    },
    {
        title: "Navi-Go",
        description: "NaviGo is a modern legal tech platform designed to streamline legal processes through automated document generation, AI-driven MOU analysis, and expert legal consultations. Built with Next.js and TypeScript, the application provides a secure and efficient ecosystem for users to manage legal needs, from seeking AI-powered legal advice to connecting with certified lawyers. The platform emphasizes a seamless user experience while ensuring high accuracy and accessibility in legal service delivery.",
        image: "/prj-navigo.png",
        githubUrl: "https://github.com/NaviGo-LawInGlory",
        projectTypes: ["Web", "Frontend"],
        techStack: ["Next.js", "React", "Tailwind"],
    },
    {
        title: "kITABAYAR",
        description: "kITA BAYAR is a backend microservices-based system built for a seamless online food ordering platform. The architecture features five independent services, Auth, User, Restaurant, Order, and Payment, to ensure high scalability and modularity. The system integrates the Midtrans payment gateway for secure transaction handling and uses Docker and Docker Compose for consistent containerized deployment. Developed with a modern stack including Next.js, React, and PHP (Lumen), the platform focuses on delivering efficient food service integration and a smooth checkout experience.",
        image: "/prj-kitabayar.png",
        githubUrl: "https://github.com/GantangSatria/FoodMicroservice",
        projectTypes: ["Web", "Fullstack"],
        techStack: ["Next.js", "React", "Tailwind", "Lumen", "Midtrans", "Docker", "MySQL"],
    },
    {
        title: "2kang",
        description: "2kang is a comprehensive mobile service platform designed to streamline the process of finding and hiring certified household technicians. The application features a dual-role ecosystem where users can browse professional profiles, compare service rates, and schedule repairs, while technicians can manage job requests and showcase their verified expertise. Developed with a robust Kotlin and Jetpack Compose frontend and a Go (Fiber) backend, the platform ensures a secure environment by implementing internal document verification for all registered service providers to maintain high service standards.",
        image: "/prj-2kang.png",
        githubUrl: "https://github.com/GantangSatria/2Kang",
        projectTypes: ["Mobile", "Fullstack"],
        techStack: ["Kotlin", "Jetpack Compose", "Go", "Fiber", "PostgreSQL"],
    },
    {
        title: "LegaLapor",
        description: "LegaLapor is a comprehensive legal service and community platform designed to provide accessible legal aid and reporting tools for the public. The application features a Kotlin and Jetpack Compose architecture, integrated with Firebase to provide real-time services and secure data management. The platform enables users to search for certified lawyers, submit formal legal complaints, and engage in real-time consultations via an in-app chat system. Additionally, the integrated public forum allows for interactive legal discussions and information sharing within a unified legal ecosystem.",
        image: "/prj-legalapor.png",
        githubUrl: "https://github.com/GantangSatria/LegaLapor",
        projectTypes: ["Mobile", "Fullstack"],
        techStack: ["Kotlin", "Jetpack Compose", "Firebase"],
    },
    {
        title: "HelpMap",
        description: "HelpMap is a community-driven mobile platform designed to connect individuals in need of immediate assistance with nearby volunteers. The application features a real-time ecosystem where requesters can post help requests and volunteers can provide aid based on geographic proximity. Developed with Flutter and GetX, the platform integrates Firebase for real-time data synchronization and secure chat functionality. To ensure efficient service delivery, the app incorporates a dynamic routing system that provides volunteers with optimized navigation routes to the requester's precise location.",
        image: "/prj-helpmap.png",
        githubUrl: "https://github.com/GantangSatria/help_on_maps",
        projectTypes: ["Mobile", "Fullstack"],
        techStack: ["Flutter", "Dart", "GetX", "Firebase"],
    },
    {
        title: "Ecloudmerce",
        description: "Ecloudmerce is a scalable e-commerce platform engineered to demonstrate high-availability and robust cloud architecture. The application is built with a Next.js and TypeScript frontend, integrated with a comprehensive suite of Amazon Web Services (AWS) to handle production-grade traffic. By leveraging AWS EC2 for scalable compute power and AWS RDS for managed MySQL database services, the platform ensures data integrity and performance. The architecture further utilizes AWS S3 for optimized static asset storage and AWS ELB (Elastic Load Balancing) to efficiently distribute incoming traffic, providing a seamless and reliable shopping experience.",
        image: "/prj-ecloudmerce.png",
        githubUrl: "https://github.com/GantangSatria/ecloudmerce",
        projectTypes: ["Web", "Fullstack"],
        techStack: ["Next.js", "React", "Tailwind", "MySQL", "AWS EC2", "AWS RDS", "AWS S3", "AWS ELB"],
    },
]

export default projects;