import Image from "next/image";
import ProfileButton from "@/components/profilebtn";
import ProjectCard from "@/components/cards/project-card";

export default function Home() {
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

        </div>
        <div id="experience" className="h-dvh">

        </div>
        <div id="project" className="h-dvh">

        </div>
      </main>
    </div>
  );
}
