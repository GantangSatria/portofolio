import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <div id="landing" className="h-dvh flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          
        </div>
        <div id="profile" className="h-dvh w-full bg-white">

        </div>
        <div id="achievement" className="h-dvh">

        </div>
        <div id="experience" className="h-dvh">

        </div>
        <div id="project" className="h-dvh">

        </div>
      </main>
    </div>
  );
}
