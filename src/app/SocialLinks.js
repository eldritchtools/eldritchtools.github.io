import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const iconClass="inline-flex items-center justify-center bg-white rounded-full w-9 h-9 mx-2 shadow-md text-black text-[1.5rem] no-underline transition-transform duration-200 ease-in-out";
const iconClassRed="inline-flex items-center justify-center bg-white rounded-full w-9 h-9 mx-2 shadow-md text-[#FF0000] text-[1.5rem] no-underline transition-transform duration-200 ease-in-out"

function GithubIcon() {
    return <a
        href={"https://github.com/eldritchtools"}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        title="GitHub"
    >
        <FaGithub />
    </a>
}

function YoutubeIcon() {
    return <a
        href="https://www.youtube.com/@EldritchPlays"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClassRed}
        title="YouTube"
    >
        <FaYoutube />
    </a>
}

function XIcon() {
    return <a
        href="https://x.com/EldritchTools"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        title="Twitter / X"
    >
        <FaXTwitter />
    </a>
}

function KoFiButton() {
    return <a
        href="https://ko-fi.com/J3J31IBV7N"
        target="_blank"
        rel="noreferrer"
        className="inline-block"
    >
        <Image
            src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
            alt="Buy Me a Coffee at ko-fi.com"
            width={128}
            height={36}
            className="h-9 w-auto border-0"
        />
    </a>;
}

export default function SocialLinks() {
    return (
        <div className="flex items-center">
            <GithubIcon />
            <YoutubeIcon />
            <XIcon />
            <KoFiButton />
        </div>
    );
}
