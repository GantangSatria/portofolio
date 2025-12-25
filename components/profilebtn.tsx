type ProfileButtonProps = {
  href: string;
  label: string;
};

export default function ProfileButton({href,label}: ProfileButtonProps) {
    return (
        <a
        href={href}
        className="h-11 w-32 bg-white rounded-full flex items-center justify-center text-black shadow-md hover:scale-110 hover:ease-in-out duration-300"
        >
        {label}
        </a>
    );
}