"use client"

export default function HeroBannerText() {
  const text = "WELCOME"

  return (
    <div className="flex items-center justify-center">
      <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
              backgroundImage: `linear-gradient(135deg, #f9fafb, #e5e7eb, #cbd5f5)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(96, 165, 250, 0.5)",
              filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.3))",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  )
}