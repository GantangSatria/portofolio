"use client"

import Image from "next/image";
import ProfileButton from "@/components/profilebtn";
import ProjectCard from "@/components/cards/project-card";
import projects from "@/data/projects";

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
        <div id="landing" className="h-dvh flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          
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
