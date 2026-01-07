"use client"

import Image from "next/image";
import ProfileButton from "@/components/profilebtn";
import ProjectCard from "@/components/cards/project-card";
import projects from "@/data/projects";
import achievements from "@/data/achievements";
import experiences from "@/data/experiences";
import HeroScene from "@/components/hero-scene"
import AchievementRow from "@/components/row/achievement-row";
import ExperienceRow from "@/components/row/experience-row";
import HeroBannerText from "@/components/hero-banner-text";

import { useState } from "react";

export default function Home() {
  const [selectedType, setSelectedType] = useState<string>("All");

  const projectTypes = [
    "All",
    ...Array.from(
      new Set(projects.flatMap((project) => project.projectTypes))
    ),
  ];

  const filteredProjects =
  selectedType === "All"
      ? projects
      : projects.filter((project) =>
          project.projectTypes.includes(selectedType)
        );

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <div id="landing" className="relative h-dvh w-full flex flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left text-white">
          <HeroScene />

          <div className="container relative z-1 mx-auto px-6 text-center">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm transition-colors hover:bg-white/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Available for new projects
            </div> */}

            <HeroBannerText/>

          </div>
        </div>
        <div id="profile" className="min-h-dvh w-full justify-items-center px-6 py-32 sm:px-16">
          <div className="container max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-12">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-64 h-64 bg-zinc-900 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/Foto.jpg"
                  alt="Gantang Satria Yudha"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <span className="text-blue-500 font-mono tracking-widest uppercase text-sm font-semibold">About Me</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-white">Gantang Satria Yudha</h2>
              <p className="text-xl text-white/60 mt-4 leading-relaxed">
                A dedicated <span className="text-white font-medium">Technology Student</span> passionate about building
                scalable web applications and intuitive user interfaces. I specialize in turning complex problems into
                elegant, pixel-perfect solutions.
              </p>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                <ProfileButton href="https://github.com/gantangsatria" label="Github" />
                <ProfileButton href="https://www.linkedin.com/in/gantangsatriayudha/" label="LinkedIn" />
                <ProfileButton href="#" label="Email Me" />
              </div>
            </div>
          </div>
        </div>
        <div id="achievement" className="w-full px-6 py-32 sm:px-16">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight italic uppercase text-white">
                Achievements
              </h2>
            </div>
              <div className="flex flex-col">
                {achievements.map((item, index) => (
                  <AchievementRow key={index} {...item} />
                ))
                }
              </div>
          </div>

        </div>
        <div id="experience" className="w-full px-6 py-32 sm:px-16">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight italic uppercase text-white">Experience</h2>
            </div>
            <div className="flex flex-col">
              {experiences.map((item, index) => (
                <ExperienceRow key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div id="project" className="min-h-dvh w-full px-6 py-12 sm:px-16">
          <div className="mb-4 text-center sm:text-left">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight italic uppercase text-white">Featured Work</h2>
            <p className="mt-4 text-muted-foreground">A collection of things I&apos;ve built with passion.</p>
          </div>
          <div className="mb-8 flex flex-wrap gap-3">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition
                  ${
                    selectedType === type
                      ? "bg-white text-black"
                      : "border border-white/30 text-white hover:bg-white hover:text-black"
                  }
                `}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
