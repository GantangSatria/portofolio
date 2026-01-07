import type { Achievement } from "@/types/achievements"

const achievements: Achievement[] = [
    {
        title: "2nd Place Software Development",
        venue: "SEVENT 9.0 Universitas Telkom Purwokerto",
        year: "2025",
        description: "Developed 'SpeakBuddy', an AI-powered platform for children with speech delay. Engineered the backend using Go (Fiber) & MongoDB/PostgreSQL, and built the frontend with Next.js. Integrated Google Cloud Speech API and Gemini LLM for voice analysis.",
        image: "/sevent.jpeg"
    },
    {
        title: "Best Project Collaboration - Software Engineer Path",
        venue: "Arkavidia Academya 9.0 Institut Teknologi Bandung",
        year: "2025",
        description: "Built 'MyCareer', a Flutter-based mobile app for informal workers. Implemented features like SkillQuest and JobPulse, and integrated AI-driven 'CareerBot' using Gemini API. Awarded for exceptional teamwork and agile execution.",
        image: "/arkav.jpeg"
    }
]

export default achievements;