export default function Navbar() {
    return (
        <div className="justify-items-center">
            <div className="hidden md:flex md:flex-row z-1 justify-evenly px-8 text-black font-medium gap-4 items-center md:w-1/2 h-12 bg-white/75 rounded-full fixed top-8 border border-gray-200 backdrop-blur-[2px] shadow-xl">
                <a href="#profile">Profile</a>
                <a href="#achievement">Achievement</a>
                <a href="#experience">Experience</a>
                <a href="#project">Project</a>
            </div>
            <div className="md:hidden flex">

            </div>
        </div>
    )
}