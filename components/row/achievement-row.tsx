import { Achievement } from "@/types/achievements"
import Image from "next/image";

export default function AchievementRow( props:Achievement ) {
    const {
        title,
        venue,
        year,
        description,
        image,
    } = props;
  return (
    <div className="group relative flex flex-col gap-6 border-b border-white/10 py-12 transition-all hover:bg-white/[0.02] sm:flex-row sm:items-start sm:px-6">
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-48">
        <Image
          src={image || "/placeholder.svg?height=300&width=400&query=achievement"}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h3>
          <span className="font-mono text-sm font-medium text-blue-500">{year}</span>
        </div>

        <div className="mt-1 text-lg font-medium text-white/80">{venue}</div>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/50">{description}</p>
      </div>
    </div>
  )
}
