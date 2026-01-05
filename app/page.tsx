"use client"

import Image from "next/image";
import ProfileButton from "@/components/profilebtn";
import ProjectCard from "@/components/cards/project-card";
import projects from "@/data/projects";
import HeroScene from "@/components/hero-scene"

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

          <div className="container relative z-10 mx-auto px-6 text-center">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm transition-colors hover:bg-white/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Available for new projects
            </div> */}

            <h1 className="text-6xl font-black tracking-tighter sm:text-8xl md:text-9xl">WELCOME</h1>

          </div>
        </div>
        <div id="profile" className="h-dvh w-full justify-items-center p-16">
          <div className="relative flex w-52 h-52 bg-white rounded-full mt-16 border-4">
            <Image
            src="/Foto.jpg"
            alt=""
            fill
            className="object-cover rounded-full hover:scale-105 hover:ease-in duration-300"
            priority
            />
          </div>
          <h1 className="text-3xl mt-4 font-bold">Gantang Satria Yudha</h1>
          <p className="my-2">Technology Student</p>
          <div className="flex flex-row gap-2 text-black text-center">
            <ProfileButton href="https://github.com/gantangsatria" label="Github"/>
            <ProfileButton href="https://www.linkedin.com/in/gantangsatriayudha/" label="LinkedIn"/>
            <ProfileButton href="#" label="Email"/>
          </div>
        </div>
        <div id="achievement" className="h-dvh">
          <div className="">

          </div>

        </div>
        <div id="experience" className="h-dvh">

        </div>
        <div id="project" className="min-h-dvh w-full px-6 py-12 sm:px-16">
          <div className="mb-4 text-center sm:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
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
