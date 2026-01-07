"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Experience } from "@/types/experieces";

export default function ExperienceRow( props: Experience) {
  const {
        title,
        venue,
        year,
        description,
        image,
  } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col gap-6 py-12 transition-all duration-700 sm:flex-row-reverse sm:items-center sm:px-6 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-40 sm:w-56 border-2 border-white/20">
        <Image
          src={image || "/placeholder.svg?height=300&width=400&query=experience"}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:border-white/40"
        />
      </div>

      <div className="flex flex-1 flex-col rounded-lg bg-white/[0.02] border border-white/10 p-6 backdrop-blur-sm">
        <span className="mb-2 inline-flex w-fit rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
          {year}
        </span>

        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{title}</h3>

        <div className="mt-2 text-base font-medium text-white/70">{venue}</div>

        <p className="mt-4 text-sm leading-relaxed text-white/60">{description}</p>
      </div>
    </div>
  )
}
